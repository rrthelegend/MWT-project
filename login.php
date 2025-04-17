<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = trim($_POST["email"]);
    $password = trim($_POST["password"]);

    $users = file("users.txt", FILE_IGNORE_NEW_LINES);

    foreach ($users as $user) {
        list($storedEmail, $storedPassword) = explode("|", $user);
        if ($email === $storedEmail && $password === $storedPassword) {
            echo "Login successful!";
            exit;
        }
    }

    echo "Invalid email or password.";
}
?>
