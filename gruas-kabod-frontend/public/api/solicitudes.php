<?php
header("Access-Control-Allow-Origin: https://domux.space");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Método no permitido"]);
    exit();
}

$host     = "localhost";
$dbname   = "u587735638_Kabod";
$username = "u587735638_Kabod";
$password = "Kabod1129";

try {
    $pdo = new PDO(
        "mysql:host=$host;dbname=$dbname;charset=utf8mb4",
        $username,
        $password,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Error de conexión a la base de datos"]);
    exit();
}

// Crear tabla si no existe
$pdo->exec("
    CREATE TABLE IF NOT EXISTS solicitudes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(150) NOT NULL,
        telefono VARCHAR(30) NOT NULL,
        tipo_vehiculo VARCHAR(80) NOT NULL,
        ubicacion VARCHAR(255) NOT NULL,
        descripcion TEXT,
        estado ENUM('pendiente','en_proceso','completado','cancelado') DEFAULT 'pendiente',
        creado_en DATETIME DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
");

$input = json_decode(file_get_contents("php://input"), true);

if (!is_array($input)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Datos inválidos"]);
    exit();
}

$nombre        = trim($input['name'] ?? '');
$telefono      = trim($input['phone'] ?? '');
$tipo_vehiculo = trim($input['vehicleType'] ?? '');
$ubicacion     = trim($input['location'] ?? '');
$descripcion   = trim($input['description'] ?? '');

$errores = [];

// Validar nombre
if (!$nombre) {
    $errores[] = "El nombre es obligatorio.";
} elseif (strlen($nombre) < 3 || strlen($nombre) > 80) {
    $errores[] = "El nombre debe tener entre 3 y 80 caracteres.";
} elseif (!preg_match('/^[\p{L}\s\']+$/u', $nombre)) {
    $errores[] = "El nombre solo puede contener letras y espacios.";
}

// Validar teléfono
$digitos = preg_replace('/\D/', '', $telefono);
if (!$telefono) {
    $errores[] = "El teléfono es obligatorio.";
} elseif (strlen($digitos) < 8 || strlen($digitos) > 15) {
    $errores[] = "El teléfono debe tener entre 8 y 15 dígitos.";
} elseif (!preg_match('/^[+]?[\d\s\-().]{8,20}$/', $telefono)) {
    $errores[] = "Formato de teléfono inválido.";
}

// Validar tipo de vehículo
$tipos_validos = ["Auto compacto", "Camioneta / SUV", "Motocicleta", "Vehículo pesado"];
if (!$tipo_vehiculo || !in_array($tipo_vehiculo, $tipos_validos)) {
    $errores[] = "Tipo de vehículo no válido.";
}

// Validar ubicación
if (!$ubicacion) {
    $errores[] = "La ubicación es obligatoria.";
} elseif (strlen($ubicacion) < 5 || strlen($ubicacion) > 200) {
    $errores[] = "La ubicación debe tener entre 5 y 200 caracteres.";
}

// Validar descripción (opcional)
if (strlen($descripcion) > 400) {
    $errores[] = "La descripción no puede superar los 400 caracteres.";
}

// Detección básica de inyección
$patron_peligroso = '/<[^>]*>|<script|SELECT\s|INSERT\s|DROP\s|--|(\|\|)/i';
foreach ([$nombre, $telefono, $ubicacion, $descripcion] as $campo) {
    if (preg_match($patron_peligroso, $campo)) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Se detectó contenido no permitido."]);
        exit();
    }
}

if (!empty($errores)) {
    http_response_code(422);
    echo json_encode(["success" => false, "message" => implode(" ", $errores)]);
    exit();
}

// Sanitizar
$nombre        = htmlspecialchars($nombre, ENT_QUOTES, 'UTF-8');
$telefono      = htmlspecialchars($telefono, ENT_QUOTES, 'UTF-8');
$tipo_vehiculo = htmlspecialchars($tipo_vehiculo, ENT_QUOTES, 'UTF-8');
$ubicacion     = htmlspecialchars($ubicacion, ENT_QUOTES, 'UTF-8');
$descripcion   = htmlspecialchars($descripcion, ENT_QUOTES, 'UTF-8');

$stmt = $pdo->prepare("
    INSERT INTO solicitudes (nombre, telefono, tipo_vehiculo, ubicacion, descripcion)
    VALUES (:nombre, :telefono, :tipo_vehiculo, :ubicacion, :descripcion)
");

$stmt->execute([
    ':nombre'        => $nombre,
    ':telefono'      => $telefono,
    ':tipo_vehiculo' => $tipo_vehiculo,
    ':ubicacion'     => $ubicacion,
    ':descripcion'   => $descripcion,
]);

echo json_encode([
    "success" => true,
    "message" => "Solicitud registrada correctamente",
    "id"      => $pdo->lastInsertId()
]);
