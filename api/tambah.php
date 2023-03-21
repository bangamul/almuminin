<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input, true);

$pesan = [];
$imam = trim($data['imam']);
$bilal = trim($data['bilal']);
$jadwal = trim($data['jadwal']);
$tanggal = trim($data['tanggal']);

$query = mysqli_query($koneksi,"insert into tarawih(imam,bilal,jadwal,tanggal) values('$imam','$bilal','$jadwal','$tanggal')");
if ($query) {
	http_response_code(201);
	$pesan['status'] = 'sukses';
} else {

	http_response_code(422);
	$pesan['status'] = 'gagal';
}

echo json_encode($pesan);
echo mysqli_error($koneksi);

?>