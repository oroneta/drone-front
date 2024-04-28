<?php
// Create MVC Controller Class
class MVCcontroller {
    // Create MVC Model Class
    public $MVCmodel;
    function __construct(){
        $this->MVCmodel = new MVCmodelDB();
    }

    function get_test($table) {
        $query = "SELECT * FROM `".$table."` WHERE `id` = ?";
        return $this->MVCmodel->runQuerySQL($query, [1], true)[0];
    }
};