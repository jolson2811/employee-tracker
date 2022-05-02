INSERT INTO department (name)
VALUES
('Sales'),
('Legal'),
('Finance'),
('Engineering');

INSERT INTO roles (title, salary, department_id)
VALUES
('Salesperson', 100000, 1),
('Software Engineer', 120000, 4),
('Lawyer', 190000, 2),
('Accountant', 125000, 3),
('Lead Engineer', 150000, 4),
('Account Manager', 160000, 3),
('Legal Team Lead', 250000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Mike', 'Chan', 1, NULL),
('Sarah', 'Lourd', 7, NULL),
('Ashley', 'Rodriguez', 2, 6),
('Kunal', 'Singh', 6, NULL),
('Tom', 'Allen', 3, 2),
('Kevin', 'Tupik', 5, NULL),
('Malia', 'Brown', 4, 4);