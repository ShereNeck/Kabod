@extends('layouts.app')
@section('title', 'Servicios — Grúas Kabod')

@push('styles')
<style>
    .service-card { transition:transform .25s,border-color .25s; }
    .service-card:hover { transform:translateY(-8px); border-color:#facc15; }
    .modal-overlay { position:fixed; inset:0; z-index:60; display:flex; align-items:center; justify-content:center; padding:1rem; background:rgba(0,0,0,0.85); backdrop-filter:blur(4px); }
</style>
@endpush

@section('content')

<section class="section-padding relative overflow-hidden">
    <div class="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style="background:rgba(250,204,21,0.04);filter:blur(120px)"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none" style="background:rgba(250,204,21,0.04);filter:blur(120px)"></div>

    <div class="container-custom relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-16">
            <p class="text-primary font-bold uppercase tracking-widest text-sm mb-3">Lo que hacemos</p>
            <h2 class="heading-2">Nuestros <span class="text-primary">Servicios</span></h2>
            <p class="text-body">La mejor tecnología en remolques a tu disposición. Haz clic en cualquier servicio para ver detalles.</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" x-data="serviceModal()">
            @php
            $services = [
                ['truck','Remolque de Vehículos','Traslado seguro de todo tipo de autos y camionetas con grúas especializadas.','Más solicitado',['Traslado puerta a puerta','Vehículos accidentados','Cobertura en toda la zona','Disponible 24/7']],
                ['wrench','Auxilio Vial','Asistencia rápida para problemas mecánicos menores en carretera. Llegamos equipados.',null,['Cambio de neumáticos','Diagnóstico en campo','Herramientas especializadas','Sin costo de traslado']],
                ['car','Traslado de Autos','Plataformas especiales para llevar tu vehículo a otra ciudad de forma segura.',null,['Plataformas homologadas','Seguro incluido','Seguimiento en tiempo real','Entrega en destino']],
                ['battery','Arranque de Batería','Paso de corriente seguro con equipos certificados para que continúes tu camino.','Rápido',['Equipos certificados','Sin riesgo eléctrico','Servicio en 15 min','Gratis revisión del sistema']],
            ];
            @endphp

            @foreach($services as $s)
            <button @click="open({{ json_encode($s) }})"
                class="text-left bg-[#111] p-8 rounded-2xl border border-[#1f1f1f] service-card hover:border-primary group overflow-hidden relative cursor-pointer w-full">
                @if($s[3])
                <span class="absolute top-4 right-4 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full">{{ $s[3] }}</span>
                @endif
                <div class="text-primary mb-6">
                    @if($s[0] === 'truck')
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                    @elseif($s[0] === 'wrench')
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                    @elseif($s[0] === 'car')
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-3"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>
                    @else
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                    @endif
                </div>
                <h3 class="text-xl font-bold mb-3 text-white">{{ $s[1] }}</h3>
                <p class="text-gray-400 text-sm leading-relaxed mb-6">{{ $s[2] }}</p>
                <div class="flex items-center gap-2 text-primary text-sm font-bold">
                    <span>Ver detalles</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
            </button>
            @endforeach

            <!-- CTA card -->
            <a href="{{ route('home') }}#booking"
               class="flex flex-col items-center justify-center rounded-2xl p-8 group cursor-pointer transition-all"
               style="background:rgba(250,204,21,0.06);border:2px dashed rgba(250,204,21,0.35);"
               onmouseover="this.style.borderColor='#facc15';this.style.background='rgba(250,204,21,0.12)'"
               onmouseout="this.style.borderColor='rgba(250,204,21,0.35)';this.style.background='rgba(250,204,21,0.06)'">
                <div class="h-16 w-16 rounded-2xl flex items-center justify-center mb-4" style="background:rgba(250,204,21,0.15)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#facc15" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">¿Emergencia ahora?</h3>
                <p class="text-gray-400 text-sm text-center mb-4">Solicita una grúa de inmediato sin necesidad de seleccionar un servicio.</p>
                <span class="btn-primary py-2.5 px-6 text-sm">Solicitar ahora</span>
            </a>

            <!-- Modal de servicio -->
            <div x-show="show" x-cloak class="modal-overlay" @click.self="show = false">
                <div class="relative w-full max-w-lg bg-[#111] border border-[#1f1f1f] rounded-2xl shadow-2xl overflow-hidden">
                    <button @click="show = false" class="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#0a0a0a] border border-[#1f1f1f] text-gray-400 hover:text-white hover:border-primary transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                    <div class="bg-primary p-6 text-black">
                        <h3 class="text-2xl font-extrabold mb-1" x-text="service[1]"></h3>
                        <p class="text-black/70 font-medium text-sm" x-text="service[2]"></p>
                    </div>
                    <div class="p-6">
                        <p class="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-3">Incluye</p>
                        <ul class="space-y-2 mb-6">
                            <template x-for="f in (service[4] || [])">
                                <li class="flex items-center gap-3 text-sm text-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#facc15" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span x-text="f"></span>
                                </li>
                            </template>
                        </ul>
                        <a href="{{ route('home') }}#booking" @click="show = false" class="btn-primary w-full">Solicitar este servicio</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

@endsection

@push('scripts')
<script>
function serviceModal() {
    return {
        show: false,
        service: [],
        open(s) { this.service = s; this.show = true; }
    };
}
</script>
@endpush
