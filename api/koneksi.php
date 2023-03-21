<?php
// Allow Origin
header('Access-Control-ALlow-Origin: *');
header('Access-Control-ALlow-Credentials: true');
header('Access-Control-ALlow-Methods: PUT, GET, HEAD, DELETE, OPTIONS');
header('Access-Control-ALlow-Headers: X-Requested-With');
header('Content-Type: application/json; charset=utf-8');
// koneksi
$koneksi = mysqli_connect('localhost', 'root', '', 'musholla') or die ('koneksi gagal');

?>