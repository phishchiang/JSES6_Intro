<?php
	$name=$_REQUEST["name"];
	// echo $name; //告訴伺服器有抓到name，echo出來
	if($name=="taipei"){
		echo "300 wan";
	}else if ($name=="hsinchu"){
		echo "40 wan";
	}else{
		echo "No Data";
	}
?>