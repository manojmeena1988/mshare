<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: GET, POST");
$post  = json_decode(file_get_contents('php://input'));

$conn = new mysqli("localhost", "root","", "project2");
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

 $Id=$post;



 $sql="DELETE FROM user
WHERE id = $Id";
 $result=mysqli_query($conn, $sql);
 $myArr = array();
 if ($conn->query($sql) === TRUE) {
  $myArr=[
    'message'=>"Record deleted successfully"
]; 
  
} else {
 
  $myArr=[
    'message'=>"Error deleting record"
  ]; 
}
$myArr= json_encode($myArr);
echo $myArr;

?>