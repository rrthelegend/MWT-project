<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = trim($_POST["email"]);
    $password = trim($_POST["password"]);

    if (empty($email) || empty($password)) {
        echo "Both fields are required.";
        exit;
    }

    $data = file_get_contents("users.txt");

    if (strpos($data, $email . "|") !== false) {
        echo "Email already exists.";
        exit;
    }

    $entry = $email . "|" . $password . PHP_EOL;
    file_put_contents("users.txt", $entry, FILE_APPEND);

    echo "Signup successful!";
}
?>
