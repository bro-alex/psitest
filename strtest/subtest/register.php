<?php
//Добавляем файл подключения к БД
require_once("dbconnect.php");
$name = trim($_POST["name"]);
$telephone = trim($_POST["telephone"]);
$result_query_insert = $mysqli->query("INSERT INTO `users` (name, telephone) VALUES ('".$name."', '".$telephone."')");
header("HTTP/1.1 301 Moved Permanently");
header("Location: /test/index.html");
$result_query_insert->close();
$mysqli->close();
?>