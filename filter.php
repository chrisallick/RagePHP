<?
	include "./videos.php";

	$new_videos = array();
    if( $_GET["category"] != "" ) {
        $cat = $_GET["category"];
        
        for( $i = 0; $i < count($videos); $i++ ) {
            if( strtolower($videos[$i][1]) == strtolower($cat) ) {
                //$item = array( $raw[$i][0] , $raw[$i][1] ); // why did i have this as raw?
                $item = array( $videos[$i][0] , $videos[$i][1] );

 				array_push( $new_videos, $item );
            }
        }
    } else {
    	$new_videos = $videos;
    }

    $rows = floor(count($new_videos) / 3);
    $rest = count($new_videos) % 3;
    //echo $rows . " " . $rest;
    for( $i = 0; $i < $rows; $i++ ) {
        ?>
            <div class="row" data-index="<?= $i ?>">
                <div class="videos" class="clear">
                    <div class="videothumb" data-role="<?= $new_videos[$i*3][1] ?>" data-id="<?= $new_videos[$i*3][0] ?>">
                        <div class="loading-wrapper">
                            <img src="./img/loadinfo.net.gif" />
                        </div>
                        <img class="thumb" src="" />
                        <div class="whitebox"></div>
                        <img class="overlay" src="./img/overlay_thumb.png" />
                        <p class="title"></p>
                    </div>
                    <div class="videothumb" data-role="<?= $new_videos[($i*3)+1][1] ?>" data-id="<?= $new_videos[($i*3)+1][0] ?>">
                        <div class="loading-wrapper">
                            <img src="./img/loadinfo.net.gif" />
                        </div>
                        <img class="thumb" src="" />
                        <div class="whitebox"></div>
                        <img class="overlay" src="./img/overlay_thumb.png" />
                        <p class="title"></p>
                    </div>
                    <div class="videothumb last" data-role="<?= $new_videos[($i*3)+2][1] ?>" data-id="<?= $new_videos[($i*3)+2][0] ?>">
                        <div class="loading-wrapper">
                            <img src="./img/loadinfo.net.gif" />
                        </div>
                        <img class="thumb" src="" />
                        <div class="whitebox"></div>
                        <img class="overlay" src="./img/overlay_thumb.png" />
                        <p class="title"></p>
                    </div>
                </div>
            </div>
            <div class="player-wrapper">
                <div class="overlay"></div>
                <div class="leftcap"></div>
                <div class="player">
                    <div class="rolebgtop"></div>
                    <div class="rolebgbottom"></div>
                    <div class="title"></div>
                    <div class="role"><p></p></div>
                    <div class="video-wrapper">
                        
                    </div>
                    <div class="close"></div>
                </div>
                <div class="rightcap"></div>
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
                    <div class="videothumb" data-role="<?= $new_videos[($i*3)+$j][1] ?>" data-id="<?= $new_videos[($i*3)+$j][0] ?>">
                        <div class="loading-wrapper">
                            <img src="./img/loadinfo.net.gif" />
                        </div>
                        <img class="thumb" src="" />
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
                <div class="leftcap"></div>
                <div class="player">
                    <div class="rolebgtop"></div>
                    <div class="rolebgbottom"></div>
                    <div class="title"></div>
                    <div class="role"><p></p></div>
                    <div class="video-wrapper">
                        
                    </div>
                    <div class="close"></div>
                </div>
                <div class="rightcap"></div>
            </div>
        <?
    }
    
?>