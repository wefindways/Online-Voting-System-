<?php
// api/candidates.php
header('Content-Type: application/json');

$mysqli = new mysqli('localhost', 'username', 'password', 'dbname');

$sql = "SELECT id, position_id, photo, firstname, lastname, platform FROM candidates";
$result = $mysqli->query($sql);

$candidates = [];
while ($row = $result->fetch_assoc()) {
  $candidates[] = $row;
}

echo json_encode($candidates);
?>
