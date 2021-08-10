<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: GET, POST");
$post  = json_decode(file_get_contents('php://input'));

$conn = new mysqli("localhost", "root","", "project2");
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$userId = $post;
$sql = "SELECT * FROM  deposite WHERE userId = $userId";
$result = $conn->query($sql);
$myArr = array();
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
 
 $total_rows = mysqli_num_rows ($result );
 $myArr=[
      'message'=>"$total_rows"
  ]; 
 }
} else {
  $myArr=[
    'message'=>"0 results"
]; 
}

$myArr= json_encode($myArr);
echo $myArr;



?>