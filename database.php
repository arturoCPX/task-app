<?php
    //conexion a la base de datos
    $connection = mysql_connect(
        'localhost',
        'root',
        'tasks/app'
    );

    //verificar la conexion con la base de datos 
    if($connection){
        echo "database is connected";
    }
?>