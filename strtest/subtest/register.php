<?php
//Добавляем файл подключения к БД
require_once("dbconnect.php");
$name = trim($_POST["name"]);
$telephone = trim($_POST["telephone"]);
$mail = trim($_POST["email"]);
$result_query_insert = $mysqli->query("INSERT INTO `users` (NAME, PHONE, MAIL) VALUES ('".$name."', '".$telephone."', '".$mail."')");

session_start();

$result_query_insert = $mysqli->query('SELECT * FROM `users` ORDER BY ID DESC LIMIT 1');

$row = $result_query_insert->fetch_assoc();
$_SESSION['lastUser'] = $row['ID'];

header("HTTP/1.1 301 Moved Permanently");
header("Location: /test/index.html");
$result_query_insert->close();
$mysqli->close();
?>