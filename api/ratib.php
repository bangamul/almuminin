<?php
require 'koneksi.php';
$data = [];
$query = mysqli_query($koneksi,"select * from ratib");
while ($row = mysqli_fetch_object($query)) {
	$data[] = $row;
}
// tampilan data json
echo json_encode($data);
echo mysqli_error($koneksi);

?>