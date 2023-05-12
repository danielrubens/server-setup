CREATE DATABASE perntodo;

CREATE TABLE user_profile (
  id SERIAL PRIMARY KEY,
  description VARCHAR(255),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
