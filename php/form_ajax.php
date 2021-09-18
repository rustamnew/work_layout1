<?php
	// exit if not a POST
	if (!$_POST) exit('No direct script access allowed');

	// mail settings
	$to = "glebmatveev@gmail.com, 1rustamnew1@gmail.com";
	$headers = "Content-type: text/html; charset=UTF-8" . "\r\n" .
		"From: feedback@". $_SERVER['HTTP_HOST'] . "\r\n" .
		"Reply-To: feedback@". $_SERVER['HTTP_HOST'] . "\r\n" .
		"X-Mailer: PHP/" . phpversion();
	$response = "<h4>Спасибо за обращение!</h4><p>Мы обязательно перезвоним Вам<br>в ближайшее время!</p>";

	// Кнопка "Заказать звонок" в топбаре
	if($_POST['form-summoner'] == "form-summoner-topbar") {
		$subject = "Кнопка \"Заказать звонок\" в топбаре";
		$name = $_POST['name'];
		$phone = $_POST['phone'];
		$message = "<html>
						<h2>" . $subject . "</h2>
						<b>Имя:</b> " . $name . "<br>
						<b>Телефон:</b> " . $phone . "<br>
					</html>";

		if(mail($to, $subject, $message, $headers)) {
			print $response;
		}
		
	}
	
	// Кнопка "Заказать звонок" в баннере
	if($_POST['form-summoner'] == "form-summoner-banner") {
		$subject = "Кнопка \"Заказать звонок\" в баннере";
		$name = $_POST['name'];
		$phone = $_POST['phone'];
		$message = "<html>
						<h2>" . $subject . "</h2>
						<b>Имя:</b> " . $name . "<br>
						<b>Телефон:</b> " . $phone . "<br>
					</html>";

		if(mail($to, $subject, $message, $headers)) {
			print $response;
		}
	}

	// Кнопка "Защитить мою технику" в баннере
	if($_POST['form-banner'] == "form-banner-promo") {
		$subject = "Кнопка \"Защитить мою технику\" в баннере";
		$name = $_POST['name'];
		$phone = $_POST['phone'];
		$message = "<html>
						<h2>" . $subject . "</h2>
						<b>Имя:</b> " . $name . "<br>
						<b>Телефон:</b> " . $phone . "<br>
					</html>";

		if(mail($to, $subject, $message, $headers)) {
			print $response;
		}
	}

	// Кнопка "Рассчитать проект" в услугах
	if($_POST['form-summoner'] == "form-summoner-services") {
		$subject = "Кнопка \"Рассчитать проект\" в услугах";
		$name = $_POST['name'];
		$phone = $_POST['phone'];
		$message = "<html>
						<h2>" . $subject . "</h2>
						<b>Имя:</b> " . $name . "<br>
						<b>Телефон:</b> " . $phone . "<br>
					</html>";

		if(mail($to, $subject, $message, $headers)) {
			print $response;
		}
	}

	// Кнопка "Рассчитать мой объект" в проектах
	if($_POST['form-summoner'] == "form-summoner-projects") {
		$subject = "Кнопка \"Рассчитать мой объект\" в проектах";
		$name = $_POST['name'];
		$phone = $_POST['phone'];
		$message = "<html>
						<h2>" . $subject . "</h2>
						<b>Имя:</b> " . $name . "<br>
						<b>Телефон:</b> " . $phone . "<br>
					</html>";

		if(mail($to, $subject, $message, $headers)) {
			print $response;
		}
	}
?>