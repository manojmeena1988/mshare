<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: GET, POST");
$post  = json_decode(file_get_contents('php://input'));
//database connection
$conn = new mysqli("localhost", "root","", "project2");
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


$mobile_number=$post;
$userid;
$myArr=array();
$res=array();
$sql = "SELECT id FROM user WHERE mobile_number=$mobile_number";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
while($row = $result->fetch_assoc()) {
  $userid = $row['id'];
}
}


$sql1 = "SELECT * FROM deposite WHERE userId=$userid";
$result1 = $conn->query($sql1);
if ($result->num_rows > 0) {
while($r=mysqli_fetch_object($result1))
{
    $res[]=$r;
}

 $myArr= json_encode($res);
 echo $myArr;
}else{
  $res=[
    'message'=>'Error'
];
$myArr= json_encode($res);
echo $myArr;
}



 ?>