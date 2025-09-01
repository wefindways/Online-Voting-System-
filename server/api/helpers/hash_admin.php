<?php
$password = "adminSSG2025!";
$hashed = password_hash($password, PASSWORD_DEFAULT);
echo $hashed;