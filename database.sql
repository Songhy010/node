CREATE SCHEMA `catalog` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin ;

CREATE TABLE `catalog`.`user` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(100) NULL,
  `user_password` VARCHAR(500) NULL,
  `user_address` VARCHAR(100) NULL,
  `user_phone` VARCHAR(100) NULL,
  `user_email` VARCHAR(100) NULL,
  `user_type` VARCHAR(100) NULL,
  `user_status` VARCHAR(100) NULL,
  `user_avatar` VARCHAR(100) NULL,
  PRIMARY KEY (`user_id`));