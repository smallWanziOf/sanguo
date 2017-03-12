<?php
$name=$_REQUEST['uName'];
$mainRole=$_REQUEST['mainRole'];

$conn = mysqli_connect('127.0.0.1','root','','sanguo', 3306);
mysqli_query($conn, 'SET NAMES UTF8');

$sqlinster = "UPDATE sanguo_login SET main_role=$mainRole WHERE user_name='$name'";
$resultinster = mysqli_query($conn, $sqlinster);

if($resultinster){
	echo "success";
}else{
	echo "error";
}
?>