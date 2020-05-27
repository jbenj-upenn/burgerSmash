-- Drops the burgers_db if it already exists --
DROP DATABASE IF EXISTS burgers_db;

-- Created the DB burgers_db (only works on local connections)
CREATE DATABASE burgers_db;

-- Use the DB burgers_db for all the rest of the script
USE burgers_db;

-- Created the table "schools"
CREATE TABLE burgers (
    id int AUTO_INCREMENT NOT NULL,
    burger_name varchar(30) NOT NULL,
    smashed BOOLEAN DEFAULT false,
    dt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);


