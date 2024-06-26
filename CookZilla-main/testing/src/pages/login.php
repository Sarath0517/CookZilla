<?php
$username = $_POST['username'];
$dob = $_POST['dob'];
$email = $_POST['email'];
$password = $_POST['password'];

$conn = new mysqli('localhost','root','','cooking');
if($conn->connect_error){
    die('Connection Failed : '.$conn->connect_error);
}else{
    $stmt = $conn->prepare("INSERT into cook(username,dob,email,password) values(?,?,?,?)");
    $stmt->bind_param("ssss",$username,$dob,$email,$password);
    $stmt->execute();
    $stmt->close();
}
?>
