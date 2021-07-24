<?php
$host = 'db';
$user = 'regex';
$password = 'regex123';
$db = 'test_db'

$conn = new mysql($host,$user,$password,$db);
if($conn->connect_error){
	echo 'connection failed' . $conn->connect_error;
}
echo 'Successfull connected to MQSQL';
?>
