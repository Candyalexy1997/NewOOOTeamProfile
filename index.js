const inquirer = require('inquirer');
cont fs = require('fs');

const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const { ADDRGETNETWORKPARAMS } = require('node:dns');
const { createReadStream } = require('node:fs');


const team = [];

// Questions to Create Manager//
function createManager()[
    console.log("Create your team");
    inquirer.prompt([
        {
            type: "input",
            name: "managersName",
            message: "Enter the name of your Manager?",
            validate: answer => {
                if (answer === "") {
                    console.log("Please enter the name of your Manager")
                    return false;
                }
                return true;
            }
        },
        {
            type: "number",
            name: "managerId",
            message: "Please enter Managers Id number",
            validate: answer => {
                if (answer === "") {
                    console.log("Please enter the name of your Manager")
                    return false;
                }
                return true;
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter Managers email address",
            validate: answer => {
                let passAnswer = answer.match(/\S+@\S+\.\S+\);
                if (passAnswer) {
                    return true;
                }
                console.log('Enter a valid email address');
                return false
            }
        },


    ]).then(answers => {
        const manager = new Manager(answers.managersName, answers.manager);
        team.push(manager);
        addTeam();
    });

    };

    function addTeam() {
        inquirer.prompt([{
            type: 'list',
            name: 'teamMemberRole',
            message: 'Would you like to add another member to your team?',
            choices: ['Engineer', 'Intern', 'No more to add']
        }]).then(chosen => {
            switch (chosen.teamMemberRole) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    break;
                case 'No more to add':
                    break;

            }
        })
    };

        // Questions to create Engineer 
        
function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName", 
                message: "Please enter name of Engineer",
                validate: answer => {
                    if (answer === "") {
                        console.log("Please enter the name of the Engineer")
                        return false;
                    }
                    return true;
                }
            },
            {
                type: "number",
                name: "engineerId",
                message: "Please enter the Engineer Id",
                validate: answer => {
                    if (answer <0 ) {
                        console.log("Please enter a number greater than 0")
                        return false;
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "Please enter Engineers email address",
                validate: answer => {
                    let passAnswer = answer.match(/\S+@\S+\.\S+\);
                    if (passAnswer) {
                        return true;
                    }
                    console.log('Enter a valid email address');
                    return false
                }
            },
            {
                type: "input",
                name: 'engineerGithub',
                message: 'Enter the Github username for your account',
                validate: answer => {
                    if (answer === " ") {
                        console.log('Please enter the Github username for your account')
                    }
                    return false
                }
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineer)
            team.push(engineer);
            addTeam();
        })
    };

// Create Prompt for Intern Creation//
    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName", 
                message: "Please enter name of Intern",
                validate: answer => {
                    if (answer === "") {
                        console.log("Please enter the name of the Intern")
                        return false;
                    }
                    return true;
                }
            },
            {
                type: "number",
                name: "internId",
                message: "Please enter the Intern Id",
                validate: answer => {
                    if (answer <0 ) {
                        console.log("Please enter a number greater than 0")
                        return false;
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "internId",
                message: "Please enter Intern email address",
                validate: answer => {
                    let passAnswer = answer.match(/\S+@\S+\.\S+\);
                    if (passAnswer) {
                        return true;
                    }
                    console.log('Enter a valid email address');
                    return false
                }
            },
           
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.intern)
            team.push(intern);
            addTeam();
        })
    };

// Create Functino to Create Page in HTML //

function createTeam() {
    fs.writeFileSync('')
}


 





