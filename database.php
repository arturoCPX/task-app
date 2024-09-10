<?php
    //conexion a la base de datos
    $connection = mysqli_connect(
        'localhost',
        'root',
        'password',
        'tasks/app'
    );

    //verificar la conexion con la base de datos 
    if($connection){
        echo "database is connected";
    }
?>