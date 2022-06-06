<?php
extract($_POST); 
extract($_GET); 


$to = 'info@atollogy.com';

$todayis = date("l, F j, Y, g:i a") ;

foreach($_POST as $var => $value)
{
if($var == "message"){
  $value = str_replace(chr(10), '<br>',$value);
}


if($var == "attachFile" || $var == "attachFile00" || $var == "attachFile1" || $var == "attachFile2" || $var == "attachFile3" || $var == "attachFile4" || $var == "attachFile5" || $var == "attachFile6" || $var == "attachFile7" || $var == "attachFile8" || $var == "attachFile9" || $var == "attachFile10"){
  $var = "Attachment";
  $fileattachment = $value;
}


if($var != "Subject" and $var != "titleText" and $var !="Attachment"){
$message = $message. "<tr><td >".str_replace('_', ' ',ucfirst($var)) . '</td><td >' . $value . "&nbsp;</td></tr>";
}
if($var == "name"){
  $first = $value;
}

if($var == "InterestedIn"){
  $last = $value;
}

if($var == "email"){
  $email = $value;
}
if($var == "Subject"){
  $subject = $value." / Sent on: ".$todayis;
}


$from = $first." ".$last." ".$email;


}

$message = "

<table border=1 cellpadding=10>
".$message."
</table>
";



if($_FILES['attachFileDe-00']['name'])
$fileatt_name = $_FILES['attachFileDe-00']['name'];


if($_FILES['attachFileDe-0']['name'])
$fileatt_name = $_FILES['attachFileDe-0']['name'];

if($_FILES['attachFileDe-01']['name'])
$fileatt_name = $_FILES['attachFileDe-01']['name'];

if($_FILES['attachFileDe-02']['name'])
$fileatt_name = $_FILES['attachFileDe-02']['name'];

if($_FILES['attachFileDe-03']['name'])
$fileatt_name = $_FILES['attachFileDe-03']['name'];

if($_FILES['attachFileDe-04']['name'])
$fileatt_name = $_FILES['attachFileDe-04']['name'];

if($_FILES['attachFileDe-05']['name'])
$fileatt_name = $_FILES['attachFileDe-05']['name'];

if($_FILES['attachFileDe-06']['name'])
$fileatt_name = $_FILES['attachFileDe-06']['name'];

if($_FILES['attachFileDe-07']['name'])
$fileatt_name = $_FILES['attachFileDe-07']['name'];

if($_FILES['attachFileDe-08']['name'])
$fileatt_name = $_FILES['attachFileDe-08']['name'];

if($_FILES['attachFileDe-09']['name'])
$fileatt_name = $_FILES['attachFileDe-09']['name'];

if($_FILES['attachFileDe-10']['name'])
$fileatt_name = $_FILES['attachFileDe-10']['name'];






  $mime_boundary="==Multipart_Boundary_x".md5(mt_rand())."x";

        $headers = "From: $first <$email>\r\n" .
        "MIME-Version: 1.0\r\n" .
           "Content-Type: multipart/mixed;\r\n" .
           " boundary=\"{$mime_boundary}\"";

        $message = "This is a multi-part message in MIME format.\n\n" .
           "--{$mime_boundary}\n" .

"Content-Type: text/html; charset=iso-8859-2 "  .
"Content-Transfer-Encoding: 8bit" .

       
        $message . "\n\n";

        foreach($_FILES as $userfile)
        {
           $tmp_name = $userfile['tmp_name'];
           $type = $userfile['type'];
           $name = $userfile['name'];
           $size = $userfile['size'];

           if (file_exists($tmp_name))
           {
              if(is_uploaded_file($tmp_name))
              {
                 $file = fopen($tmp_name,'rb');

                 $data = fread($file,filesize($tmp_name));

                 fclose($file);


                 $data = chunk_split(base64_encode($data));
              }

              $message .= "--{$mime_boundary}\n" .
                 "Content-Type: {$type};\n" .
                 " name=\"{$name}\"\n" .
                 "Content-Disposition: attachment;\n" .
                 " filename=\"{$fileatt_name}\"\n" .
                 "Content-Transfer-Encoding: base64\n\n" .
              $data . "\n\n";
           }
        }

        $message.="--{$mime_boundary}--\n";





$okMessage = $fileName.'Thank you for contacting Atollogy.<br>We will get back to you soon!';
$errorMessage = 'There was an error while submitting the form. Please try again later';

$responseArray = array('type' => 'success', 'message' => $okMessage);


      

    if(mail($to, $subject, $message, $headers)){
      //mail('doodoole@gmail.com', $subject, $message, $headers);
    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
else{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);

    header('Content-Type: application/json');

    echo $encoded;
}
else {
    echo $responseArray['message'];
}
?>
