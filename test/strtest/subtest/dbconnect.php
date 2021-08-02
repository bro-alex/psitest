<?php
header('Content-Type: text/html; charset=utf-8');

$server = "db4free.net:3306"; // имя хоста (уточняется у провайдера), если работаем на локальном сервере, то указываем localhost
$username = "testinguser1984"; // Имя пользователя БД
$password = "isp-LE7-G98-XaP"; // Пароль пользователя. Если у пользователя нету пароля то, оставляем пустое значение ""
$database = "testing1984"; // Имя базы данных, которую создали

// Подключение к базе данных через MySQLi
$mysqli = new mysqli($server, $username, $password, $database);

// Проверяем, успешность соединения.
if ($mysqli->connect_errno) {
    die("<p><strong>Ошибка подключения к БД</strong></p><p><strong>Код ошибки: </strong> ". $mysqli->connect_errno ." </p><p><strong>Описание ошибки:</strong> ".$mysqli->connect_error."</p>");
}

// Устанавливаем кодировку подключения
$mysqli->set_charset('utf8');

?>
