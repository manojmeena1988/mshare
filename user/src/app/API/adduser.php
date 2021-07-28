<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: GET, POST");
$post  = json_decode(file_get_contents('php://input'));

$conn = new mysqli("localhost", "root","", "project2");
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$name=$post->username;
$phone_no=$post->userphone_no;
$email=$post->useremail;

$sql1="SELECT id, name, phone_no ,email FROM user WHERE name= '".$name."' OR phone_no='".$phone_no."' OR email='".$email."'";
$result1=mysqli_query($conn, $sql1);
$myArr = array();
if ($result1->num_rows > 0) {
  $myArr = "user already exit";
 
 }
  else {
    $sql2="INSERT INTO user (name,phone_no, email)
    VALUES ('".$name."', '".$phone_no."', '".$email."')";
    $result2=mysqli_query($conn, $sql2);
    echo"0 result";
  }



// $myArr = array();
// if ($result->num_rows > 0) {
// // output data of each row
// while($row = $result->fetch_assoc()) {
// $myArr[] = $row;
// }
// } else {
// echo "0 results";
// }
$myJSON = json_encode($myArr);
echo $myJSON;

?>