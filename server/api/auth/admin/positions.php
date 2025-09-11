<?php
require_once __DIR__ . "../../../helpers/cors.php";
require_once __DIR__ . '../../../../config/db.php'; // your db connection

$method = $_SERVER['REQUEST_METHOD']; // ✅ define $method

if ($method === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    $description = trim($data['description'] ?? '');
    $max_vote = intval($data['max_vote'] ?? 0);

    if (!$description || !$max_vote) {
        echo json_encode(['success' => false, 'message' => 'Invalid input']);
        exit;
    }

    $stmt = $pdo->prepare("INSERT INTO positions (description, max_vote) VALUES (?, ?)");
    $result = $stmt->execute([$description, $max_vote]);

    if ($result) {
        $id = $pdo->lastInsertId();
        $stmt = $pdo->prepare("SELECT id, description, max_vote FROM positions WHERE id = ?");
        $stmt->execute([$id]);
        $newRow = $stmt->fetch(PDO::FETCH_ASSOC);

        echo json_encode(['success' => true, 'position' => $newRow]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Insert failed']);
    }
}
