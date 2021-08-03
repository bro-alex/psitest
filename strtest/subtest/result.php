<?php
require_once("dbconnect.php");
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);// включаем сообщения об ошибках
$mysqli->set_charset("utf8mb4"); // задаем кодировку

$result = $mysqli->query('SELECT * FROM `users`'); // запрос на выборку
while($row = $result->fetch_assoc())// получаем все строки в цикле по одной
{
echo '<p>Запись id='.$row['id'].'. Имя: '.$row['name'].'. Телефон: '.$row['telephone'].'</p>';// выводим данные
}
$mysqli->close();
?>