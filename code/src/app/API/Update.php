<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: GET, POST");
$post  = json_decode(file_get_contents('php://input'));

$conn = new mysqli("localhost", "root","", "project2");
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


$user_name=$post->username;
$mobile_number=$post->usermobile_no;
$user_fathername=$post->father_name;
$total_shares=$post->total_shares;

$sql =  "UPDATE  user SET name='".$user_name."', mobile_number='".$mobile_number."',
         father_name='".$user_fathername."',total_shares=$total_shares  WHERE mobile_number='".$mobile_number."'";
$result = $conn->query($sql);
$myArr = array();
if ($conn->query($sql) ===TRUE) {
    $myArr=[
        'message'=>"user updated"
    ];
    } else {
    $myArr=[
        'message'=>"Error"
    ]; 
  }

  $myArr= json_encode($myArr);
  echo $myArr;
  

?>