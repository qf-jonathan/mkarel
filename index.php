<?php

include 'base/config.php';
include 'base/dataset.php';
include 'base/mysql.php';
include 'base/base.php';

function Error_404() {
	header("HTTP/1.0 404 Not Found");
	include 'base/404.php';
	die();
}

$controller = isset($_GET['c']) ? $_GET['c'] : 'karel';
$action = isset($_GET['a']) ? $_GET['a'] : 'index';

if (file_exists('controller/' . $controller . '.php')) {
	include 'controller/' . $controller . '.php';
	$controller = ucfirst($controller) . 'Controller';
	$action = ucfirst($action) . 'Action';
	if (class_exists($controller) && method_exists($controller, $action)) {
		$app = new $controller;
		$app->$action();
	}else
		Error_404();
}else
	Error_404();

/* end of index.php */
