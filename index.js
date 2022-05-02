const inquirer = require('inquirer');
const db = require('./db/connection');

// user prompts
function promptUser() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'Options',
            message: 'Select from the following options.',
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role']
        },
    ]);
}

function getAllDepartments() {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            console.log("error");
        }
        console.log(rows);
    });
}

function getAllRoles() {
    const sql = `SELECT * FROM roles`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            console.log("error");
        }
        console.log(rows);
    });
}

function getAllEmployees() {
    const sql = `SELECT * FROM employee`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            console.log("error");
        }
        console.log(rows);
    });
}

// Function to initialize app
function init() {
    promptUser().then(function (res) {
        switch (res.Options) {
            case 'View All Departments':
                getAllDepartments();
                break;
            case 'View All Roles':
                getAllRoles();
                break;
            case 'View All Employees':
                getAllEmployees();
                break;
        }
    });
    return;
}


// Function call to initialize app
init();