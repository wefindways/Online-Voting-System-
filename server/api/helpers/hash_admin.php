<?php
$password = supersecretstring;
$hashed = password_hash($password, PASSWORD_DEFAULT);
echo $hashed;
