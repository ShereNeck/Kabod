<?php

namespace App\Http\Controllers;

use App\Models\Solicitud;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class SolicitudController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'nombre'       => ['required', 'string', 'min:3', 'max:80', 'regex:/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\'\s]+$/u'],
            'telefono'     => ['required', 'string', 'min:8', 'max:20', 'regex:/^[+]?[\d\s\-().]{8,20}$/'],
            'tipoVehiculo' => ['required', 'in:Auto compacto,Camioneta / SUV,Motocicleta'],
            'ubicacion'    => ['required', 'string', 'min:5', 'max:200'],
            'descripcion'  => ['nullable', 'string', 'max:400'],
        ]);

        Solicitud::create([
            'Nombre'       => $validated['nombre'],
            'Telefono'     => $validated['telefono'],
            'TipoVehiculo' => $validated['tipoVehiculo'],
            'Ubicacion'    => $validated['ubicacion'],
            'Descripcion'  => $validated['descripcion'] ?? null,
        ]);

        return response()->json(['success' => true]);
    }
}
