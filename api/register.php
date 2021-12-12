<?php

include("config.php");
$data=json_decode(file_get_contents("php://input"),true);
$id=$data["id"];
$name=$data["name"];
$email=$data["email"];
$tel=$data["tel"];
$pass=$data["pass"];
 $resp["status"] = mysqli_query($con, "insert into cust(name,email,tel,pass) values('name','$email','$tel','$pass')");
    if ($resp["status"]) {
        $result = mysqli_query($con, "select id from cust where email='$eamil'");// [{id}] [0]['id']
        $row = mysqli_fetch_all($result, MYSQLI_ASSOC); // [{id:9}]

        $resp["id"] = $row[0]["id"];

    }


echo json_encode($resp); // step 4





?>