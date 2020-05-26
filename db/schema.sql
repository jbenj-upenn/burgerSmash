-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS burgers_db;

-- Created the DB "wizard_schools_db" (only works on local connections)
CREATE DATABASE burgers_db;

-- Use the DB wizard_schools_db for all the rest of the script
USE burgers_db;

-- Created the table "schools"
CREATE TABLE burgers (
    id int AUTO_INCREMENT NOT NULL,
    burger_name varchar(30) NOT NULL,
    smashed BOOLEAN DEFAULT false,
    todaydate TIMESTAMP,
    PRIMARY KEY(id)
);

-- Inserted a set of records into the table
INSERT INTO
    schools (name)
VALUES
    ("Hogwarts School of Witchcraft");

INSERT INTO
    schools (name)
VALUES
    ("Castelobruxo");

INSERT INTO
    schools (name)
VALUES
    ("Durmstrang Institute");

INSERT INTO
    schools (name)
VALUES
    ("Beauxbatons Academy of Magic");