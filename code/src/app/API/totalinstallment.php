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
  $total_installment;
  $sql = "SELECT * FROM installment WHERE userid=$Id";
  $result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
     "installment: " . $row["total_installment"];
    echo$total_installment=$row["total_installment"]+1;
  }
  $sql2 = "UPDATE  installment SET total_installment=$total_installment WHERE userid=$Id";
  $result2 = $conn->query($sql2);
  
}
 else {
  
$sql1 = "INSERT INTO installment (userid, total_installment )
VALUES ($Id,1)";
 $result1 = $conn->query($sql1);
echo"1";
 
}

?>