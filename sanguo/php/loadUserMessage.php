<?php
$name=$_REQUEST['uName'];

$conn = mysqli_connect('127.0.0.1','root','','sanguo', 3306);
mysqli_query($conn, 'SET NAMES UTF8');

$sqlinster = "SELECT * FROM sanguo_login WHERE user_name='$name'";
$resultinster = mysqli_query($conn, $sqlinster);
$row = mysqli_fetch_assoc($resultinster);

if($resultinster){
	echo json_encode($row);
}else{
	echo "error";
}
?>