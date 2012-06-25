<?php

class Base {

	public function __construct() {
		$this->db = new Mysql;
	}

	public function set_view($view, $data = array()) {
		extract($data);
		include 'view/' . $view . '.php';
	}

}

/* end base/base.php */