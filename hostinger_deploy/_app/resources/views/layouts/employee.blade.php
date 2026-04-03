<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', 'Grúas Kabod')</title>

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
            width:100%;
        }
        .btn-primary:hover { transform:translateY(-2px) scale(1.02); box-shadow:0 0 40px rgba(250,204,21,.6),0 6px 20px rgba(0,0,0,.4); }
        .btn-primary:active { transform:scale(.97); }
        .btn-primary:disabled { opacity:.6; cursor:not-allowed; }
        .glass-card { background:#111; border:1px solid #1f1f1f; border-radius:1rem; }
        .container-custom { max-width:1200px; margin:0 auto; padding:0 1.5rem; }
        .field { width:100%; background:#0a0a0a; border:1px solid #1f1f1f; border-radius:.5rem; padding:.75rem 1rem; color:#fff; font-size:.875rem; outline:none; transition:border-color .2s; }
        .field:focus { border-color:#facc15; }
        [x-cloak] { display:none !important; }
    </style>
    @stack('styles')
</head>
<body class="min-h-screen overflow-x-hidden">
    @yield('content')
    @stack('scripts')
</body>
</html>
