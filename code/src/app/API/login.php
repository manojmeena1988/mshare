<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: GET, POST");
$post  = json_decode(file_get_contents('php://input'));

$conn = new mysqli("localhost", "root","", "project2");
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
 $user_mobile_number=$post->usermobile_no;
 $password=$post->password;


$sql="SELECT * FROM user WHERE mobile_number='". $user_mobile_number."'AND password= '". $password."'";
$result=mysqli_query($conn, $sql);

$myArr = array();
if ($result->num_rows > 0) {
// output data of each row
while($row = $result->fetch_assoc()) {
$myArr[] = $row;

}
} else {
$myArr= "0 results";
}
$myJSON = json_encode($myArr);
echo $myJSON;

?>