<?



$name = $_POST['name'];
$phone = $_POST['phone'];


$title = "Форма обратной связи";
$body = "
    <html>
        <h2>Новое письмо</h2>
        <b>Имя:</b> $name<br>
        <b>Телефон:</b> $phone<br>
    </html>
";



$to = "glebmatveev@gmail.com";
$subject = $title; 
$message =  $body;
$headers = "Content-type: text/html; charset=UTF-8" . "\r\n" .
"From: feedback@". $_SERVER['HTTP_HOST'] . "\r\n" .
"Reply-To: feedback@". $_SERVER['HTTP_HOST'] . "\r\n" .
"X-Mailer: PHP/" . phpversion();

if(mail($to, $subject, $message, $headers)){
    print 'success <h4>Спасибо!</h4><p class="black">Ваша заявка принята. Мы перезвоним вам<br>в ближайшее время!</p>';

}

