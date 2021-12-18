<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php 
		function my_callback_function(){
			echo 'hello world!';
		}
		class MyClass {
			static function myCallbackMethod(){
				echo 'Hello World!';
			}
		}

		call_user_func('my_callback_function');
		call_user_func(array('MyClass','myCallbackMethod'));

		$obj = new MyClass();
		call_user_func(array($obj,'myCallbackMethod'));

		call_user_func('MyClass::myCallbackMethod');

		class A{
			public static function who(){
				echo "A\n";
			}
		}

		class B extends A{
			public static function who(){
				echo "B\n";
			}
		}

		call_user_func(array('B','parent::who'));

		$double  =  function($a){
			return $a * 2;
		};

		$numbers = range(1,5);

		$new_numbers = array_map($double,$numbers);

		print implode(' : ',$new_numbers);
	?>
</body>
</html>