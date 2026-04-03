<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('Solicitud', function (Blueprint $table) {
            $table->id('ID_Solicitud');
            $table->string('Nombre', 100);
            $table->string('Telefono', 20);
            $table->string('Ubicacion', 255);
            $table->string('TipoVehiculo', 80)->nullable();
            $table->text('Descripcion')->nullable();
            $table->timestamp('Fecha')->useCurrent();
            $table->index('Fecha', 'idx_fecha');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('Solicitud');
    }
};
