<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" sizes="114x114" href="{{ asset('images/favicon.png') }}">
    <title>DAS Travel App | Discover Local Cities</title>

    <link rel="stylesheet" href="{{ mix('js/index.css') }}">
</head>

<body class="--theme-light">

    <div id="app"></div>

    <script src="{{ mix('js/index.js') }}"></script>
</body>

</html>
