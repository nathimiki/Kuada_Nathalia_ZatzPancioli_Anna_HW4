<?php
include 'connect.php';

function get_one_video($pdo, $vid) {
    $query = "SELECT * FROM tbl_videos WHERE id = '$vid'";

    $get_video = $pdo->query($query);
    $results = array();

    while($row = $get_video->fetch(PDO::FETCH_ASSOC)) {
        $results[] = $row;

    }

    return $results;
}

function get_all_videos($pdo) {
    $query = "SELECT * FROM tbl_videos";

    $get_video = $pdo->query($query);
    $results = array();

    while($row = $get_video->fetch(PDO::FETCH_ASSOC)) {
        $results[] = $row;
    }

    return $results;
}

?>