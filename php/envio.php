











<?php
$destino = 'garmatorresnazareno@gmail.com';
$nombre = $_POST["oneinput"];
$email = $_POST["twoinput"];
$mensaje = $_POST["threeinput"];
$contenido = "oneinput: " . $nombre . "\ntwoinput: " . $email . "\nthreeinput: " . $mensaje;
mail($destino, "Contacto", $contenido);

header("Location:index.html")
?>