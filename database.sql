CREATE DATABASE web_project;

USE web_project;

CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    message TEXT NOT NULL
);

SELECT * FROM contacts;
