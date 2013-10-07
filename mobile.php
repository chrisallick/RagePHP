<?
    include "./videos.php";
?>

<!DOCTYPE html>
<html>
    <head>
        <title>RAGE</title>

        <meta charset="utf-8">

        <meta name="viewport" content="width=640, initial-scale=.5, maximum-scale=1">

        <link href='./css/reset.css' media='all' rel='stylesheet' type='text/css' />
        <link href='./css/mobile.css?v=3' media='all' rel='stylesheet' type='text/css' />
        
        <script src='./js/jq.js' type='text/javascript'></script>
        <script src='./js/jq.color.js' type='text/javascript'></script>
        <script src='./js/jq.easie.js' type='text/javascript'></script>
        <script src='./js/jq.hammer.js' type='text/javascript'></script>
        <script src='./js/mobile.js?v=3' type='text/javascript'></script>

        <script type="text/javascript" src="http://fast.fonts.net/jsapi/2135408d-ca51-43a7-a2b7-1c008230de01.js"></script>

        <script type="text/javascript">
            var _gaq = _gaq || [];
            _gaq.push(['_setAccount', 'UA-42616754-1']);
            _gaq.push(['_trackPageview']);

            (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
            })();
        </script>
    </head>
    <body>
        <div id="header">
            <div id="logo"></div>
            <div class="content">
                <h1>ABOUT</h1>
                <p>R.J. Glass is a New York based editor, colorist, technical director, and cinematographer. Originally from San Francisco, he attended the Tisch School of the Arts at NYU and received a degree in Film and Television. R.J. is currently the staff editor at Hornet Inc. in New York.</p>
                <h1>CONTACT</h1>
                <p>R.J. Glass</p>
                <p>+1.415.640.8645</p>
                <p>RJ@MYNAMEISRAGE.COM</p>
            </div>
<!--
            <div id="subnavswrapper">
                <div id="subnavs" class="closed">
                    <div class="about subnav">
                        <p>R.J. Glass is a New York based editor, colorist, technical director, and cinematographer. Originally from San Francisco, he attended the Tisch School of the Arts at NYU and received a degree in Film and Television. R.J. is currently the staff editor at Hornet Inc. in New York.</p>
                        <div class="links clear">
                            <a class="vimeo" href="http://vimeo.com/mynameisrage"></a>
                            <a class="flickr" href="http://www.flickr.com/photos/rager"></a>
                            <a class="imdb" href="http://www.imdb.com/name/nm3633806"></a>
                        </div>
                    </div>
                    <div class="contact subnav">
                        <div class="items clear">
                            <p class="name">R.J. GLASS</p>
                            <p class="number">+1.415.640.8645</p>
                            <a class="email" href="mailto:rj@mynameisrage.com">RJ@MYNAMEISRAGE.COM</a>
                        </div>
                    </div>
                    <div id="closeheader">
                        <p>close</p>
                        <div class="arrow"></div>
                    </div>
                </div>
            </div>

    <a class="cv" target="_blank" href="http://www.mynameisrage.com/glass_resume.pdf" href="">CV</a>
-->
        </div>

        <div id="wrapper" class="scrollable">

            <?php
                for( $i = 0; $i < count($videos); $i++ ) {
                    ?>
<!--                         <div class="videos" class="clear">
                            <div class="videothumb" data-role="<?= $videos[$i][1] ?>" data-id="<?= $videos[$i][0] ?>">
                                <div class="loading-wrapper">
                                    <img src="./img/loadinfo.net.gif" />
                                </div>
                                <img class="thumb" src="./img/blank.gif" />
                                <p class="title"></p>
                                <p class="role"></p>
                            </div>
                        </div> -->
                    <?
                }
            ?>
        </div>

<!--         <div id="backtotop">
            <img src="./img/backtotop.png" />
        </div> -->
    </body>
</html>