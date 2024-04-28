<?php

// Database connection 
class DBconnection {
    protected $connection;
    public function __construct() {
        $this->connection = [
            "host" => getenv('DB_HOST'), // Host and port
            "database" => getenv('DB_NAME'), // Database name
            
            "user" => getenv("DB_USER"), // User
            "password" => getenv("DB_PASS") // Password
            
        ];
    }
    public function connect(){
        try {
            return new \PDO("mysql:host=".$this->connection["host"].";dbname=".$this->connection["database"].";charset=utf8mb4", $this->connection["user"], $this->connection["password"]);
        } catch (\PDOException $defaultPDOError) {
            print "Error connection $defaultPDOError";
            die();
        }
    }
}
class MVCmodelDB extends DBconnection{
    // RUN QUERY 
    public function runQuerySQL($query, $param = [], $select = false){
        $prepare = $this->connect()->prepare($query);
        $data_return = $prepare->execute($param);

        if($select){
            $data_return = $prepare->fetchAll(PDO::FETCH_ASSOC);
        }
        return $data_return;
    }
    public function testQuery($table){
        //SELECT TEST
        $query = "SELECT * FROM `$table`";
        return $this->runQuerySQL($query, [], true);
    }
}