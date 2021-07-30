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


$name=$post->name;
$character=(substr($name,0,1));
// declare @SearchLetter2 char(3)
// declare @SearchLetter char(3)
// Set @SearchLetter = '".$name."'
// Set @SearchLetter2 = @SearchLetter+'%'

$sql = "SELECT * FROM user WHERE name LIKE '$character%'";

$result = $conn->query($sql);

$myArr = array();
if ($result->num_rows > 0) {
while($row = $result->fetch_assoc()) {
$myArr[] = $row;
}
}

$myArr= json_encode($myArr);
echo $myArr;

?>