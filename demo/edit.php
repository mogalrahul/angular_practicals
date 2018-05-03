<?php
	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Methods: DELETE, HEAD, GET, OPTIONS, POST, PUT');
	header('Access-Control-Allow-Headers: Content-Type , Content-Range , Content-Disposition , Content-Description');
	header('Access-Control-Max-Age: 1728000');
	
	$data=json_decode(file_get_contents("php://input"));

	$con=mysqli_connect("localhost","root","","demo") or die(mysqli_error($con));
	$str="UPDATE registration SET ";
	if($data->fname!="")
		$str.="fname='$data->fname',";
	if($data->lname!="")
		$str.="lname='$data->lname',";
	if($data->contact!="")
		$str.="contact='$data->contact',";
	if($data->email!="")
		$str.="email='$data->email',";
	if($data->pwd!="")
		$str.="pwd='$data->pwd',";`		
	$str=substr($str,0,strlen($str)-1)." Where id='".$_REQUEST['id']."'";
	$result=mysqli_query($con,$str) or die(mysqli_error($con));
	echo "true";
?>