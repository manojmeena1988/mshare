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

$username=$post->username;
//query
$sql = "SELECT id, name, phone_no ,email FROM user WHERE name='".$username."'";
$result = $conn->query($sql);

$myArr = array();
if ($result->num_rows > 0) {
while($row = $result->fetch_assoc()) {
$myArr[] = $row;
}
//response
$myJSON = json_encode($myArr);
echo $myJSON;
} 

?>