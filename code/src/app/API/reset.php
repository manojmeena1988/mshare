<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: GET, POST");
$post  = json_decode(file_get_contents('php://input'));


$mobile_no=$post->usermobile_number;
$new_password=$post->password;
$OTP=$post->OTP;
$conn = new mysqli("localhost", "root","", "project2");
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// $sql = "UPDATE user SET password='".$new_password."' WHERE mobile_number='".$mobile_no."' ";








$sql="SELECT mobile_number ,OTP FROM user WHERE mobile_number='".$mobile_no."' AND OTP='".$post->OTP."'";
$result=mysqli_query($conn, $sql);

$myArr = array();
if ($result->num_rows > 0) {
// output data of each row
while($row = $result->fetch_assoc()) {
$myArr[] = $row;
}
$sql1=$sql = "UPDATE user SET password='".$new_password."' WHERE mobile_number='".$mobile_no."' ";
$result2=mysqli_query($conn, $sql1);
$response="password updated";

} else {
  $response="you enter wrong mobile number/OTP ";
}

// $myJSON = json_encode($myArr);


// if ($myArr[0]['OTP']==$OTP && $myArr[0]['mobile_number']==$mobile_no) {
//   $sql1=$sql = "UPDATE user SET password='".$new_password."' WHERE mobile_number='".$mobile_no."' ";
//   $result2=mysqli_query($conn, $sql1);
//   $response="password updated";

// }
// else{
//   $response="you enter wrong mobile number/OTP ";
// }


$myJSON = json_encode($response);
echo $myJSON;


?>