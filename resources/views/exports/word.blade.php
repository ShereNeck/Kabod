<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
<head>
<meta charset="UTF-8">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Solicitudes — Grúas Kabod</title>
<style>
    body { font-family: Arial, sans-serif; font-size: 11pt; color: #111; }
    h1 { font-size: 18pt; color: #000; margin-bottom: 4pt; }
    h2 { font-size: 12pt; color: #555; margin-bottom: 16pt; }
    .meta { font-size: 10pt; color: #666; margin-bottom: 20pt; }
    table { width: 100%; border-collapse: collapse; font-size: 10pt; }
    th { background: #111; color: #facc15; padding: 8pt 6pt; text-align: left; font-size: 9pt; text-transform: uppercase; }
    td { padding: 6pt; border-bottom: 1pt solid #ddd; vertical-align: top; }
    tr:nth-child(even) td { background: #fafafa; }
</style>
</head>
<body>
<h1>Grúas Kabod</h1>
<h2>Reporte de Solicitudes de Servicio</h2>
<p class="meta">
    Fecha de exportación: {{ now()->format('d/m/Y H:i') }}<br>
    Total de registros: {{ $solicitudes->count() }}
</p>

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
            <td>{{ $s->TipoVehiculo ?? '—' }}</td>
            <td>{{ $s->Ubicacion }}</td>
            <td>{{ $s->Descripcion ?? '—' }}</td>
            <td>{{ $s->Fecha ? $s->Fecha->format('d/m/Y H:i') : '—' }}</td>
        </tr>
        @empty
        <tr><td colspan="7">No hay solicitudes.</td></tr>
        @endforelse
    </tbody>
</table>
</body>
</html>
