<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
  
  <!-- Basic meta tags -->
  <title>@@title | Mrozilla</title>
  <meta name="description" content="@@description">

  <!-- Pinterest website verification -->
  <meta name="p:domain_verify" content="d8558e4d53cf80ebf68a53eaad843920"/>

  <!-- Twitter Card data -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@mrozilla">
  <meta name="twitter:title" content="@@title">
  <meta name="twitter:description" content="@@description">
  <meta name="twitter:creator" content="@mrozilla">
  <meta name="twitter:image" content="http://mrozilla.cz/images/og--twitter.png">

  <!-- Open Graph data -->
  <meta property="og:title" content="@@title" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="http://mrozilla.cz/" />
  <meta property="og:image" content="http://mrozilla.cz/images/og--facebook.png" />
  <meta property="og:description" content="@@description" /> 
  <meta property="og:site_name" content="@@title" />
  <meta property="fb:app_id" content="279503749068654" />

  <!-- Fonts -->
  
  <!-- Origin -->
  <link rel="stylesheet" href="/stylesheets/bricks.css">

  <!-- Vendor styles -->
  <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"> -->

  <!-- Favicons -->
  <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" href="/images/favicon/favicon-32x32.png" sizes="32x32">
  <link rel="icon" type="image/png" href="/images/favicon/favicon-16x16.png" sizes="16x16">
  <link rel="manifest" href="/images/favicon/manifest.json">
  <link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#ea2e42">
  <link rel="shortcut icon" href="/images/favicon/favicon.ico">
  <meta name="msapplication-config" content="/images/favicon/browserconfig.xml">
  <meta name="theme-color" content="#fafafa">

  <!-- Google Analytics -->
  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-77153555-1', 'auto');
    <?php
    if( isset( $_COOKIE['user_is_admin'] ) ) {
        echo 'ga(\'set\', \'dimension1\', \'true\');';
    }
    ?>
    ga('send', 'pageview');

  </script>

  <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
</head>