<?php

include "db.php";

$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'];
$phone = $data['phone'];
$address = $data['address'];
$lat = $data['lat'];
$lon = $data['lon'];
$area = $data['area'];
$cane = $data['cane'];
$yield = $data['yield'];
$suggest = $data['suggest'];

$sql = "INSERT INTO farmers
(name,phone,address,latitude,longitude,area,cane_variety,yield_per_rai,suggestion)
VALUES
('$name','$phone','$address','$lat','$lon','$area','$cane','$yield','$suggest')";

$conn->query($sql);

echo json_encode(["status"=>"success"]);

?>