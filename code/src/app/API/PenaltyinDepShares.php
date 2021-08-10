<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: GET, POST");
$post  = json_decode(file_get_contents('php://input'));

$conn = new mysqli("localhost", "root","", "project2");
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$userid=$post;
$penalty;
$myArr = array();
$sql = "SELECT penalty FROM  deposite WHERE userId=$userid  ORDER BY installment_no ASC ";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  
  while($row = $result->fetch_assoc()) {
    $penalty= $row["penalty"];
  }

  $myArr=[
    'penalty'=>$penalty
];
} else {
    $myArr=[
        'penalty'=>'0'
    ];
}
$myArr= json_encode($myArr);
echo $myArr;

?>