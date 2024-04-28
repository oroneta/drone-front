<?php
if (isset($_GET['error'])) {
    $error = $_GET['error'];
    $code = intval($error);
    
    $response = array(
        'status' => 'error',
        'code' => $code
    );
    http_response_code($code);
} else {
    // Note set return 404
    $response = array(
        'status' => 'error',
        'code' => 404
    );
    http_response_code(404);
}

header('Content-Type: application/json');
echo json_encode($response);