<?
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';



$name = $_POST['name'];
$phone = $_POST['phone'];
$file = $_FILES['upload-file1'];

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
    
        for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
            
            $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
            $filename = $file['name'][$ct];

            if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
                $mail->addAttachment($uploadfile, $filename);
                $rfile[] = "Файл $filename прикреплён";
            } else {
                $rfile[] = "Не удалось прикрепить файл $filename";
            }
        }
        

    $title = "Форма с файлом";
    $body = "
        <html>
            <h2>Новое письмо с файлом</h2>
            <p>$name</p><br>
            <p>$phone</p>
        </html>
    ";

    $mail->Subject = $title;
    $mail->Body    = $body;


    if ($mail->send()) {$result = "success";} 
    else {$result = "error";}

    
    header("Location: https://electroexpress.ru?success");
} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
    print_r($status);
}

//header("Location: https://electroexpress.ru");



