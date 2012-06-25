<?php

class KarelController extends Base {

	public function indexAction() {
		$this->set_view('mkarel');
	}
	
	public function uiAction(){
		$this->set_view('ui');
	}

}

/* end controller/karel.php */