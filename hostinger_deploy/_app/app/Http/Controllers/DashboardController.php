<?php

namespace App\Http\Controllers;

use App\Models\Solicitud;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $solicitudes = Solicitud::orderByDesc('Fecha')->paginate(20);
        return view('dashboard', compact('solicitudes'));
    }

    public function exportCsv()
    {
        $solicitudes = Solicitud::orderByDesc('Fecha')->get();

        $csv = "\xEF\xBB\xBF"; // BOM para Excel
        $csv .= "ID,Nombre,Telefono,Vehiculo,Ubicacion,Descripcion,Fecha\n";

        foreach ($solicitudes as $s) {
            $csv .= implode(',', [
                $s->ID_Solicitud,
                '"' . str_replace('"', '""', $s->Nombre) . '"',
                '"' . str_replace('"', '""', $s->Telefono) . '"',
                '"' . str_replace('"', '""', $s->TipoVehiculo ?? '') . '"',
                '"' . str_replace('"', '""', $s->Ubicacion) . '"',
                '"' . str_replace('"', '""', $s->Descripcion ?? '') . '"',
                '"' . ($s->Fecha ? $s->Fecha->format('d/m/Y H:i') : '') . '"',
            ]) . "\n";
        }

        $filename = 'solicitudes_' . now()->format('Ymd_His') . '.csv';

        return response($csv, 200, [
            'Content-Type' => 'text/csv; charset=UTF-8',
            'Content-Disposition' => 'attachment; filename="' . $filename . '"',
        ]);
    }

    public function exportPdf()
    {
        $solicitudes = Solicitud::orderByDesc('Fecha')->get();
        return view('exports.pdf', compact('solicitudes'));
    }

    public function exportWord()
    {
        $solicitudes = Solicitud::orderByDesc('Fecha')->get();
        $filename = 'solicitudes_' . now()->format('Ymd_His') . '.doc';

        return response()
            ->view('exports.word', compact('solicitudes'))
            ->header('Content-Type', 'application/msword')
            ->header('Content-Disposition', 'attachment; filename="' . $filename . '"');
    }
}
