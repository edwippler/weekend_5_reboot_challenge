-- table creation statement - using database "phi"
CREATE TABLE employees (
id SERIAL PRIMARY KEY,
first_name VARCHAR(20),
last_name VARCHAR(20),
eidn  VARCHAR(9),
job_title VARCHAR(30),
annual_salary INT,
active_status BOOLEAN DEFAULT TRUE);

-- dummy data to test
INSERT INTO employees (first_name, last_name, eidn, job_title, annual_salary)
VALUES ('Dave', 'Schwimmer', '100A', 'Scuba Instructor', 48000),
('Ginger', 'Vitus', '325C', 'Dentist', 96000),
('Marty', 'McFly', '1964', 'Time Travel Intern', 12),
('Doc', 'Brown', 'DL88', 'Applied Science Specialist', 88888);
