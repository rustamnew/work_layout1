<?
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';


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

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;  


    $mail->Host       = 'smtp.yandex.ru';       
    $mail->Username   = 'electroexpress.ru@yandex.ru';                   
    $mail->Password   = 'pjacgtxfstrzetsk';
    $mail->SMTPSecure = 'ssl';                      
    $mail->Port       = 465;    

    $mail->From = "electroexpress.ru@yandex.ru";


    //Recipients
    $mail->addAddress('1rustamnew1@gmail.com');


    //Content
    $mail->isHTML(true);

    $mail->Subject = $title;
    $mail->Body    = $body;

    if ($mail->send()) {$result = "success";} 
    else {$result = "error";}
    

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);



