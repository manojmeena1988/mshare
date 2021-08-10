<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: GET, POST");
$post  = json_decode(file_get_contents('php://input'));
$conn = new mysqli("localhost", "root","", "project2");
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$method=$post->method;
if($method=='Interest'){
$interest=$post->Interest1 + $post->borrowMoney;
  }
  else{
  $interest=$post->Interest1 ;
}
// problem in intrest money

$name=$post->name;
$userId=$post->userId;
$totalShares=$post->totalShares;
$depoisteShares=$post->depoisteShares;
$BorrowMoney=$post->borrowMoney;
$withdrawMoney=$BorrowMoney - $post->EMI ;
$remainingDeposite=$post->remainingDeposite  ;
$installmentNumber=$post->installmentNumber;
$penalty=$post->penalty;
$depositeAmount=$post->depositeAmount+ $post->EMI + $interest+$penalty;
$row['withdrawMoney']=0;
$date=date("Y-m-d");
$myArr = array();
$sql1 = "SELECT * FROM deposite WHERE userId=$userId AND withdrawMoney!=0 ORDER BY id DESC LIMIT 1";
$result1 = $conn->query($sql1);

if ($result1->num_rows > 0) {
  // output data of each row
  while($row2 = $result1->fetch_assoc()) {
$row['withdrawMoney']=($row2['withdrawMoney']);
  }
}
if($row['withdrawMoney']==0){
if($depoisteShares==$totalShares){
$sql = "INSERT INTO deposite (userId,name,total_shares,deposite_shares,	deposite_amount,installment_no,penalty,date,EMI,INTEREST,withdrawMoney)
  VALUES ($userId, '$name', $totalShares,$depoisteShares,$depositeAmount,$installmentNumber,$remainingDeposite,'$date',$post->EMI,$post->Interest1,$withdrawMoney)";
}
 else{
$sql = "INSERT INTO deposite (userId,name,total_shares,deposite_shares,	deposite_amount,installment_no,penalty,date,EMI,INTEREST,withdrawMoney)
 VALUES ($userId, '$name', $totalShares,$depoisteShares,$depositeAmount,$installmentNumber,$remainingDeposite,'$date',$post->EMI,$post->Interest1,$post->borrowMoney)";
 }
if ($conn->query($sql) === TRUE) {
   $myArr=[
     'message'=>'New record created successfully'
 ]; 
  } else {
   $myArr=[
     'message'=>'Error'
 ]; 
  }
$myArr= json_encode($myArr);
 echo $myArr;
}
else{
  $BorrowMoney=$row['withdrawMoney'];
  $withdrawMoney=$row['withdrawMoney'] - $post->EMI;

 if($depoisteShares==$totalShares){
 $sql = "INSERT INTO deposite (userId,name,total_shares,deposite_shares,	deposite_amount,installment_no,penalty,date,EMI,INTEREST,withdrawMoney)
  VALUES ($userId, '$name', $totalShares,$depoisteShares,$depositeAmount,$installmentNumber,$remainingDeposite,'$date',$post->EMI,$post->Interest1,$withdrawMoney)";
}
 else{
$sql = "INSERT INTO deposite (userId,name,total_shares,deposite_shares,	deposite_amount,installment_no,penalty,date,EMI,INTEREST,withdrawMoney)
 VALUES ($userId, '$name', $totalShares,$depoisteShares,$depositeAmount ,$installmentNumber,$remainingDeposite,'$date',$post->EMI,$post->Interest1,$withdrawMoney)";
 }
if ($conn->query($sql) === TRUE) {
   $myArr=[
     'message'=>'New record created successfully'
 ]; 
  } else {
   $myArr=[
     'message'=>'Error']; 
}


 $myArr= json_encode($myArr);
 echo $myArr;



}

// if($depoisteShares==$totalShares){
//   $sql = "INSERT INTO deposite (userId,name,total_shares,deposite_shares,	deposite_amount,installment_no,penalty,date,EMI,INTEREST,withdrawMoney)
//  VALUES ($userId, '$name', $totalShares,$depoisteShares,$depositeAmount,$installmentNumber,0,'$date',$post->EMI,$post->Interest1,$withdrawMoney)";


// }
// else{
// $sql = "INSERT INTO deposite (userId,name,total_shares,deposite_shares,	deposite_amount,installment_no,penalty,date,EMI,INTEREST,withdrawMoney)
// VALUES ($userId, '$name', $totalShares,$depoisteShares,$depositeAmount,$installmentNumber,$remainingDeposite,'$date',$post->EMI,$post->Interest1,$post->borrowMoney)";
// }

// if ($conn->query($sql) === TRUE) {
//   $myArr=[
//     'message'=>'New record created successfully'
// ]; 
  
// } else {
//   $myArr=[
//     'message'=>'Error'
// ]; 
  
// }


// $myArr= json_encode($myArr);
// echo $myArr;


?>