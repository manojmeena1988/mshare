<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: GET, POST");
$post  = json_decode(file_get_contents('php://input'));

$conn = new mysqli("localhost", "root","", "project2");
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


$typeOFDeposite=$post->wayOFwithdraw;
$userid=$post->userid;
$name=$post->name;
$borrowMoney=$post->borrowMoney;
$TotalDeposite=$post->TotalDeposite;
$installmentno=$post->installmentno;
$AfterWithMoney=$TotalDeposite - $borrowMoney;


$sql = "INSERT INTO withdraw (userid,name,totalDeposite,wihdrawAmount,afterWithDrawMoney,typeOfDeposite,installment_no)  
    VALUES($userid,'".$name."',$TotalDeposite,$borrowMoney,$AfterWithMoney,'".$typeOFDeposite."',$installmentno)";
    
$result = $conn->query($sql);
$myArr = array();
$sql1 = "SELECT  afterWithDrawMoney  FROM withdraw WHERE userid=$userid";
$result1 = $conn->query($sql1);
$totaldeposite=0;
if ($result1->num_rows > 0) {
 
  while($row = $result1->fetch_assoc()) {
    $totaldeposite=$row["afterWithDrawMoney"];
  }
 
  $myArr=[
    'leftMoney'=>$totaldeposite,
    'response'=>"yes"

];


} else {
    $myArr=[
        'response'=>"0"
    ];
    
}


$myArr= json_encode($myArr);
echo $myArr;

 
?>