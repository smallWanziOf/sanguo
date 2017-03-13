<?php
$name=$_REQUEST['uName'];
//找出所有章节的信息
$conn = mysqli_connect('127.0.0.1','root','','sanguo', 3306);
mysqli_query($conn, 'SET NAMES UTF8');

$output=[
	"chapter"=>[]
];

//获取所有章节
$sql = "SELECT * FROM allchapter";
$result = mysqli_query($conn,$sql);

while ($row = mysqli_fetch_assoc($result)){
	$output['chapter'][]=$row;
};
echo json_encode($output);
?>