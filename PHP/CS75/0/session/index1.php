<?php 
	session_start();
	define('USER','cody');
	define('PASS','cody');

	if(isset($_POST['user'])&&isset($_POST['pass'])){
		if($_POST['user']===USER && $_POST['pass'] == PASS){
			$_SESSION['authenticated'] = TRUE;

			$host = $_SERVER['HTTP_HOST'];
			$path = rtrim(dirname($_SERVER['PHP_SELF']),'/\\');
			header("Location:http://$host$path/homepage.php");
			exit;
		}
	}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php if(count($_POST) > 0) echo "INVALID LOGIN"?>
	<form action=" <?php echo $_SERVER["PHP_SELF"]; ?> " method="post">
		<table>
			<tr>
				<td>Username:</td>
				<td><input autocomplete="off" type="text" name="user"></td>
			</tr>
			<tr>
				<td>Password:</td>
				<td><input autocomplete="off" type="password" name="pass"></td>
			</tr>
			<tr>
				<td></td>
				<td><input type="submit" value="Submit"></td>
			</tr>
		</table>
	</form>
</body>
</html>