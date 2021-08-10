<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: GET, POST");
$post  = json_decode(file_get_contents('php://input'));

$conn = new mysqli("localhost", "root","", "project2");
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$Id=$post;
$sql = "SELECT deposite_amount FROM deposite WHERE userId=$Id";
$result = $conn->query($sql);
$amount=0;
if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
     $amount=$row["deposite_amount"]+$amount;
    
    }
    echo$amount;
} else {
  $amount=0;
  echo$amount;
}


 
?>