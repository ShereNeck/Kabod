<?php
/**
 * HOSTINGER DEPLOYMENT — Archivo que va en public_html/index.php
 *
 * Instrucciones:
 * 1. Sube TODA la carpeta gruas-kabod-laravel (excepto vendor/) al servidor
 *    en una ruta FUERA de public_html, por ejemplo:
 *    /home/u587735638/laravel_kabod/
 *
 * 2. Ejecuta "composer install --no-dev" en esa carpeta vía SSH o File Manager.
 *
 * 3. Renombra ESTE archivo a "index.php" y colócalo en public_html/
 *
 * 4. Copia también public/.htaccess a public_html/.htaccess
 *
 * 5. Copia empresa_kabod.png a public_html/empresa_kabod.png
 *
 * 6. Ajusta $laravelPath abajo con la ruta real de tu hosting.
 */

// ── Ajusta esta ruta a donde subiste el proyecto ──────────────────
$laravelPath = dirname(__DIR__) . '/laravel_kabod';

// ── NO modificar nada debajo de esta línea ────────────────────────
define('LARAVEL_START', microtime(true));

if (file_exists($laravelPath . '/vendor/autoload.php')) {
    require $laravelPath . '/vendor/autoload.php';
} else {
    die('Error: vendor/autoload.php no encontrado. Ejecuta composer install.');
}

$app = require_once $laravelPath . '/bootstrap/app.php';

// Apuntar el public path al public_html real
$app->bind('path.public', function() {
    return __DIR__;
});

$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);
$response = $kernel->handle(
    $request = Illuminate\Http\Request::capture()
)->send();
$kernel->terminate($request, $response);
