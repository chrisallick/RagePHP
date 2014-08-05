<?php
    $raw = array();
    $keys = array();
    $videos = array();

    $spreadsheet_url="https://docs.google.com/spreadsheet/pub?key=0AqxsTh_PqRW4dENLanpFa2lXV1NsV2hNMUF0ay1Sd2c&gid=0&output=csv";

    if(!ini_set('default_socket_timeout',    15)) echo "<!-- unable to change socket timeout -->";

    if (($handle = fopen($spreadsheet_url, "r")) !== FALSE) {
        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
            //echo $data[0] . ", " . $data[1] . "<br/>";
            $item = array( $data[0] , $data[1] );
            array_push( $raw, $item );
        }
        fclose($handle);
    }

    for( $i = 0; $i < count($raw); $i++ ) {
        if( !in_array($raw[$i][0], $keys) ) {
            array_push( $videos, $raw[$i] );
            array_push( $keys, $raw[$i][0] );
        }
    }

    // echo count($raw) . "<br/>";
    // echo count($videos) . "<br/>";

    // print_r( $raw );
    // print_r( $videos );
?>