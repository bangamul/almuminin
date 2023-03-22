<?php
// Allow Origin
header('Access-Control-ALlow-Origin: *');
header('Access-Control-ALlow-Credentials: true');
header('Access-Control-ALlow-Methods: PUT, GET, HEAD, DELETE, OPTIONS');
header('Access-Control-ALlow-Headers: X-Requested-With');
header('Content-Type: application/json; charset=utf-8');

date_default_timezone_set('Asia/Jakarta');

// set tanggal
$tanggal_sekarang = date('Y-m-d');
$url = "https://api.banghasan.com/sholat/format/json/jadwal/kota/667/tanggal/$tanggal_sekarang";
$konten = file_get_contents($url);

var_dump($konten);

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

?>