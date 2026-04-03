<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('Empleado', function (Blueprint $table) {
            $table->id('ID_Empleado');
            $table->string('Nombre', 100);
            $table->string('Correo', 100)->unique();
            $table->string('Contrasena', 255);
            $table->enum('Rol', ['superadministrador', 'gerente', 'conductor'])->default('conductor');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('Empleado');
    }
};
