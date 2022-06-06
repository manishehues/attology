<?php
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $Subject = '';
    $name = '';
    $email = '';
    $message = '';
    $InterestedIn = '';

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $Subject = $_POST['Subject'];
    $InterestedIn = $_POST['InterestedIn'];
    $today = date("l, F j, Y, g:i a") ;
    $to = "info@atollogy.com";

    $content = '
        <table border=1 cellpadding=10 width="100%">
        <tr><td width="100">Name:</td> <td>'.$name.'</td> </tr>
        <tr><td>InterestedIn: </td> <td>'.$InterestedIn.'</td> </tr>
        <tr><td>Email: </td> <td>'.$email.' </td> </tr>
        <tr><td>Message: </td> <td>'.$message. '</td> </tr>
        </table>
    ';

    $headers = "From: ".$email ."\r\n";
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

    $okMessage = $fileName.'Thank you for contacting Atollogy.<br>We will get back to you soon!';
    $errorMessage = 'There was an error while submitting the form. Please try again later';
    $responseArray = array('type' => 'success', 'message' => $okMessage);

    if(mail($to, $Subject.' / Sent on:'. $today, $content, $headers)) {
        $responseArray = array('type' => 'success', 'message' => $okMessage);
    } else {
        $responseArray = array('type' => 'danger', 'message' => $errorMessage);
    }

    if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
        $encoded = json_encode($responseArray);
        header('Content-Type: application/json');
        echo $encoded;
    } else {
        echo $responseArray['message'];
    }
?>