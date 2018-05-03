<?php
	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Methods: DELETE, HEAD, GET, OPTIONS, POST, PUT');
	header('Access-Control-Allow-Headers: Content-Type , Content-Range , Content-Disposition , Content-Description');
	header('Access-Control-Max-Age: 1728000');
	
	$data=json_decode(file_get_contents("php://input"));

	$con=mysqli_connect("localhost","root","","demo") or die(mysqli_error($con));
	
	$array=[];
	$str="SELECT * FROM registration where id='$data'";	
	$result=mysqli_query($con,$str) or die(mysqli_error($con));
	
	
		while($row = mysqli_fetch_assoc($result)){
			echo json_encode($row);
		}
	
?>