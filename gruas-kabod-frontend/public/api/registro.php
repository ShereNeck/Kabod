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

// Crear tabla usuarios si no existe
$pdo->exec("
    CREATE TABLE IF NOT EXISTS usuarios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(150) NOT NULL,
        email VARCHAR(200) NOT NULL UNIQUE,
        telefono VARCHAR(30),
        password_hash VARCHAR(255) NOT NULL,
        creado_en DATETIME DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
");

$input = json_decode(file_get_contents("php://input"), true);

$nombre   = trim($input['nombre'] ?? '');
$email    = trim($input['email'] ?? '');
$telefono = trim($input['telefono'] ?? '');
$pass     = $input['password'] ?? '';

if (!$nombre || !$email || !$pass) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Nombre, email y contraseña son requeridos"]);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "El correo electrónico no es válido"]);
    exit();
}

if (strlen($pass) < 6) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "La contraseña debe tener al menos 6 caracteres"]);
    exit();
}

// Verificar si el email ya existe
$check = $pdo->prepare("SELECT id FROM usuarios WHERE email = :email");
$check->execute([':email' => $email]);
if ($check->fetch()) {
    http_response_code(409);
    echo json_encode(["success" => false, "message" => "Este correo ya está registrado"]);
    exit();
}

$hash = password_hash($pass, PASSWORD_DEFAULT);

$stmt = $pdo->prepare("
    INSERT INTO usuarios (nombre, email, telefono, password_hash)
    VALUES (:nombre, :email, :telefono, :hash)
");
$stmt->execute([
    ':nombre'   => $nombre,
    ':email'    => $email,
    ':telefono' => $telefono,
    ':hash'     => $hash,
]);

$userId = $pdo->lastInsertId();

echo json_encode([
    "success" => true,
    "message" => "Cuenta creada exitosamente",
    "user"    => [
        "id"       => $userId,
        "nombre"   => $nombre,
        "email"    => $email,
        "telefono" => $telefono,
    ]
]);
