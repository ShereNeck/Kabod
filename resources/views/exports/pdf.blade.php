<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Solicitudes — Grúas Kabod</title>
<style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family: Arial, sans-serif; font-size: 12px; color: #111; background: #fff; }
    .header { background: #facc15; padding: 20px 30px; display: flex; align-items: center; justify-content: space-between; }
    .header h1 { font-size: 22px; font-weight: 900; color: #000; }
    .header p { font-size: 11px; color: #333; }
    .meta { padding: 12px 30px; background: #f5f5f5; border-bottom: 1px solid #ddd; font-size: 11px; color: #555; }
    table { width: 100%; border-collapse: collapse; margin-top: 0; }
    thead tr { background: #111; color: #facc15; }
    thead th { padding: 10px 8px; text-align: left; font-size: 10px; text-transform: uppercase; letter-spacing: .05em; }
    tbody tr { border-bottom: 1px solid #eee; }
    tbody tr:nth-child(even) { background: #fafafa; }
    tbody td { padding: 8px; font-size: 11px; color: #222; vertical-align: top; }
    .badge { background: #fef9c3; color: #854d0e; border-radius: 4px; padding: 2px 6px; font-size: 10px; font-weight: 700; }
    .print-btn { position: fixed; top: 16px; right: 16px; background: #facc15; border: none; padding: 10px 20px; font-weight: 800; font-size: 13px; cursor: pointer; border-radius: 6px; }
    @media print { .print-btn { display: none; } }
</style>
</head>
<body>
<button class="print-btn" onclick="window.print()">Imprimir / Guardar PDF</button>

<div class="header">
    <div>
        <h1>Grúas Kabod</h1>
        <p>Reporte de Solicitudes de Servicio</p>
    </div>
    <div style="text-align:right">
        <p><strong>Fecha de exportación:</strong> {{ now()->format('d/m/Y H:i') }}</p>
        <p><strong>Total de registros:</strong> {{ $solicitudes->count() }}</p>
    </div>
</div>

<div class="meta">
    Generado por el sistema de gestión Grúas Kabod &mdash; domux.space
</div>

<table>
    <thead>
        <tr>
            <th>#ID</th>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Vehículo</th>
            <th>Ubicación</th>
            <th>Descripción</th>
            <th>Fecha</th>
        </tr>
    </thead>
    <tbody>
        @forelse($solicitudes as $s)
        <tr>
            <td>{{ $s->ID_Solicitud }}</td>
            <td><strong>{{ $s->Nombre }}</strong></td>
            <td>{{ $s->Telefono }}</td>
            <td><span class="badge">{{ $s->TipoVehiculo ?? '—' }}</span></td>
            <td>{{ $s->Ubicacion }}</td>
            <td>{{ $s->Descripcion ?? '—' }}</td>
            <td>{{ $s->Fecha ? $s->Fecha->format('d/m/Y H:i') : '—' }}</td>
        </tr>
        @empty
        <tr><td colspan="7" style="text-align:center;padding:20px;color:#888">No hay solicitudes.</td></tr>
        @endforelse
    </tbody>
</table>
</body>
</html>
