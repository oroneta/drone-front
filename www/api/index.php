<?php

require_once "./model/model.php";
require_once "./controller/controller.php";

$mvc = new MVCcontroller();

// PREPARE ALL VARIABLES INCLUDING THE USER SESSION
// if(!isset($_SESSION['account']) && isset($_COOKIE['login_information'])){
//     $mvc->login_from_cookies($_COOKIE['login_information']);
// }
//
// include_once "./view/index.php";

$test = $mvc->get_test('roles');

print_r($test);