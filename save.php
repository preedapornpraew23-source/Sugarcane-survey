<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$conn = new mysqli("localhost","root","","cane_survey");

$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'];
$phone = $data['phone'];
$address = $data['address'];

$sql = "INSERT INTO farmers(name,phone,address)
VALUES('$name','$phone','$address')";

$conn->query($sql);

echo json_encode(["status"=>"success"]);

?>