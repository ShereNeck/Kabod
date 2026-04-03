<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', 'Grúas Kabod - Servicio de Remolque 24/7')</title>
    <meta name="description" content="Servicio de grúas y remolque 24/7 en Honduras. Rápido, seguro y confiable. Llámanos al +504 9920-2183.">

    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#facc15',
                        dark: '#0a0a0a',
                        'dark-elevated': '#111111',
                        'dark-border': '#1f1f1f',
                    },
                    fontFamily: { sans: ['Inter','system-ui','sans-serif'] },
                }
            }
        }
    </script>
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

    <style>
        body { background:#0a0a0a; color:#fff; font-family:'Inter',sans-serif; }

        .btn-primary {
            display:inline-flex; align-items:center; gap:.5rem; justify-content:center;
            background:linear-gradient(135deg,#facc15,#f59e0b);
            color:#000; font-weight:800;
            padding:.75rem 1.5rem; border-radius:9999px;
            box-shadow:0 0 28px rgba(250,204,21,.45),0 4px 15px rgba(0,0,0,.3);
            transition:transform .15s,box-shadow .2s; text-decoration:none; border:none; cursor:pointer;
        }
        .btn-primary:hover { transform:translateY(-2px) scale(1.02); box-shadow:0 0 40px rgba(250,204,21,.6),0 6px 20px rgba(0,0,0,.4); }
        .btn-primary:active { transform:scale(.97); }
        .btn-primary:disabled { opacity:.6; cursor:not-allowed; }

        .btn-whatsapp {
            display:inline-flex; align-items:center; gap:.5rem; justify-content:center;
            background:linear-gradient(135deg,#25D366,#128C7E);
            color:#fff; font-weight:700;
            padding:.75rem 1.5rem; border-radius:9999px;
            box-shadow:0 0 28px rgba(37,211,102,.4),0 4px 15px rgba(0,0,0,.3);
            transition:transform .15s,box-shadow .2s; text-decoration:none; border:none; cursor:pointer;
        }
        .btn-whatsapp:hover { transform:translateY(-2px) scale(1.02); box-shadow:0 0 40px rgba(37,211,102,.55),0 6px 20px rgba(0,0,0,.4); }

        .glass-card { background:#111; border:1px solid #1f1f1f; border-radius:1rem; }
        .section-padding { padding:5rem 0; }
        .container-custom { max-width:1200px; margin:0 auto; padding:0 1.5rem; }
        .heading-2 { font-size:2.25rem; font-weight:800; line-height:1.2; margin-bottom:1rem; }
        .text-body { color:#9ca3af; font-size:1.05rem; line-height:1.7; }
        .field { width:100%; background:#0a0a0a; border:1px solid #1f1f1f; border-radius:.5rem; padding:.75rem 1rem; color:#fff; font-size:.875rem; outline:none; transition:border-color .2s; }
        .field:focus { border-color:#facc15; }
        .field.error { border-color:#ef4444; }
        .field.valid { border-color:#22c55e; }
        .field::placeholder { color:#4b5563; }
        .spinner { width:1.25rem; height:1.25rem; border:2px solid transparent; border-top-color:#000; border-radius:50%; animation:spin .7s linear infinite; display:inline-block; }
        @keyframes spin { to { transform:rotate(360deg); } }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.5} }
        .animate-pulse { animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite; }
        [x-cloak] { display:none !important; }
        @keyframes wa-ring { 0%{transform:scale(1);opacity:.6} 100%{transform:scale(1.9);opacity:0} }
        @keyframes ping { 75%,100%{transform:scale(2);opacity:0} }

        /* Navbar active link */
        .nav-link { color:#d1d5db; font-weight:500; transition:color .2s; font-size:.875rem; text-transform:uppercase; letter-spacing:.05em; text-decoration:none; }
        .nav-link:hover, .nav-link.active { color:#facc15; }
        #navbar { transition:all .3s; }
        #navbar.scrolled { background:rgba(10,10,10,.93); backdrop-filter:blur(12px); padding-top:.75rem; padding-bottom:.75rem; box-shadow:0 4px 30px rgba(0,0,0,.5); }
    </style>
    @stack('styles')
</head>
<body class="min-h-screen overflow-x-hidden">

{{-- ══════════════════════════ NAVBAR (compartido) ══════════════════════════ --}}
<header id="navbar" class="fixed top-0 left-0 right-0 z-50 py-5"
    x-data="{ scrolled:false, menuOpen:false }"
    x-init="window.addEventListener('scroll',()=>{ scrolled=window.scrollY>50 })"
    :class="scrolled ? 'scrolled' : ''">

    <div class="container-custom flex items-center justify-between">
        <a href="{{ route('home') }}" class="flex items-center gap-3 group">
            <img src="{{ asset('empresa_kabod.png') }}" alt="Grúas Kabod"
                 class="h-10 md:h-12 object-contain group-hover:scale-105 transition-transform"
                 style="mix-blend-mode:screen">
            <div class="hidden sm:block">
                <h1 class="text-xl font-bold tracking-tight text-white m-0 leading-tight">Grúas Kabod</h1>
                <span class="text-primary text-xs font-semibold tracking-wider uppercase">Servicio de Remolque</span>
            </div>
        </a>

        <!-- Desktop Nav -->
        <nav class="hidden lg:flex items-center gap-8">
            <ul class="flex gap-6">
                <li><a href="{{ route('home') }}" class="nav-link {{ request()->routeIs('home') ? 'active' : '' }}">Inicio</a></li>
                <li><a href="{{ route('nosotros') }}" class="nav-link {{ request()->routeIs('nosotros') ? 'active' : '' }}">Nosotros</a></li>
                <li><a href="{{ route('servicios') }}" class="nav-link {{ request()->routeIs('servicios') ? 'active' : '' }}">Servicios</a></li>
                <li><a href="{{ route('contacto') }}" class="nav-link {{ request()->routeIs('contacto') ? 'active' : '' }}">Contacto</a></li>
            </ul>
            <a href="{{ route('home') }}#booking" class="btn-primary py-2.5 px-6 text-sm">Solicitar grúa</a>
        </nav>

        <!-- Mobile toggle -->
        <button @click="menuOpen=!menuOpen" class="lg:hidden text-white" aria-label="Menú">
            <template x-if="!menuOpen"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg></template>
            <template x-if="menuOpen"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></template>
        </button>
    </div>

    <!-- Mobile menu -->
    <div x-show="menuOpen" x-cloak class="lg:hidden absolute top-full left-0 right-0 bg-[#111] border-b border-[#1f1f1f] shadow-2xl">
        <ul class="flex flex-col py-4 px-6 space-y-4">
            <li><a href="{{ route('home') }}" @click="menuOpen=false" class="block text-gray-300 hover:text-primary font-medium text-lg py-2 border-b border-[#1f1f1f]">Inicio</a></li>
            <li><a href="{{ route('nosotros') }}" @click="menuOpen=false" class="block text-gray-300 hover:text-primary font-medium text-lg py-2 border-b border-[#1f1f1f]">Nosotros</a></li>
            <li><a href="{{ route('servicios') }}" @click="menuOpen=false" class="block text-gray-300 hover:text-primary font-medium text-lg py-2 border-b border-[#1f1f1f]">Servicios</a></li>
            <li><a href="{{ route('contacto') }}" @click="menuOpen=false" class="block text-gray-300 hover:text-primary font-medium text-lg py-2 border-b border-[#1f1f1f]">Contacto</a></li>
            <li class="pt-2 pb-2">
                <a href="{{ route('home') }}#booking" @click="menuOpen=false" class="btn-primary w-full text-center">Solicitar grúa</a>
            </li>
        </ul>
    </div>
</header>

{{-- Contenido de la página --}}
<div class="pt-20">
    @yield('content')
</div>

{{-- ══════════════════════════ FOOTER (diseño nuevo) ══════════════════════════ --}}
<footer style="background:#0a0a0a; border-top:1px solid #1a1a1a">
    <div class="container-custom py-8">
        <!-- Fila principal -->
        <div class="flex flex-col md:flex-row items-center justify-between gap-8">

            <!-- Izquierda: Logo + nombre -->
            <div class="flex items-center gap-3">
                <img src="{{ asset('empresa_kabod.png') }}" alt="Grúas Kabod"
                     class="h-14 object-contain" style="mix-blend-mode:screen">
                <div>
                    <p class="text-white font-bold text-lg leading-tight">Grúas Kabod</p>
                    <p class="text-primary text-xs font-bold uppercase tracking-widest">Servicio de Remolque</p>
                </div>
            </div>

            <!-- Centro: Redes sociales -->
            <div class="flex items-center gap-4">
                <a href="#" class="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110"
                   style="background:#222" onmouseover="this.style.background='#facc15'" onmouseout="this.style.background='#222'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" class="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110"
                   style="background:#222" onmouseover="this.style.background='#facc15'" onmouseout="this.style.background='#222'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="#" class="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110"
                   style="background:#222" onmouseover="this.style.background='#facc15'" onmouseout="this.style.background='#222'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg>
                </a>
            </div>

            <!-- Derecha: Contacto -->
            <div class="flex flex-col gap-3">
                <a href="mailto:emilioarg355@gmail.com" class="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors">
                    <div class="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style="background:rgba(250,204,21,.12)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#facc15" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </div>
                    <span class="font-medium">emilioarg355@gmail.com</span>
                </a>
                <a href="tel:+50499202183" class="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors">
                    <div class="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style="background:rgba(250,204,21,.12)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#facc15" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4C1.5 2.43 2.1 1.5 3.07 1.18a2 2 0 0 1 2 .44l4 4a2 2 0 0 1 .44 2.36L8 10a14 14 0 0 0 6 6l2.36-.88a2 2 0 0 1 2.36.44l4 4a2 2 0 0 1 .28 2.14z"/></svg>
                    </div>
                    <span class="font-bold text-lg">+504 9920-2183</span>
                </a>
            </div>
        </div>

        <!-- Divisor + copyright -->
        <div class="border-t border-[#1a1a1a] mt-8 pt-5 text-center">
            <p class="text-gray-600 text-sm">© {{ date('Y') }} Grúas Kabod. Todos los derechos reservados.</p>
        </div>
    </div>
</footer>

<!-- Botón flotante WhatsApp -->
<a href="https://wa.link/j2rqin" target="_blank" rel="noreferrer"
   class="fixed bottom-6 right-6 z-50 group flex items-center gap-3" style="text-decoration:none">
    <span class="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-3 group-hover:translate-x-0
                 bg-[#111] border border-[#25D366]/50 text-white text-sm font-semibold
                 px-4 py-2 rounded-full whitespace-nowrap pointer-events-none"
          style="box-shadow:0 4px 20px rgba(0,0,0,.5)">
        ¿Necesitas ayuda inmediata?
    </span>
    <div class="relative">
        <span class="absolute inset-0 rounded-full" style="background:rgba(37,211,102,.35);animation:wa-ring 2s ease-out infinite;"></span>
        <div class="relative w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
             style="background:linear-gradient(135deg,#25D366,#128C7E);box-shadow:0 8px 32px rgba(37,211,102,.55)">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
        </div>
    </div>
</a>

@stack('scripts')
</body>
</html>
