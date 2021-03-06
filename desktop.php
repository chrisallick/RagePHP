<?
    include "./videos.php";
?>

<!DOCTYPE html>
<html>
    <head>
        <title>RAGE</title>

        <meta charset="utf-8">

        <link href='./css/reset.css' media='all' rel='stylesheet' type='text/css' />
        <link href='./css/main.css?v=3' media='all' rel='stylesheet' type='text/css' />
        
        <script>
            var img = new Image();
            img.onload = function(){
                // nothing?
            }
            img.src = "./img/loadinfo.net.gif";
        </script>
        <script src='./js/jq.js' type='text/javascript'></script>
        <script src='./js/jq.color.js' type='text/javascript'></script>
        <script src='./js/main.js?v=3' type='text/javascript'></script>

        <script type="text/javascript" src="http://fast.fonts.net/jsapi/2135408d-ca51-43a7-a2b7-1c008230de01.js"></script>

        <script type="text/javascript">
            var _gaq = _gaq || [];
            _gaq.push(['_setAccount', 'UA-44933208-1']);
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
            <div id="subnavswrapper">
                <div id="subnavs" class="closed">
                    <div class="about subnav">
                        <p>R.J. Glass is a New York based editor, colorist, technical director, and cinematographer. Originally from San Francisco, he attended the Tisch School of the Arts at NYU and received a degree in Film and Television. R.J. is currently available for freelance bookings.</p>
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
            <div id="navwrapper">
                <div class="nav clear">
                    <a class="projects" href="">PROJECTS</a>
                    <a class="openabout" href="">ABOUT</a>
                    <a class="opencontact" href="">CONTACT</a>
                    <a class="cv" target="_blank" href="http://www.mynameisrage.com/glass_resume.pdf" href="">CV</a>
                </div>
                    <div id="active-label">
                        <p>CINEMATOGRAPHER</p>
                    </div>
                <div id="categories">
                    <div class="categories-button">
                        <img src="./img/categories.png" />
                        <span>CATEGORIES</span>
                    </div>
                    <ul>
                        <li data-role="DIRECTOR"><p><span class="plus">+</span>DIRECTOR</p></li>
                        <li data-role="TECHNICAL DIRECTOR"><p><span class="plus">+</span>TECHNICAL DIRECTOR</p></li>
                        <li data-role="CINEMATOGRAPHER"><p><span class="plus">+</span>CINEMATOGRAPHER</p></li>
                        <li data-role="EDITOR"><p><span class="plus">+</span>EDITOR</p></li>
                        <li data-role="COLORIST"><p><span class="plus">+</span>COLORIST</p></li>
                    </ul>
                </div>
            </div>
        </div>

        <div id="wrapper">
            <?php
                $rows = floor(count($videos) / 3);
                $rest = count($videos) % 3;
                //echo $rows . " " . $rest;
                for( $i = 0; $i < $rows; $i++ ) {
                    ?>
                        <div class="row" data-index="<?= $i ?>">
                            <div class="videos" class="clear">
                                <div class="videothumb" data-role="<?= $videos[$i*3][1] ?>" data-id="<?= $videos[$i*3][0] ?>">
                                    <div class="loading-wrapper">
                                        <img class="loading-gif" width="24" height="24" src="./img/loadinfo.net.gif" />
                                    </div>
                                    <img class="thumb" src="./img/Blank.gif" />
                                    <div class="whitebox"></div>
                                    <img class="overlay" src="./img/overlay_thumb.png" />
                                    <p class="title"></p>
                                </div>
                                <div class="videothumb" data-role="<?= $videos[($i*3)+1][1] ?>" data-id="<?= $videos[($i*3)+1][0] ?>">
                                    <div class="loading-wrapper">
                                        <img class="loading-gif" width="24" height="24" src="./img/loadinfo.net.gif" />
                                    </div>
                                    <img class="thumb" src="./img/Blank.gif" />
                                    <div class="whitebox"></div>
                                    <img class="overlay" src="./img/overlay_thumb.png" />
                                    <p class="title"></p>
                                </div>
                                <div class="videothumb last" data-role="<?= $videos[($i*3)+2][1] ?>" data-id="<?= $videos[($i*3)+2][0] ?>">
                                    <div class="loading-wrapper">
                                        <img class="loading-gif" width="24" height="24" src="./img/loadinfo.net.gif" />
                                    </div>
                                    <img class="thumb" src="./img/Blank.gif" />
                                    <div class="whitebox"></div>
                                    <img class="overlay" src="./img/overlay_thumb.png" />
                                    <p class="title"></p>
                                </div>
                            </div>
                        </div>
                        <div class="player-wrapper">
                            <div class="overlay"></div>
                            <div class="player">
                                <div class="title"></div>
                                <div class="role"><p></p></div>
                                <div class="video-wrapper">
                                    
                                </div>
                                <div class="close"></div>
                            </div>
                        </div>
                    <?
                }
                if( $rest > 0 ) {
                    ?>
                        <div class="row" data-index="<?= $i ?>">
                            <div class="videos" class="clear">
                    <?
                    for( $j = 0; $j < $rest; $j++ ) {
                        ?>
                                <div class="videothumb" data-role="<?= $videos[($i*3)+$j][1] ?>" data-id="<?= $videos[($i*3)+$j][0] ?>">
                                    <div class="loading-wrapper">
                                        <img class="loading-gif" width="24" height="24" src="./img/loadinfo.net.gif" />
                                    </div>
                                    <img class="thumb" src="./img/Blank.gif" />
                                    <div class="whitebox"></div>
                                    <img class="overlay" src="./img/overlay_thumb.png" />
                                    <p class="title"></p>
                                </div>
                        <?
                    }
                    ?>
                            </div>
                        </div>
                        <div class="player-wrapper">
                            <div class="overlay"></div>
                            <div class="player">
                                <div class="title"></div>
                                <div class="role"><p></p></div>
                                <div class="video-wrapper">
                                    
                                </div>
                                <div class="close"></div>
                            </div>
                        </div>
                    <?
                }
            ?>      
    
            <div class="push"></div>
        </div>

        <div id="footer">
            <div class="nav">
                <a class="email" href="mailto:rj@mynameisrage.com">RJ@MYNAMEISRAGE.COM</a>
                <p class="number">+1.415.640.8645</p>
                <p class="copyright">&copy;2013 R.J. GLASS</p>
                <a class="vimeo" href="http://vimeo.com/mynameisrage"></a>
                <a class="flickr" href="http://www.flickr.com/photos/rager"></a>
                <a class="imdb" href="http://www.imdb.com/name/nm3633806"></a>
            </div>
        </div>

        <div id="backtotop">
            <img src="./img/backtotop.png" />
        </div>
    </body>
</html>