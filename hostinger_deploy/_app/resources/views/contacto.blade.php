@extends('layouts.app')
@section('title', 'Contacto — Grúas Kabod')

@section('content')

<section class="section-padding" style="background-color:#0a0a0a">
    <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
            <p class="text-primary font-bold uppercase tracking-widest text-sm mb-3">Estamos aquí</p>
            <h2 class="heading-2">Atención <span class="text-primary">al Cliente</span></h2>
            <p class="text-body">Contamos con central de despacho disponible todo el año. Llámanos o envíanos un mensaje.</p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
            <div>
                <div class="space-y-6">
                    <a href="tel:+50499202183" class="flex items-center gap-4 group p-4 border border-[#1f1f1f] rounded-xl hover:border-primary transition-colors">
                        <div class="h-14 w-14 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors" style="background:rgba(250,204,21,0.1)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4C1.5 2.43 2.1 1.5 3.07 1.18a2 2 0 0 1 2 .44l4 4a2 2 0 0 1 .44 2.36L8 10a14 14 0 0 0 6 6l2.36-.88a2 2 0 0 1 2.36.44l4 4a2 2 0 0 1 .28 2.14z"/></svg>
                        </div>
                        <div>
                            <span class="block text-sm text-gray-400 font-semibold mb-1">Línea de Emergencia 24/7</span>
                            <span class="font-bold text-2xl group-hover:text-primary transition-colors">+504 9920-2183</span>
                        </div>
                    </a>
                    <a href="mailto:emilioarg355@gmail.com" class="flex items-center gap-4 group p-4 border border-[#1f1f1f] rounded-xl hover:border-primary transition-colors">
                        <div class="h-14 w-14 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors" style="background:rgba(250,204,21,0.1)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                        </div>
                        <div>
                            <span class="block text-sm text-gray-400 font-semibold mb-1">Correo Electrónico</span>
                            <span class="font-bold text-xl group-hover:text-primary transition-colors">emilioarg355@gmail.com</span>
                        </div>
                    </a>
                    <div class="flex items-center gap-4 p-4 border border-[#1f1f1f] rounded-xl">
                        <div class="h-14 w-14 rounded-full flex items-center justify-center text-primary" style="background:rgba(250,204,21,0.1)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        </div>
                        <div>
                            <span class="block text-sm text-gray-400 font-semibold mb-1">Dirección</span>
                            <span class="font-bold text-xl">La Cañada, Honduras</span>
                        </div>
                    </div>
                    <a href="https://wa.link/j2rqin" target="_blank" rel="noreferrer" class="flex items-center gap-4 group p-4 border border-[#25D366]/30 rounded-xl hover:border-[#25D366] transition-colors" style="background:rgba(37,211,102,0.04)">
                        <div class="h-14 w-14 rounded-full flex items-center justify-center flex-shrink-0" style="background:rgba(37,211,102,0.15)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                        </div>
                        <div>
                            <span class="block text-sm font-semibold mb-1" style="color:#25D366">WhatsApp — Respuesta inmediata</span>
                            <span class="font-bold text-xl text-white group-hover:text-[#25D366] transition-colors">+504 9920-2183</span>
                            <span class="block text-xs text-gray-500 mt-0.5">Toca para abrir una conversación</span>
                        </div>
                    </a>
                </div>

                <div class="mt-10">
                    <a href="{{ route('home') }}#booking" class="btn-primary text-base px-8 py-4 inline-flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                        Solicitar grúa ahora
                    </a>
                </div>
            </div>

            <div class="w-full min-h-96 rounded-2xl overflow-hidden border border-[#1f1f1f] shadow-xl">
                <iframe title="Ubicación Grúas Kabod"
                    src="https://maps.google.com/maps?q=La+Ca%C3%B1ada+Honduras&output=embed&z=14"
                    width="100%" height="100%" style="min-height:450px;border:0;filter:invert(90%) hue-rotate(180deg)"
                    allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</section>

@endsection
