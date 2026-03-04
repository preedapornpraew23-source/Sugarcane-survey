CREATE DATABASE sugarcane_db CHARACTER SET utf8mb4;

USE sugarcane_db;

CREATE TABLE survey (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  address TEXT,
  phone VARCHAR(50),
  register_status VARCHAR(50),
  contract_status VARCHAR(50),
  area FLOAT,
  variety VARCHAR(100),
  yield_per_rai FLOAT,
  knowledge VARCHAR(10),
  symptoms TEXT,
  management TEXT,
  insect_control VARCHAR(10),
  support TEXT,
  suggestion TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);