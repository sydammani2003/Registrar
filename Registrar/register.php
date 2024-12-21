<?php
// register.php - Backend script to handle ACM Club registrations
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");

// Database connection details
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "acm_club";
$port = 3306; // Add your port number here, for example 3306

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$name = $_POST['name'];
$reg_no = $_POST['reg_no'];
$age = $_POST['age'];
$field = $_POST['field'];
$time_date = $_POST['time_date'];
$department = $_POST['department'];

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO members (name, reg_no, age, field, time_date, department) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssisss", $name, $reg_no, $age, $field, $time_date, $department);

// Execute statement
if ($stmt->execute()) {
    echo "Registration successful!";
} else {
    echo "Error: " . $stmt->error;
}

// Close connections
$stmt->close();
$conn->close();
?>
