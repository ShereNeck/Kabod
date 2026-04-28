@extends('layouts.app')
@section('title', 'Grúas Kabod - Servicio de Remolque 24/7')

@section('content')

{{-- ════════════════════════════════ HERO ════════════════════════════════ --}}
<section class="relative min-h-screen flex items-center overflow-hidden">
    <div class="absolute inset-0 z-0">
        <div class="absolute inset-0" style="background:linear-gradient(135deg,#0a0a0a,#0a0a0a,#111)"></div>
        <div class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full" style="background:rgba(250,204,21,0.07);filter:blur(120px)"></div>
        <div class="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full" style="background:rgba(250,204,21,0.04);filter:blur(100px)"></div>
    </div>

    <div class="container-custom relative z-10 py-16 lg:py-0">
        <div class="grid lg:grid-cols-2 gap-12 items-center">

            <!-- Texto izquierdo -->
            <div class="max-w-2xl">
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style="background:rgba(250,204,21,0.08);border:1px solid rgba(250,204,21,0.2)">
                    <span class="relative flex h-3 w-3">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" style="animation:ping 1.5s cubic-bezier(0,0,.2,1) infinite;"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                    <span class="text-primary text-sm font-bold tracking-wide">DISPONIBLE 24/7 EN TU ZONA</span>
                </div>

                <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                    Servicio de <span class="text-primary">Grúas</span> 24/7
                </h1>

                <p class="text-xl text-gray-300 mb-10 max-w-xl font-light leading-relaxed">
                    Rápido, seguro y confiable en todo momento. Estamos listos para asistirte cuando más lo necesitas.
                </p>

                <div class="flex flex-col sm:flex-row gap-4 mb-10">
                    <a href="#booking" class="btn-primary text-lg px-9 py-4 inline-flex items-center gap-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                        Solicitar grúa ahora
                    </a>
                    <a href="https://wa.link/j2rqin" target="_blank" rel="noreferrer" class="btn-whatsapp text-lg px-9 py-4 inline-flex items-center gap-2.5 font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                        WhatsApp
                    </a>
                </div>

                <div class="flex items-center gap-6 text-sm text-gray-400">
                    <div class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#facc15" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        <span>Atención inmediata</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#facc15" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        <span>Seguridad garantizada</span>
                    </div>
                </div>
            </div>

            <!-- Card derecha (solo desktop) -->
            <div class="hidden lg:flex flex-col gap-5 relative">
                <div class="absolute inset-0 rounded-full" style="background:rgba(250,204,21,0.08);filter:blur(60px);pointer-events:none"></div>
                <div class="relative z-10 bg-[#111] border border-[#1f1f1f] rounded-2xl p-8 shadow-2xl">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="h-16 w-16 rounded-2xl flex items-center justify-center" style="background:rgba(250,204,21,0.1);border:1px solid rgba(250,204,21,0.3)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#facc15" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-extrabold text-white">Grúas Kabod</h3>
                            <p class="text-primary text-sm font-semibold">Servicio Profesional de Remolque</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-1 mb-6">
                        @for($i = 0; $i < 5; $i++)
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#facc15" stroke="#facc15" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                        @endfor
                        <span class="ml-2 text-sm text-gray-400 font-medium">5.0 · Excelente servicio</span>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        @foreach([['24/7','Disponibilidad'],['+500','Servicios al mes'],['15min','Tiempo respuesta'],['100%','Clientes satisfechos']] as [$val,$lab])
                        <div class="bg-[#0a0a0a] rounded-xl p-4 border border-[#1f1f1f] text-center">
                            <p class="text-primary font-extrabold text-3xl mb-1">{{ $val }}</p>
                            <p class="text-gray-400 text-xs font-semibold uppercase tracking-wide">{{ $lab }}</p>
                        </div>
                        @endforeach
                    </div>
                </div>
                <div class="relative z-10 flex items-center gap-4 bg-[#111] border border-primary/30 rounded-xl p-4 shadow-lg">
                    <div class="h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0" style="background:rgba(34,197,94,0.1)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <div>
                        <p class="text-white font-bold">Tiempo de respuesta promedio</p>
                        <p class="text-primary font-extrabold text-lg">15 – 30 minutos</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>

{{-- ═════════════════════════════ FORMULARIO BOOKING ═════════════════════════════ --}}
<section id="booking" class="section-padding relative">
    <div class="container-custom relative z-10">
        <div class="max-w-4xl mx-auto glass-card overflow-hidden">
            <div class="grid md:grid-cols-2">

                <!-- Panel izquierdo amarillo -->
                <div class="bg-primary p-8 md:p-12 text-black flex flex-col justify-between relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-64 h-64 rounded-full" style="background:rgba(0,0,0,0.05);filter:blur(40px);transform:translate(25%,-25%)"></div>
                    <div class="relative z-10">
                        <h3 class="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">¿Necesitas una grúa ahora?</h3>
                        <p class="text-black/75 font-medium text-base mb-8">Completa el formulario con tu información real y una unidad saldrá de inmediato hacia tu ubicación.</p>
                        <div class="space-y-5 font-bold">
                            <div class="flex items-center gap-4 text-lg">
                                <div class="p-2 bg-black text-primary rounded-full flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4C1.5 2.43 2.1 1.5 3.07 1.18a2 2 0 0 1 2 .44l4 4a2 2 0 0 1 .44 2.36L8 10a14 14 0 0 0 6 6l2.36-.88a2 2 0 0 1 2.36.44l4 4a2 2 0 0 1 .28 2.14z"/></svg>
                                </div>
                                <span>+504 9920-2183</span>
                            </div>
                            <div class="flex items-center gap-4 text-lg">
                                <div class="p-2 bg-black text-primary rounded-full flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                                </div>
                                <span>Respuesta en menos de 10 seg</span>
                            </div>
                            <div class="flex items-center gap-4 text-lg">
                                <div class="p-2 bg-black text-primary rounded-full flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                </div>
                                <span>Llegada en 15 – 30 min</span>
                            </div>
                        </div>
                    </div>
                    <div class="relative z-10 mt-10 pt-8 flex items-center gap-2 text-sm font-semibold text-black/70" style="border-top:1px solid rgba(0,0,0,0.15)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        <span>Tus datos están seguros y solo serán usados para coordinar el servicio.</span>
                    </div>
                </div>

                <!-- Formulario -->
                <div class="p-8 md:p-10" x-data="bookingForm()">
                    <h4 class="text-lg font-bold text-white mb-1">Solicitar servicio</h4>
                    <p class="text-xs text-gray-500 mb-6">Todos los campos marcados son obligatorios.</p>

                    <form @submit.prevent="submit" class="space-y-4" novalidate>

                        <!-- Nombre -->
                        <div>
                            <label class="block text-xs font-semibold text-gray-400 mb-1">Nombre Completo <span class="text-red-500">*</span></label>
                            <div class="relative">
                                <input name="nombre" type="text" x-model="f.nombre" @blur="touch('nombre')"
                                    maxlength="80" placeholder="Ej. Juan Pérez"
                                    :class="fieldClass('nombre')" :disabled="disabled">
                                <span x-show="touched.nombre && !errors.nombre" class="absolute right-3 top-1/2 -translate-y-1/2 text-green-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                                </span>
                            </div>
                            <p x-show="touched.nombre && errors.nombre" class="text-red-400 text-xs mt-1" x-text="errors.nombre"></p>
                        </div>

                        <!-- Teléfono + Vehículo -->
                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-xs font-semibold text-gray-400 mb-1">Teléfono <span class="text-red-500">*</span></label>
                                <div class="relative">
                                    <input name="telefono" type="tel" x-model="f.telefono" @blur="touch('telefono')"
                                        maxlength="20" placeholder="+504 0000-0000"
                                        :class="fieldClass('telefono')" :disabled="disabled">
                                    <span x-show="touched.telefono && !errors.telefono" class="absolute right-3 top-1/2 -translate-y-1/2 text-green-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                                    </span>
                                </div>
                                <p x-show="touched.telefono && errors.telefono" class="text-red-400 text-xs mt-1" x-text="errors.telefono"></p>
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-gray-400 mb-1">Tipo de Vehículo <span class="text-red-500">*</span></label>
                                <select name="tipoVehiculo" x-model="f.tipoVehiculo" @blur="touch('tipoVehiculo')"
                                    :class="fieldClass('tipoVehiculo')" :disabled="disabled"
                                    style="appearance:none">
                                    <option value="" disabled selected>Seleccione...</option>
                                    <option>Auto compacto</option>
                                    <option>Camioneta / SUV</option>
                                    <option>Motocicleta</option>
                                </select>
                                <p x-show="touched.tipoVehiculo && errors.tipoVehiculo" class="text-red-400 text-xs mt-1" x-text="errors.tipoVehiculo"></p>
                            </div>
                        </div>

                        <!-- Ubicación -->
                        <div>
                            <label class="block text-xs font-semibold text-gray-400 mb-1">Ubicación Actual <span class="text-red-500">*</span></label>
                            <div class="relative">
                                <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                </span>
                                <input name="ubicacion" type="text" x-model="f.ubicacion" @blur="touch('ubicacion')"
                                    maxlength="200" placeholder="Calle, colonia o referencia clara"
                                    :class="fieldClass('ubicacion') + ' pl-9'" :disabled="disabled">
                                <span x-show="touched.ubicacion && !errors.ubicacion" class="absolute right-3 top-1/2 -translate-y-1/2 text-green-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                                </span>
                            </div>
                            <p x-show="touched.ubicacion && errors.ubicacion" class="text-red-400 text-xs mt-1" x-text="errors.ubicacion"></p>
                        </div>

                        <!-- Descripción -->
                        <div>
                            <div class="flex justify-between items-center mb-1">
                                <label class="block text-xs font-semibold text-gray-400">Descripción del Problema <span class="text-gray-600">(opcional)</span></label>
                                <span :class="f.descripcion.length > 360 ? 'text-yellow-500' : 'text-gray-600'" class="text-xs" x-text="f.descripcion.length + '/400'"></span>
                            </div>
                            <textarea name="descripcion" rows="3" x-model="f.descripcion" @blur="touch('descripcion')"
                                maxlength="400" placeholder="Ej. Llanta pinchada, no arranca, accidente..."
                                :class="fieldClass('descripcion') + ' resize-none'" :disabled="disabled"></textarea>
                        </div>

                        <!-- Botón submit -->
                        <button type="submit" :disabled="disabled" class="btn-primary w-full py-4 text-base mt-2">
                            <template x-if="status === 'idle'">
                                <span class="flex items-center gap-2 justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                                    Solicitar Servicio Ahora
                                </span>
                            </template>
                            <template x-if="status === 'loading'">
                                <span class="flex items-center gap-2 justify-center"><span class="spinner"></span> Enviando solicitud...</span>
                            </template>
                            <template x-if="status === 'success'">
                                <span class="flex items-center gap-2 justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                                    ¡Solicitud Enviada!
                                </span>
                            </template>
                            <template x-if="status === 'error'">
                                <span>Error al enviar. Intente de nuevo.</span>
                            </template>
                            <template x-if="status === 'cooldown'">
                                <span class="flex items-center gap-2 justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                    Podrás enviar otra en <span x-text="cooldown"></span>s
                                </span>
                            </template>
                        </button>

                        <!-- Mensajes de estado -->
                        <div x-show="status === 'success'" class="p-3 rounded-lg text-sm flex gap-2 items-start" style="background:rgba(34,197,94,0.1);border:1px solid rgba(34,197,94,0.35);color:#4ade80">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="flex-shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                            <span>Solicitud registrada correctamente. Se ha abierto WhatsApp para notificar al operador. Te contactaremos en breve.</span>
                        </div>
                        <div x-show="status === 'error'" class="p-3 rounded-lg text-sm flex gap-2 items-center" style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.35);color:#f87171">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                            <span>Hubo un problema de conexión. Llámanos directamente al +504 9920-2183.</span>
                        </div>
                        <div x-show="status === 'cooldown'" class="p-3 rounded-lg text-sm flex gap-2 items-center" style="background:rgba(234,179,8,0.08);border:1px solid rgba(234,179,8,0.25);color:#fbbf24">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            Por seguridad, espera <span x-text="cooldown"></span> segundo(s) antes de enviar otra solicitud.
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

@endsection

@push('scripts')
<script>
function bookingForm() {
    return {
        f: { nombre:'', telefono:'', tipoVehiculo:'', ubicacion:'', descripcion:'' },
        errors: {},
        touched: {},
        status: 'idle',
        cooldown: 0,
        _timer: null,

        get disabled() { return ['loading','success','cooldown'].includes(this.status); },

        validate(name) {
            const v = (this.f[name] || '').trim();
            if (name === 'nombre') {
                if (!v) return 'El nombre es obligatorio.';
                if (v.length < 3) return 'Mínimo 3 caracteres.';
                if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ'\s]+$/.test(v)) return 'Solo letras y espacios.';
            }
            if (name === 'telefono') {
                if (!v) return 'El teléfono es obligatorio.';
                if (v.replace(/\D/g,'').length < 8) return 'Mínimo 8 dígitos.';
            }
            if (name === 'tipoVehiculo') {
                if (!v) return 'Seleccione un tipo de vehículo.';
            }
            if (name === 'ubicacion') {
                if (!v) return 'La ubicación es obligatoria.';
                if (v.length < 5) return 'Mínimo 5 caracteres.';
            }
            return '';
        },

        touch(name) {
            this.touched[name] = true;
            this.errors[name] = this.validate(name);
        },

        fieldClass(name) {
            if (!this.touched[name]) return 'field';
            return 'field' + (this.errors[name] ? ' error' : ' valid');
        },

        async submit() {
            ['nombre','telefono','tipoVehiculo','ubicacion','descripcion'].forEach(k => {
                this.touched[k] = true;
                this.errors[k] = this.validate(k);
            });
            if (Object.values(this.errors).some(Boolean)) return;

            this.status = 'loading';
            try {
                const res = await fetch('{{ route("solicitud.store") }}', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify(this.f),
                });
                const data = await res.json();
                if (!res.ok || !data.success) throw new Error(data.message || 'Error');

                this.status = 'success';
                const msg = `NUEVA SOLICITUD DE GRUA\n\nNombre: ${this.f.nombre}\nTelefono: ${this.f.telefono}\nVehiculo: ${this.f.tipoVehiculo}\nUbicacion: ${this.f.ubicacion}${this.f.descripcion ? '\nDescripcion: '+this.f.descripcion : ''}\n\nSolicitud registrada desde kabod.`;
                window.open('https://wa.me/50499202183?text='+encodeURIComponent(msg), '_blank');

                this.f = { nombre:'', telefono:'', tipoVehiculo:'', ubicacion:'', descripcion:'' };
                this.errors = {}; this.touched = {};
                setTimeout(() => this.startCooldown(), 1500);
            } catch(e) {
                this.status = 'error';
                setTimeout(() => this.status = 'idle', 5000);
            }
        },

        startCooldown() {
            let s = 30; this.cooldown = s; this.status = 'cooldown';
            this._timer = setInterval(() => {
                s--; this.cooldown = s;
                if (s <= 0) { clearInterval(this._timer); this.status = 'idle'; this.cooldown = 0; }
            }, 1000);
        }
    };
}
</script>
@endpush
