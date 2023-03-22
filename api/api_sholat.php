<?php
// Allow Origin
header('Access-Control-ALlow-Origin: *');
header('Access-Control-ALlow-Credentials: true');
header('Access-Control-ALlow-Methods: PUT, GET, HEAD, DELETE, OPTIONS');
header('Access-Control-ALlow-Headers: X-Requested-With');
header('Content-Type: application/json; charset=utf-8');

date_default_timezone_set('Asia/Jakarta');

// set tanggal
$tanggal_sekarang = date('d');
$bulan_sekarang = date('m');
$tahun_sekarang = date('Y');
$url = "https://api.myquran.com/v1/sholat/jadwal/1301/$tahun_sekarang/$bulan_sekarang/$tanggal_sekarang";
$konten = file_get_contents($url);

echo $konten;

// var_dump($konten);

//call api
// $json = file_get_contents($url);
// $json = json_decode($json);
// $ashar = $json->results[0]->jadwal->data->ashar;
// $dhuha = $json->results[0]->jadwal->data->dhuha;
// $dzuhur = $json->results[0]->jadwal->data->dzuhur;
// $imsak = $json->results[0]->jadwal->data->imsak;
// $maghrib = $json->results[0]->jadwal->data->maghrib;
// $isya = $json->results[0]->jadwal->data->isya;
// $subuh = $json->results[0]->jadwal->data->subuh;
// $tanggal = $json->results[0]->jadwal->data->tanggal;
// $terbit = $json->results[0]->jadwal->data->terbit;
// echo "ashar: " . $ashar . ", dhuha: " . $dhuha . ", dzuhur: " . $dzuhur . ", imsak: " . $imsak ", maghrib: " . $maghrib . ", isya: " . $isya . ", subuh: " . $subuh . ", tanggal: " . $tanggal . ", terbit: " . $terbit;

// output
// Latitude: 40.6781784, Longitude: -73.9441579
?>