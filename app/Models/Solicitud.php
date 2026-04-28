<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Solicitud extends Model
{
    protected $table = 'Solicitud';
    protected $primaryKey = 'ID_Solicitud';

    protected $fillable = [
        'Nombre',
        'Telefono',
        'Ubicacion',
        'TipoVehiculo',
        'Descripcion',
    ];

    // La BD ya tiene DEFAULT current_timestamp() para Fecha
    public $timestamps = false;

    protected $casts = [
        'Fecha' => 'datetime',
    ];
}
