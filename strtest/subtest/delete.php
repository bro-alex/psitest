<?php

    require_once("dbconnect.php");
    $userid = $_POST["ID"];
    $mysqli->set_charset("utf8mb4");
    $mysqli->query("DELETE FROM `users` WHERE `ID` = '$userid'");
    
   
    header("Location: result.php");
    $mysqli->close(); 

?>