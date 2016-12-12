<?php

  $to = "postmaster@cedricpoirot.com";
  $subject = "Mail from cedricpoirot.com";

  $header = "From:".$_POST["email"]." \r\n";
  $header .= "MIME-Version: 1.0\r\n";
  $header .= "Content-type: text/plain\r\n";

  $message = $_POST["content"]."\r\n\r\n".$_POST["name"];

  $result = mail ($to, $subject, $message, $header);

  echo $result;
    
?>