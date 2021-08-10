<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: GET, POST");
$post  = json_decode(file_get_contents('php://input'));

$conn = new mysqli("localhost", "root","", "project2");
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$id=$post;
$wihdrawAmount;
$myArr=array();
$sql1 = "SELECT  wihdrawAmount  FROM withdraw WHERE userid=$id";
$result1 = $conn->query($sql1);

if ($result1->num_rows > 0) {
    // output data of each row
    while($row = $result1->fetch_assoc()) {
      $wihdrawAmount =$row["wihdrawAmount"];
    }
    $myArr=[
      'response'=>$wihdrawAmount 
      ];
  }
$myArr= json_encode($myArr);
echo $myArr;

 
?>