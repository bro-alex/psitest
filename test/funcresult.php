<?php 
 
require_once("../strtest/subtest/dbconnect.php");

session_start();

$testing1 = $_POST['testing1'];
$testing2 = $_POST['testing2'];
$testing3 = $_POST['testing3'];
$testing4 = $_POST['testing4'];
$testing5 = $_POST['testing5'];

$lastUser = $_SESSION['lastUser'];

if($testing1 != 0){
$result_query_insert = $mysqli->query("INSERT INTO `results` (unig, otverg, pok, nespr, pred) VALUES ('".$testing1."', '".$testing2."', '".$testing3."', '".$testing4."', '".$testing5."')");

$result_query_insert = $mysqli->query('SELECT * FROM `results` ORDER BY ID DESC LIMIT 1');

$row2 = $result_query_insert->fetch_assoc();
$lastResult = $row2['ID'];

$result_query_insert = $mysqli->query("UPDATE `users` SET RESULT_ID = '".$lastResult."' WHERE id = '".$lastUser."'");
};

$result_query_insert->close();
$mysqli->close();