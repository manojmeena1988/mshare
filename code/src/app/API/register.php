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
$name=$post->username;
$email=$post->useremail;
$phone_no=$post->usermobile_no;
$password=$post->password;



$sql = "SELECT * FROM user WHERE mobile_number='".$phone_no."'";
$result = $conn->query($sql);

$myArr = array();
if ($result->num_rows > 0) {
while($row = $result->fetch_assoc()) {
$myArr[] = $row;
}




}
else{
    $sql2 = "INSERT INTO user (name,	mobile_number,  email,	password,OTP)
    VALUES ( '".$name ."', '".$phone_no."', '".$email."','".$password."',6767)";
    $result2=mysqli_query($conn, $sql2);
  $myArr=[
      'message'=>"user updated"
  ];
 
}
$myArr= json_encode($myArr);
echo $myArr;

?>