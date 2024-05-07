<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nume = $_POST["nume"];
    $prenume = $_POST["prenume"];

    $response = [
        'success' => true,
        'message' => 'Form data received and processed successfully'
    ];
    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
} else {
    http_response_code(405); 
    exit('Method Not Allowed');
}
