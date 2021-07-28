<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: GET, POST");
$post  = json_decode(file_get_contents('php://input'));

$conn = new mysqli("localhost", "root","", "project2");
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

 $Id=$post->id;
 echo$Id;
// $phone_no=$post->userphone_no;
// $email=$post->useremail;


 $sql="DELETE FROM user
WHERE id = $Id";
 $result=mysqli_query($conn, $sql);



?>