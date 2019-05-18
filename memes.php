<?php
require_once ('con1.php');
$mysqli->set_charset("utf8");
$resultado = $mysqli->query("SELECT * from memes");
$numeroRegistros = $resultado->num_rows;
if ($numeroRegistros) {
    while ($fila = $resultado->fetch_assoc()) {
        echo "<div class='image' onclick='pulsar()'>
                <img src='".$fila['img_meme']."' id='i_".$fila['id_meme']."' class='imagen'>
                <button class='show'>mostrar</button>
            </div>";
    }
}
else{echo 'No hay memes';}
$resultado->free();
?>    