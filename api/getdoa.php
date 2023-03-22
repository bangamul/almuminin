<?php 
require 'koneksi.php';
$data = [];
$id_unique = $_GET['id_unique'];
$query = mysqli_query($koneksi,"select * from doa where id_unique ='$id_unique'");
$jumlah = mysqli_num_rows($query);
if ($jumlah == 1) {
	$row = mysqli_fetch_object($query);
	$data = $row;
}

echo json_encode($data);
echo mysqli_error($koneksi);

 ?>