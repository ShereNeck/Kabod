@extends('layouts.app')
@section('title', 'Nosotros — Grúas Kabod')

@section('content')

<section class="section-padding" style="background-color:#111">
    <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
            <p class="text-primary font-bold uppercase tracking-widest text-sm mb-3">Quiénes somos</p>
            <h2 class="heading-2">Sobre <span class="text-primary">Nosotros</span></h2>
            <p class="text-body">En Grúas Kabod no solo movemos vehículos, brindamos tranquilidad en los momentos de mayor tensión.</p>
        </div>

        <!-- Misión / Visión / Compromiso -->
        <div class="grid md:grid-cols-3 gap-6 mb-20">
            @foreach([
                ['clock','Misión','Brindar servicios rápidos, seguros y confiables para todo tipo de vehículos, atendiendo emergencias con atención personalizada, garantizando la satisfacción de nuestros clientes en cada servicio.'],
                ['star','Visión','Ser la empresa de grúas más confiable y reconocida a nivel de Honduras, líder en innovación, eficiencia y atención al cliente.'],
                ['thumbs-up','Compromiso','Nos dedicamos a ofrecer un servicio excepcional en cada atención, actuando con transparencia en tarifas y priorizando la protección de personas y vehículos.'],
            ] as [$icon,$title,$desc])
            <div class="glass-card p-8 hover:border-primary/50 transition-colors group">
                <div class="h-14 w-14 rounded-2xl flex items-center justify-center mb-5" style="background:rgba(250,204,21,0.1);border:1px solid rgba(250,204,21,0.2)">
                    @if($icon === 'clock')
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#facc15" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    @elseif($icon === 'star')
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#facc15" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    @else
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#facc15" stroke-width="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
                    @endif
                </div>
                <h3 class="text-xl font-bold mb-3 text-white">{{ $title }}</h3>
                <p class="text-gray-400 leading-relaxed text-sm">{{ $desc }}</p>
            </div>
            @endforeach
        </div>

        <!-- Historia + Valores -->
        <div class="grid lg:grid-cols-2 gap-12 items-start">
            <!-- Historia -->
            <div>
                <div class="flex items-center gap-3 mb-6">
                    <div class="h-12 w-12 rounded-xl flex items-center justify-center" style="background:rgba(250,204,21,0.1);border:1px solid rgba(250,204,21,0.2)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#facc15" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    </div>
                    <h3 class="text-2xl font-extrabold text-white">Nuestra Historia</h3>
                </div>
                <div class="relative pl-6 space-y-8" style="border-left:2px solid rgba(250,204,21,0.3)">
                    @foreach([
                        ['2024 — Fundación','Grúas Kabod fue fundada por <strong class="text-white">Scarleth Jackeline Cardona</strong> como una solución confiable para emergencias y traslados de vehículos en Honduras.', false],
                        ['Crecimiento','Desde sus inicios, la empresa ha brindado rapidez, seguridad y atención personalizada a cada cliente, consolidándose como referente en el sector vial hondureño.', false],
                        ['Hoy','Operamos las 24 horas del día, los 7 días de la semana, con unidades equipadas y un equipo comprometido con llevar tranquilidad a cada cliente.', true],
                    ] as [$label,$text,$pulse])
                    <div class="relative">
                        <div class="absolute rounded-full {{ $pulse ? 'animate-pulse' : '' }}" style="left:-29px;top:4px;width:16px;height:16px;background:{{ $pulse ? 'rgba(250,204,21,0.5)' : '#facc15' }};border:2px solid #111;"></div>
                        <span class="text-primary text-xs font-bold uppercase tracking-widest">{{ $label }}</span>
                        <p class="text-gray-300 mt-2 leading-relaxed text-sm">{!! $text !!}</p>
                    </div>
                    @endforeach
                </div>
                <div class="mt-8 flex items-center gap-4 p-4 bg-[#0a0a0a] rounded-xl border border-[#1f1f1f]">
                    <div class="h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0" style="background:rgba(250,204,21,0.1);border:1px solid rgba(250,204,21,0.3)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#facc15" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </div>
                    <div>
                        <p class="text-xs text-gray-500 font-semibold uppercase tracking-wide">Fundadora</p>
                        <p class="text-white font-bold">Scarleth Jackeline Cardona</p>
                    </div>
                </div>
            </div>

            <!-- Valores -->
            <div>
                <div class="flex items-center gap-3 mb-6">
                    <div class="h-12 w-12 rounded-xl flex items-center justify-center" style="background:rgba(250,204,21,0.1);border:1px solid rgba(250,204,21,0.2)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#facc15" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <h3 class="text-2xl font-extrabold text-white">Nuestros Valores</h3>
                </div>
                <div class="space-y-4">
                    @foreach([
                        ['Responsabilidad','Cumplimos con nuestros compromisos y horarios establecidos.'],
                        ['Seguridad','Priorizamos la protección de las personas y vehículos en cada servicio.'],
                        ['Puntualidad','Valoramos el tiempo de nuestros clientes y llegamos siempre a tiempo.'],
                        ['Honestidad','Actuamos con transparencia en tarifas y servicios.'],
                        ['Compromiso','Nos dedicamos a ofrecer un servicio excepcional en cada atención.'],
                    ] as [$title,$desc])
                    <div class="flex items-start gap-4 p-4 bg-[#0a0a0a] rounded-xl border border-[#1f1f1f] hover:border-primary/50 transition-colors group">
                        <div class="h-10 w-10 rounded-lg flex items-center justify-center text-primary flex-shrink-0 transition-colors group-hover:bg-primary group-hover:text-black" style="background:rgba(250,204,21,0.1)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        </div>
                        <div>
                            <p class="text-white font-bold mb-0.5">{{ $title }}</p>
                            <p class="text-gray-400 text-sm leading-relaxed">{{ $desc }}</p>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>
        </div>

        <!-- CTA -->
        <div class="text-center mt-16">
            <a href="{{ route('home') }}#booking" class="btn-primary text-lg px-10 py-4 inline-flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                Solicitar una grúa ahora
            </a>
        </div>
    </div>
</section>

@endsection
