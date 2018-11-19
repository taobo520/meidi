<?php
header("Access-Control-Allow-Origin:*");
$phone = $_POST["phone"];
$password = $_POST["password"];
$conn = mysql_connect("localhost", "root", "", "1807");
$sql = "INSERT INTO meidi (phone, password) VALUES ('$userphone', '$password')";
$result = mysql_query($sql);
if ($result){
		$arr = array("res_code"=>1, "res_message"=>"success");
		echo json_encode($arr);
	}
	else{
		$arr = array("res_code"=>-1, "res_message"=>"failed：" . mysql_error($conn));
		echo json_encode($arr);
	}
	mysql_close($conn);
?>