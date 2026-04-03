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

$input = json_decode(file_get_contents("php://input"), true);

$email = trim($input['email'] ?? '');
$pass  = $input['password'] ?? '';

if (!$email || !$pass) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Email y contraseña son requeridos"]);
    exit();
}

$stmt = $pdo->prepare("SELECT id, nombre, email, telefono, password_hash FROM usuarios WHERE email = :email");
$stmt->execute([':email' => $email]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$user || !password_verify($pass, $user['password_hash'])) {
    http_response_code(401);
    echo json_encode(["success" => false, "message" => "Correo o contraseña incorrectos"]);
    exit();
}

echo json_encode([
    "success" => true,
    "message" => "Inicio de sesión exitoso",
    "user"    => [
        "id"       => $user['id'],
        "nombre"   => $user['nombre'],
        "email"    => $user['email'],
        "telefono" => $user['telefono'],
    ]
]);
