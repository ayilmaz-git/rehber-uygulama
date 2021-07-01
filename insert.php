<?php
if (isset($_POST["fullname"]) && isset($_POST["eposta"]) && isset($_POST["telefon"])){

    try {
    $db = new PDO("mysql:host=localhost;dbname=telefon_rehberi;charset=utf8","root","root");
    }catch (PDOException $e){
        echo $e->getMessage();
        die();
    }

    $prepare = $db->prepare("INSERT INTO rehber SET fullname = :fullname, eposta = :eposta, telefon = :telefon");
    $insert = $prepare -> execute(array(
        fullname => $_POST["fullname"],
        eposta => $_POST["eposta"],
        telefon => $_POST["telefon"],

    ));
    echo $insert;

}
