<?php

class Mysql {

	private static $link = NULL;

	public function __construct() {
		if (self::$link === NULL) {
			global $config;
			self::$link = mysql_connect(
					$config['dbhost'], $config['dbuser'], $config['dbpass']
			);
			mysql_select_db($config['dbname'],self::$link);
		}
	}
	
	public function query($sql){
		$res = mysql_query($sql,self::$link);
		return new Dataset($resultado);
	}
	
	public static function id(){
		return mysql_insert_id(self::$enlace);
	}

}