<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: GET, POST");
$post  = json_decode(file_get_contents('php://input'));

$conn = new mysqli("localhost", "root","", "project2");
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


$mobile_number=$post;
$userid;
$myArr=array();
$res=0;
$sql = "SELECT id FROM user WHERE mobile_number=$mobile_number";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
while($row = $result->fetch_assoc()) {
  $userid = $row['id'];
}
}


$sql1 = "SELECT deposite_amount  FROM deposite WHERE userid=$userid";
$result1 = $conn->query($sql1);
if ($result1->num_rows > 0) {
    // output data of each row
    while($row1 = $result1->fetch_assoc()) {
     $res= $row1["deposite_amount"]+$res;
    }
    echo$res;
  } else {
    echo "0 results";
  }

 ?>