<?php


include 'functions.php';

if(isset($_GET['video'])) {
    $data = get_one_video($conn, $_GET['movie']);
    echo json_encode($data);
} else{
    $data = get_all_videos($conn);
    echo json_encode($data);
}

if(isset($_GET['video'])) {
    $data = get_one_kids_video($conn, $_GET['movie']);
    echo json_encode($data);
} else{
    $data = get_all_kids_videos($conn);
    echo json_encode($data);
}

?>