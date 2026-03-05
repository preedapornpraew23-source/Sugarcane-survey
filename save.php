<?php

$conn = new mysqli("localhost","root","","sugarcane_db");

$data = json_decode(file_get_contents("php://input"), true);

$name = $data["name"];

$sql = "INSERT INTO farmers (name) VALUES ('$name')";

if ($conn->query($sql) === TRUE) {

    echo "บันทึกสำเร็จ";

} else {

    echo "Error: " . $conn->error;

}

$conn->close();

?>