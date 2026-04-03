<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function showLogin()
    {
        if (Auth::guard('empleado')->check()) {
            return redirect()->route('dashboard');
        }
        return view('auth.login');
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email'    => ['required', 'email'],
            'password' => ['required'],
        ]);

        // Buscar el empleado por correo
        $empleado = \App\Models\Empleado::where('Correo', $credentials['email'])->first();

        if (! $empleado || ! Hash::check($credentials['password'], $empleado->Contrasena)) {
            return back()->withErrors(['email' => 'Credenciales incorrectas.'])->withInput();
        }

        Auth::guard('empleado')->login($empleado, $request->boolean('remember'));

        $request->session()->regenerate();

        return redirect()->intended(route('dashboard'));
    }

    public function logout(Request $request)
    {
        Auth::guard('empleado')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect()->route('home');
    }
}
