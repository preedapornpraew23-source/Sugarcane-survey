<?php

$host = "localhost";
$user = "root";
$pass = "";
$db   = "cane_survey";

$conn = new mysqli($host,$user,$pass,$db);

if($conn->connect_error){
die("Connection failed");
}

?>