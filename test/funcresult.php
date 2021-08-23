<?php 
 
require_once("../strtest/subtest/dbconnect.php");

$testing1 = $_POST['testing1'];
$testing2 = $_POST['testing2'];
$testing3 = $_POST['testing3'];
$testing4 = $_POST['testing4'];
$testing5 = $_POST['testing5'];
 
$result_query_insert = $mysqli->query("INSERT INTO `results` (unig, otverg, pok, nespr, pred) VALUES ('".$testing1."', '".$testing2."', '".$testing3."', '".$testing4."', '".$testing5."')");

$result_query_insert->close();
$mysqli->close();