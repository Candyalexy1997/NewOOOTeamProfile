const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const team = [];

function initApp() {

    addTeam();
}
initApp()


// Questions to Create Manager//
function createManager() {
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

        },

        {
            type: "input",
            name: "office",
            message: "Please enter Managers office number",
            validate: answer => {
                if (answer === "") {
                    console.log("Please enter the office number")
                    return false;
                }
                return true


            }
        },


    ]).then(answers => {
        const manager = new Manager(answers.managersId, answers.managersName, answers.email, answers.office);
        team.push(manager);
        addTeam();
    });

};

function addTeam() {
    console.log("calling add team")
    inquirer.prompt([{
        type: 'list',
        name: 'teamMemberRole',
        message: 'Would you like to add another member to your team?',
        choices: ['Engineer', 'Intern', 'Manager', 'No more to add']
    }]).then(chosen => {
        switch (chosen.teamMemberRole) {
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            case 'Manager':
                createManager();
                break;
            case 'No more to add':
                createHtml()
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
                if (answer < 0) {
                    console.log("Please enter a number greater than 0")
                    return false;
                }
                return true;
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter Engineers email address",
        },
        {
            type: "input",
            name: 'engineerGithub',
            message: 'Enter the Github username for your account',
            validate: answer => {
                if (answer === " ") {
                    console.log('Please enter the Github username for your account')
                    return false
                }
                return true
            }
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerId, answers.engineerName, answers.email, answers.engineerGithub)
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
                if (answer < 0) {
                    console.log("Please enter a number greater than 0")
                    return false;
                }
                return true;
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter Intern email address",
        },

    ]).then(answers => {
        const intern = new Intern(answers.internId, answers.internName, answers.email)
        team.push(intern);
        addTeam();
    })
};

// Create Function to Create Page in HTML //


function createHtml() {
    const newCardArr = []
    team.forEach(element => {
        const currTeamCard = `<div class="card">
<div class="card-body">
    <h5 class="card-title">${element.getName()}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${element.getRole()}</h6>
    <p class="card-text">${element.getId()}</p>
    <p class="card-text">${element.getEmail()}</p>
      <a href="#" class="card-link">${element.getRole() === "Engineer" ? element.getGithub(): " "}</a>
</div>
</div>`
        newCardArr.push(currTeamCard)
    })

    const html = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    
        <title>Employee Team Listing</title>
    </head>
    
    <body>
        <header>
            <h1>Team Profile</h1>
        </header>
        <main class="container">
        ${newCardArr.join(" ")}
                </main>
    </body>
    
    </html>`

    fs.writeFile("./dist/team.html", html, function (err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
}










