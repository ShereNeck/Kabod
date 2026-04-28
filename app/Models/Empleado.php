<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class Empleado extends Authenticatable
{
    protected $table = 'Empleado';
    protected $primaryKey = 'ID_Empleado';

    protected $fillable = [
        'Nombre',
        'Correo',
        'Contrasena',
        'Rol',
    ];

    protected $hidden = [
        'Contrasena',
    ];

    // Laravel Auth usa 'password' internamente, mapeamos al campo real
    public function getAuthPassword()
    {
        return $this->Contrasena;
    }

    public function getAuthIdentifierName()
    {
        return 'ID_Empleado';
    }

    public function canAccessDashboard(): bool
    {
        return in_array($this->Rol, ['superadministrador', 'gerente']);
    }

    public $timestamps = false;
}
