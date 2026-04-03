<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SolicitudController;
use Illuminate\Support\Facades\Route;

// Páginas públicas
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/nosotros', [HomeController::class, 'nosotros'])->name('nosotros');
Route::get('/servicios', [HomeController::class, 'servicios'])->name('servicios');
Route::get('/contacto', [HomeController::class, 'contacto'])->name('contacto');

// Solicitud de grúa (AJAX)
Route::post('/solicitud', [SolicitudController::class, 'store'])
    ->name('solicitud.store')
    ->middleware('throttle:10,1');

// Autenticación de empleados
Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
Route::post('/login', [AuthController::class, 'login'])->name('login.post');
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

// Dashboard (protegido - solo empleados)
Route::middleware('empleado.auth')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/dashboard/export/csv', [DashboardController::class, 'exportCsv'])->name('dashboard.export.csv');
    Route::get('/dashboard/export/pdf', [DashboardController::class, 'exportPdf'])->name('dashboard.export.pdf');
    Route::get('/dashboard/export/word', [DashboardController::class, 'exportWord'])->name('dashboard.export.word');
});
