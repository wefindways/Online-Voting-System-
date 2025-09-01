<?php
$password = "your admin password here";
$hashed = password_hash($password, PASSWORD_DEFAULT);
echo $hashed;
