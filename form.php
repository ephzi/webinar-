<?php
if(isset($_POST['ok']))
{
$name=$_POST['name'];
$reg=$_POST['reg'];
$dep=$_POST['r'];
$email=$_POST['mail'];
$num=$_POST['num'];

$con=mysqli_connect("localhost","root","","sample");
if(!$con)
{
die("Connection failed!".mysqli_connect_error());
}
$sql="INSERT INTO webinar (Name,Regno,Department,Email,Contact) VALUES('$name','$reg','$dep','$email','$num')";

$rs=mysqli_query($con,$sql);
if($rs)
{
echo "successfully saved";
}
mysqli_close($con);
}
?>