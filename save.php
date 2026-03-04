<?php
header("Content-Type: application/json; charset=UTF-8");

// ตั้งค่าการเชื่อมต่อฐานข้อมูล
$conn = new mysqli("localhost", "root", "", "sugarcane_db");

if ($conn->connect_error) {
    die(json_encode(["message" => "เชื่อมต่อฐานข้อมูลไม่สำเร็จ"]));
}

// รับข้อมูล JSON
$data = json_decode(file_get_contents("php://input"), true);

// แปลง checkbox เป็นข้อความ
$symptoms = isset($data['symptom']) ? implode(", ", (array)$data['symptom']) : '';
$management = isset($data['manage']) ? implode(", ", (array)$data['manage']) : '';
$support = isset($data['support']) ? implode(", ", (array)$data['support']) : '';

$stmt = $conn->prepare("INSERT INTO survey
(name,address,phone,register_status,contract_status,area,variety,yield_per_rai,knowledge,symptoms,management,insect_control,support,suggestion)
VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)");

$stmt->bind_param("sssssdssssssss",
  $data['name'],
  $data['address'],
  $data['phone'],
  $data['register'],
  $data['contract'],
  $data['area'],
  $data['variety'],
  $data['yield'],
  $data['knowledge1'],
  $symptoms,
  $management,
  $data['insect'],
  $support,
  $data['suggestion']
);

$stmt->execute();

echo json_encode(["message" => "บันทึกข้อมูลเรียบร้อยแล้ว"]);
?>