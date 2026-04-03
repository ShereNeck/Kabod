<?php

define('LARAVEL_START', microtime(true));

// Ruta a la carpeta _app dentro de public_html
$appPath = __DIR__ . '/_app';

require $appPath . '/vendor/autoload.php';

$app = require_once $appPath . '/bootstrap/app.php';

// Apuntar public path a public_html (esta carpeta)
$app->bind('path.public', function () {
    return __DIR__;
});

$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

$response = $kernel->handle(
    $request = Illuminate\Http\Request::capture()
)->send();

$kernel->terminate($request, $response);
