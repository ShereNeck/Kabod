@extends('layouts.employee')
@section('title', 'Dashboard — Grúas Kabod')

@section('content')
<div class="min-h-screen" style="background:#0a0a0a">
    <!-- Topbar -->
    <header class="sticky top-0 z-30" style="background:#111;border-bottom:1px solid #1f1f1f">
        <div class="container-custom flex items-center justify-between py-4">
            <div class="flex items-center gap-3">
                <img src="{{ asset('empresa_kabod.png') }}" alt="Grúas Kabod" class="h-9 object-contain" style="mix-blend-mode:screen">
                <div>
                    <p class="text-white font-bold leading-tight">Grúas Kabod</p>
                    <p class="text-primary text-xs font-semibold">Panel de Control</p>
                </div>
            </div>
            <div class="flex items-center gap-4">
                <div class="hidden sm:block text-right">
                    <p class="text-white text-sm font-semibold">{{ Auth::guard('empleado')->user()->Nombre }}</p>
                    <p class="text-gray-500 text-xs capitalize">{{ Auth::guard('empleado')->user()->Rol }}</p>
                </div>
                <form method="POST" action="{{ route('logout') }}">
                    @csrf
                    <button type="submit" class="flex items-center gap-2 text-sm text-gray-400 hover:text-red-400 border border-[#1f1f1f] px-3 py-2 rounded-lg hover:border-red-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                        Salir
                    </button>
                </form>
            </div>
        </div>
    </header>

    <main class="container-custom py-8">
        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            @php $total = $solicitudes->total(); @endphp
            @foreach([
                ['Total Solicitudes', $total, '#facc15'],
                ['Esta página', $solicitudes->count(), '#4ade80'],
                ['Página actual', $solicitudes->currentPage() . '/' . $solicitudes->lastPage(), '#60a5fa'],
                ['Por página', 20, '#f472b6'],
            ] as [$label,$val,$color])
            <div class="glass-card p-5">
                <p class="text-xs text-gray-500 font-semibold uppercase tracking-widest mb-2">{{ $label }}</p>
                <p class="text-3xl font-extrabold" style="color:{{ $color }}">{{ $val }}</p>
            </div>
            @endforeach
        </div>

        <!-- Tabla -->
        <div class="glass-card overflow-hidden">
            <div class="px-6 py-4 border-b border-[#1f1f1f] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 class="text-lg font-bold text-white">Solicitudes de Servicio</h2>
                    <span class="text-xs text-gray-500">{{ $solicitudes->total() }} registros en total</span>
                </div>
                <!-- Botones de exportación -->
                <div class="flex items-center gap-2 flex-wrap">
                    <a href="{{ route('dashboard.export.csv') }}"
                       class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold transition-colors"
                       style="background:rgba(74,222,128,0.12);color:#4ade80;border:1px solid rgba(74,222,128,0.3)"
                       onmouseover="this.style.background='rgba(74,222,128,0.22)'"
                       onmouseout="this.style.background='rgba(74,222,128,0.12)'">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                        CSV / Excel
                    </a>
                    <a href="{{ route('dashboard.export.pdf') }}" target="_blank"
                       class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold transition-colors"
                       style="background:rgba(239,68,68,0.12);color:#f87171;border:1px solid rgba(239,68,68,0.3)"
                       onmouseover="this.style.background='rgba(239,68,68,0.22)'"
                       onmouseout="this.style.background='rgba(239,68,68,0.12)'">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                        PDF
                    </a>
                    <a href="{{ route('dashboard.export.word') }}"
                       class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold transition-colors"
                       style="background:rgba(96,165,250,0.12);color:#60a5fa;border:1px solid rgba(96,165,250,0.3)"
                       onmouseover="this.style.background='rgba(96,165,250,0.22)'"
                       onmouseout="this.style.background='rgba(96,165,250,0.12)'">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                        Word
                    </a>
                </div>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full text-sm">
                    <thead>
                        <tr style="background:#0a0a0a;border-bottom:1px solid #1f1f1f">
                            <th class="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-widest">#</th>
                            <th class="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-widest">Nombre</th>
                            <th class="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-widest">Teléfono</th>
                            <th class="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-widest">Vehículo</th>
                            <th class="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-widest">Ubicación</th>
                            <th class="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-widest">Descripción</th>
                            <th class="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-widest">Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($solicitudes as $s)
                        <tr class="border-b border-[#1f1f1f] hover:bg-[#0a0a0a] transition-colors">
                            <td class="px-4 py-3 text-gray-500 font-mono text-xs">{{ $s->ID_Solicitud }}</td>
                            <td class="px-4 py-3 text-white font-semibold">{{ $s->Nombre }}</td>
                            <td class="px-4 py-3">
                                <a href="tel:{{ $s->Telefono }}" class="text-primary hover:underline font-medium">{{ $s->Telefono }}</a>
                            </td>
                            <td class="px-4 py-3">
                                <span class="px-2 py-0.5 rounded-full text-xs font-semibold" style="background:rgba(250,204,21,0.12);color:#facc15">
                                    {{ $s->TipoVehiculo ?? '—' }}
                                </span>
                            </td>
                            <td class="px-4 py-3 text-gray-300 max-w-[180px] truncate">{{ $s->Ubicacion }}</td>
                            <td class="px-4 py-3 text-gray-400 max-w-[200px] truncate">{{ $s->Descripcion ?? '—' }}</td>
                            <td class="px-4 py-3 text-gray-500 text-xs whitespace-nowrap">{{ $s->Fecha ? $s->Fecha->format('d/m/Y H:i') : '—' }}</td>
                        </tr>
                        @empty
                        <tr>
                            <td colspan="7" class="px-6 py-12 text-center text-gray-500">No hay solicitudes aún.</td>
                        </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
            @if($solicitudes->hasPages())
            <div class="px-6 py-4 border-t border-[#1f1f1f]">
                {{ $solicitudes->links() }}
            </div>
            @endif
        </div>
    </main>
</div>
@endsection
