<?php
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST, GET");


// print_r($_POST);


if (isset($_POST['mobile'])) {

	$name = $_POST['name'];
	$mobile = $_POST['mobile'];
	$wpscore = $_POST['wpscore'];
	$link = "http://dainikazadi.net/";

	date_default_timezone_set("Asia/Dhaka");
	$database = new SQLite3("lead.sqlite");

	$result = $database->exec("INSERT INTO wpgame ('name','mobile','wpscore','referrer', 'created_at') values ('" . $name . "','" . $mobile . "','" . $wpscore . "','" . $link . "', '" . date('Y-m-d H:i:s') . "') ");

	// echo json_encode( $_POST );
	if ($result) {
		echo "Data Insert Successfully";
	} else {
		echo "Data Insert Failed!!";
	}
}


if ($_SERVER['REQUEST_METHOD'] === 'GET') {
	echo "get request";
}

date_default_timezone_set("Asia/Dhaka");

// $database = new SQLite3("lead.sqlite");
// $database->exec('CREATE TABLE IF NOT EXISTS wpgame (id integer primary key, name varchar(20),mobile varchar(20), wpscore varchar(20),referrer varchar(50), created_at datetime, updated_at datetime)');
// $database->exec("delete from meena");

// // $database->exec("DELETE FROM meena WHERE (score BETWEEN 500 AND 4000)");
// $database->exec("INSERT INTO meena ('name','mobile','area','referrer', created_at) values ('alif','300','mobile','http://dainikazadi.net/', '".date('Y-m-d H:i:s')."') ");
// // $database->exec("DROP table meena");
