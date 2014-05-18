<?php
$url = $_GET[url];
$keywords = $_GET[keywords];
$fl = fopen('directory.html', 'a');
fwrite($fl, "<a href='$url' rel='dofollow'>$keywords</a>"); fclose($fl); 
$ref = $_SERVER['HTTP_REFERER'];
header("location: $ref");
?>