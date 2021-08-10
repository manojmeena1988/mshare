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
$sql = "SELECT * FROM  deposite WHERE userId = $userId AND withdrawMoney !=0";
$result = $conn->query($sql);
$myArr = array();




if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {

    $myArr=[
        'message'=>"yes"
    ]; 
    $myArr= json_encode($myArr);
    echo $myArr;


  }
} else {
  $myArr=[
    'message'=>"no"
]; 
$myArr= json_encode($myArr);
echo $myArr;

}







?>