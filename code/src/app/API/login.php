<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: GET, POST");
$post  = json_decode(file_get_contents('php://input'));

$conn = new mysqli("localhost", "root","", "user");
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
 


$sql="SELECT * FROM login";
$result=mysqli_query($conn, $sql);

$myArr = array();
if ($result->num_rows > 0) {
// output data of each row
while($row = $result->fetch_assoc()) {
$myArr[] = $row;
}
} else {
echo "0 results";
}
$myJSON = json_encode($myArr);
echo $myJSON;

?>