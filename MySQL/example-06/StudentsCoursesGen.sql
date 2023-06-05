-- MySQL Script generated by MySQL Workbench
-- Sat Feb 29 16:45:33 2020
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema generation
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema generation
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `generation` DEFAULT CHARACTER SET latin1 ;
USE `generation` ;

-- -----------------------------------------------------
-- Table `generation`.`Countries`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `generation`.`Countries` (
  `idCountries` INT NOT NULL,
  `Name` VARCHAR(200) NOT NULL,
  `Code` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idCountries`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `generation`.`Courses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `generation`.`Courses` (
  `code` VARCHAR(45) NOT NULL,
  `name` VARCHAR(200) NULL,
  `credits` INT NULL,
  `module_code` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`code`),
  INDEX `fk_Courses_Modules1_idx` (`module_code` ASC) VISIBLE,
  CONSTRAINT `fk_Courses_Modules1`
    FOREIGN KEY (`module_code`)
    REFERENCES `generation`.`Modules` (`code`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `generation`.`Courses_has_Students`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `generation`.`Courses_has_Students` (
  `course_code` VARCHAR(45) NOT NULL,
  `students_id_student` INT NOT NULL,
  `students_id_type_id` INT NOT NULL,
  PRIMARY KEY (`course_code`, `students_id_student`, `students_id_type_id`),
  INDEX `fk_Courses_has_Students_Students1_idx` (`students_id_student` ASC, `students_id_type_id` ASC) VISIBLE,
  INDEX `fk_Courses_has_Students_Courses1_idx` (`course_code` ASC) VISIBLE,
  CONSTRAINT `fk_Courses_has_Students_Courses1`
    FOREIGN KEY (`course_code`)
    REFERENCES `generation`.`Courses` (`code`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Courses_has_Students_Students1`
    FOREIGN KEY (`students_id_student` , `students_id_type_id`)
    REFERENCES `generation`.`Students` (`idStudent` , `IdType_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `generation`.`IdTypes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `generation`.`IdTypes` (
  `id_idTypes` INT NOT NULL,
  `name` VARCHAR(200) NULL,
  PRIMARY KEY (`id_idTypes`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `generation`.`Modules`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `generation`.`Modules` (
  `code` VARCHAR(45) NOT NULL,
  `name` VARCHAR(200) NULL,
  PRIMARY KEY (`code`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `generation`.`Students`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `generation`.`Students` (
  `idStudent` INT NOT NULL,
  `IdType_id` INT NOT NULL,
  `name` VARCHAR(100) NULL,
  `last_name` VARCHAR(100) NULL,
  `email` VARCHAR(200) NULL,
  `address` VARCHAR(250) NULL,
  `birthdate` DATETIME NULL,
  `nationality` INT NOT NULL,
  PRIMARY KEY (`idStudent`, `IdType_id`),
  INDEX `fk_Students_IdTypes1_idx` (`IdType_id` ASC) VISIBLE,
  INDEX `fk_Students_Countries1_idx` (`nationality` ASC) VISIBLE,
  CONSTRAINT `fk_Students_IdTypes`
    FOREIGN KEY (`IdType_id`)
    REFERENCES `generation`.`IdTypes` (`id_idTypes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Students_Countries`
    FOREIGN KEY (`nationality`)
    REFERENCES `generation`.`Countries` (`idCountries`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
