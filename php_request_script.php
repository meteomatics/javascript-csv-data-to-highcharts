<?php

    echo requestData();

    function requestData()
    {

      $username='meteomatics-api-user-name';
      $password='meteomatics-api-password';

      $context = stream_context_create(
        array (
          'http' => array (
            'header' => 'Authorization: Basic ' . base64_encode("$username:$password")
          )
        )
      );

      $response = [];
      $url = "https://api.meteomatics.com/2018-01-01T06:00:00ZP2D:PT1H/t_2m:C,relative_humidity_2m:p/47.423336,9.377225/csv";
      $response = file_get_contents($url, false, $context);

      return $response;

    }
?>
