<?php

    try {
        $db = new PDO("mysql:host=localhost;dbname=telefon_rehberi;charset=utf8","root","root");
    }catch (PDOException $e){
        echo $e->getMessage();
        die();
    }

    $list = $db -> query("SELECT * FROM rehber")->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($list);
