-- roles
CREATE TABLE `drone-front.db`.`roles` (
    `id`                INT NOT NULL AUTO_INCREMENT , 
    `description`       TEXT NULL DEFAULT NULL , 
    `name`              VARCHAR(255) NULL DEFAULT NULL , 
    `level`             INT NOT NULL DEFAULT '0' ,
                    
    PRIMARY KEY (`id`)
) 
ENGINE = InnoDB; 

-- users
CREATE TABLE `drone-front.db`.`users` (
    `id`                INT NOT NULL AUTO_INCREMENT ,
    `username`          VARCHAR(255) NOT NULL ,
    `email`             VARCHAR(255) NOT NULL ,
    `password`          VARCHAR(255) NOT NULL ,
    `num_drones`        INT NOT NULL DEFAULT '0' ,
    `role`              INT NOT NULL DEFAULT '0' ,
    `session_at`        TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
    `created_at`        TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    
    PRIMARY KEY (`id`),
    FOREIGN KEY (`role`) REFERENCES `roles`(`id`)
)
ENGINE = InnoDB; 

-- drones
CREATE TABLE `drone-front.db`.`drones` (
    `dic`               VARCHAR(255) NOT NULL , 
    `auth_code`         VARCHAR(255) NOT NULL , 
    `metadata`          JSON NULL , 
    `owner`             JSON NULL , 
    `status`            TINYINT NOT NULL DEFAULT '0' , 
    `flight`            LONGBLOB NULL DEFAULT NULL , 
    `registered_at`     TIMESTAMP NOT NULL , 
    `imported_at`       TIMESTAMP NOT NULL , 
    
    PRIMARY KEY (`dic`)
)
ENGINE = InnoDB; 


-- Insert default role
INSERT INTO `drone-front.db`.`roles` (`id`, `description`, `name`, `level`) VALUES ('1', 'Guest', 'Guest', '0') 