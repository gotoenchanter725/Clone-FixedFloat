<html>

<head>
  {{-- <title>Fixed Float - @yield('title')</title> --}}
  <title>Fixed Float</title>
  @section('meta')
  <meta charset="UTF-8" />
  <meta name="_token" value="{{ csrf_token() }}">

  <link rel="shortcut icon" href="{{ asset('assets/images/favicon.png') }}" />
  <link rel="preload" href="{{ asset('assets/fonts/icons/icons.woff2') }}" as="font" type="font/woff2" crossorigin />
  <link rel="preload" href="{{ asset('assets/fonts/opensans/regular/opensans-regular-latin.woff2') }}" as="font" type="font/woff2" crossorigin />
  <link rel="preload" href="{{ asset('assets/fonts/opensans/semibold/opensans-semibold-latin.woff2') }}" as="font" type="font/woff2" crossorigin />
  <link rel="preload" href="{{ asset('assets/fonts/opensans/light/opensans-light-latin.woff2') }}" as="font" type="font/woff2" crossorigin />
  <link rel="preload" href="{{ asset('assets/fonts/opensans/bold/opensans-bold-latin.woff2') }}" as="font" type="font/woff2" crossorigin />
  <link rel="apple-touch-icon" sizes="57x57" href="{{ asset('assets/images/apple-touch-icon-57x57.png') }}" />
  <link rel="apple-touch-icon" sizes="60x60" href="{{ asset('assets/images/apple-touch-icon-60x60.png') }}" />
  <link rel="apple-touch-icon" sizes="72x72" href="{{ asset('assets/images/apple-touch-icon-72x72.png') }}" />
  <link rel="apple-touch-icon" sizes="76x76" href="{{ asset('assets/images/apple-touch-icon-76x76.png') }}" />
  <link rel="apple-touch-icon" sizes="117x117" href="{{ asset('assets/images/apple-touch-icon-117x117.png') }}" />
  <link rel="apple-touch-icon" sizes="120x120" href="{{ asset('assets/images/apple-touch-icon-120x120.png') }}" />
  <link rel="apple-touch-icon" sizes="144x144" href="{{ asset('assets/images/apple-touch-icon-144x144.png') }}" />
  <link rel="apple-touch-icon" sizes="152x152" href="{{ asset('assets/images/apple-touch-icon-152x152.png') }}" />
  <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('assets/images/apple-touch-icon-180x180.png') }}" />


  <link rel="preload" as="style" href="{{ asset('assets/css/svg_min.css') }}" />
  <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/svg_min.css') }}" />
  <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/min.css') }}" />


  <script type="text/javascript" src="{{ asset('assets/js/polyfill.min.js') }}"></script>
  <script type="text/javascript" src="{{ asset('assets/js/min.js') }}"></script>
  <script type="text/javascript" src="{{ asset('assets/js/matter.min.js') }}" defer></script>
  <script type="text/javascript" src="{{ asset('assets/js/squaregame.min.js') }}"></script>
  <script type="text/javascript" src="{{ asset('assets/js/moment.min.js') }}" defer></script>
  <script type="text/javascript" src="{{ asset('assets/js/jsqr.js') }}" defer></script>
  <script type="text/javascript" src="{{ asset('assets/js/webln.min.js') }}" defer></script>
  {{-- <script async src="https://www.googletagmanager.com/gtag/js"></script> --}}
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "UA-125458753-1");

  </script>
  <script id="freshchat-js-sdk" async src="{{ asset('assets/js/widget.js') }}"></script>

  @show
</head>

<body>
  @yield('content')

  @section('script')

  @show
</body>

</html>
