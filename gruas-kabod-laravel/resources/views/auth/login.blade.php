@extends('layouts.employee')
@section('title', 'Login — Grúas Kabod')

@section('content')
<div class="min-h-screen flex items-center justify-center p-4" style="background: linear-gradient(135deg,#0a0a0a,#111)">
    <div class="w-full max-w-md bg-[#111] border border-[#1f1f1f] rounded-2xl shadow-2xl overflow-hidden">

        <!-- Header -->
        <div class="p-6 pb-0">
            <a href="{{ route('home') }}" class="flex items-center gap-3 mb-8 group w-fit">
                <img src="{{ asset('empresa_kabod.png') }}" alt="Grúas Kabod" class="h-10 object-contain group-hover:scale-105 transition-transform">
                <div>
                    <p class="text-white font-bold leading-tight">Grúas Kabod</p>
                    <p class="text-primary text-xs font-semibold">Portal de Empleados</p>
                </div>
            </a>
            <h1 class="text-2xl font-extrabold text-white mb-1">Iniciar Sesión</h1>
            <p class="text-gray-500 text-sm mb-6">Acceso exclusivo para personal de la empresa.</p>
        </div>

        <div class="p-6 pt-4">
            @if($errors->any())
            <div class="p-3 rounded-lg text-sm flex gap-2 items-center mb-4" style="background:rgba(239,68,68,0.15); border:1px solid rgba(239,68,68,0.4); color:#f87171">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                {{ $errors->first() }}
            </div>
            @endif

            <form method="POST" action="{{ route('login.post') }}" class="space-y-4">
                @csrf
                <div>
                    <label class="block text-xs font-semibold text-gray-400 mb-1">Correo electrónico</label>
                    <div class="relative">
                        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                        </span>
                        <input type="email" name="email" value="{{ old('email') }}" required
                            placeholder="correo@kabod.com"
                            class="field pl-9" style="width:100%; background:#0a0a0a; border:1px solid #1f1f1f; border-radius:0.5rem; padding:0.75rem 1rem 0.75rem 2.25rem; color:#fff; font-size:0.875rem; outline:none;">
                    </div>
                </div>

                <div x-data="{ show: false }">
                    <label class="block text-xs font-semibold text-gray-400 mb-1">Contraseña</label>
                    <div class="relative">
                        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                        </span>
                        <input :type="show ? 'text' : 'password'" name="password" required
                            placeholder="Tu contraseña"
                            style="width:100%; background:#0a0a0a; border:1px solid #1f1f1f; border-radius:0.5rem; padding:0.75rem 2.5rem 0.75rem 2.25rem; color:#fff; font-size:0.875rem; outline:none;">
                        <button type="button" @click="show = !show" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300">
                            <svg x-show="!show" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                            <svg x-show="show" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                        </button>
                    </div>
                </div>

                <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" name="remember" class="accent-primary">
                    <span class="text-xs text-gray-400">Recordarme</span>
                </label>

                <button type="submit" class="btn-primary w-full py-3.5 mt-2">Iniciar Sesión</button>
            </form>

            <div class="mt-6 text-center">
                <a href="{{ route('home') }}" class="text-sm text-gray-500 hover:text-primary transition-colors">
                    ← Volver al sitio
                </a>
            </div>
        </div>
    </div>
</div>
@endsection
