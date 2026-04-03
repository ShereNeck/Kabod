<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EmpleadoAuth
{
    public function handle(Request $request, Closure $next)
    {
        if (! Auth::guard('empleado')->check()) {
            return redirect()->route('login');
        }

        return $next($request);
    }
}
