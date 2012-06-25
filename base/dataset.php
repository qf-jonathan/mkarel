<?php

class Dataset {

	private $_dataset = NULL;

	public function __construct(&$dataset) {
		$this->_dataset = &$dataset;
	}
	
	public function num_rows(){
		return mysql_num_rows($this->_dataset);
	}

	public function row() {
		return mysql_fetch_assoc($this->_dataset);
	}

	public function row_obj() {
		return mysql_fetch_object($this->_dataset);
	}

	public function &to_array() {
		$res = array();
		while ($fila = mysql_fetch_assoc($this->_dataset))
			$res[] = $fila;
		return $res;
	}

}