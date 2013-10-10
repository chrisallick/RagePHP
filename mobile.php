<?
    include "./videos.php";
?>

<!DOCTYPE html>
<html>
    <head>
        <title>RAGE</title>

        <meta charset="utf-8">

        <meta name="viewport" content="width=640, initial-scale=.5, maximum-scale=1, user-scalable=no">
        <meta name="format-detection" content="telephone=no">

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
                <p class="center">R.J. Glass is a New York based editor, colorist, technical director, and cinematographer. Originally from San Francisco, he attended the Tisch School of the Arts at NYU and received a degree in Film and Television. R.J. is currently the staff editor at Hornet Inc. in New York.</p>
                <h1>CONTACT</h1>
                <p class="padding">R.J. Glass</p>
                <p class="padding">+1.415.640.8645</p>
                <p class="padding"><a href="mailto:rj@mynameisrage.com">rj@mynameisrage.com</a></p>
                <h1>
                    <a href="#">CV</a>
                </h1>
                <div id="uparrow"></div>
            </div>
        </div>

        <div id="wrapper" class="scrollable">
            <?php
                for( $i = 0; $i < count($videos); $i++ ) {
                //for( $i = 0; $i < 10; $i++ ) {
                    if( $i > 9 ) {
                        ?>
                            <div class="video hide-now" data-role="<?= $videos[$i][1] ?>" data-id="<?= $videos[$i][0] ?>">  
                        <?
                    } else {
                        ?>
                            <div class="video" data-role="<?= $videos[$i][1] ?>" data-id="<?= $videos[$i][0] ?>">
                        <?
                    }
                        ?>
                        
                            <div class="loading-wrapper">
                                <img src="./img/loadinfo.net.gif" />
                            </div>
                            <!-- <img class="thumb" src="./img/blank.gif" /> -->
                            <iframe class="thumb"></iframe>
                            <p class="title"></p>
                            <div class="role-wrapper">
                                <p class="role"></p>
                            </div>
                        </div>
                    <?
                }
            ?>
        </div>

<!--         <div id="backtotop">
            <img src="./img/backtotop.png" />
        </div> -->
    </body>
</html>