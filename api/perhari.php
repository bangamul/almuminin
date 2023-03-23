<?php
require 'koneksi.php';
date_default_timezone_set('Asia/Jakarta');
$data = array();
$tanggal_sekarang = date('Y-m-d');
// $tanggal_sekarang = '2023-03-22';
// var_dump($tanggal_sekarang);
$query = mysqli_query($koneksi,"select * from tarawih where jadwal = '$tanggal_sekarang'");

while ($row = mysqli_fetch_object($query)) {
	$data = $row;
}
// tampilan data json
echo json_encode($data);
echo mysqli_error($koneksi);

?>