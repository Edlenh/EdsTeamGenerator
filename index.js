//run script through inquirer
const inquirer = require("inquirer");
//import team members
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
//write the files using fs
const fs = require("fs");
//designate an output path for generated html
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");
//include html boiler plate
const render = require("./lib/teamRender");

const teamArr = []

function employeeInfo() {

    inquirer.prompt([{
            type: "input",
            message: "Please enter the name for new team member",
            name: "memberName"
        },
        {
            type: "input",
            message: "Please Enter ID for team member",
            name: "memberID"
        },
        {
            type: "input",
            message: "Please Enter Email for team member",
            name: "memberEmail"
        },
        {
            type: "list",
            message: "Please Enter Role for team member",
            name: "memberRole",
            choices: ["Manager", "Engineer", "Intern"]
        },
    ]).then(function (answers) {

    
        if (answers.memberRole === "Engineer") {
            engineerQs(answers);
        } else if (answers.memberRole === "Intern") {
            internQs(answers);
        } else {
            managerQs(answers);
        }
    })
}


function engineerQs(baseAnswers) {
    inquirer.prompt([{
            type: "input",
            message: "Plese Enter Enginner GitHub username",
            name: "engineerGithub",
        },
        {
            type: "confirm",
            message: "Member assembled.  Would you like to add another?",
            name: "answerAddAnother",
        },
    ]).then(function (answers) {
        const newEngineer = new Engineer(baseAnswers.memberName, baseAnswers.memberID, baseAnswers.memberEmail, answers.engineerGithub);
        teamArr.push(newEngineer);
        if (answers.answerAddAnother === true) {
            employeeInfo()
        } else {
            buildTeam();
            console.log("Team Assembled")
        }
    })
}


function internQs(baseAnswers) {
    inquirer.prompt([{
            type: "input",
            message: "Please Enter Intern's school",
            name: "internSchool",
        },
        {
            type: "confirm",
            message: "Member assembled. Would you like to add another?",
            name: "answerAddAnother",
        },
    ]).then(function (answers) {
        const newIntern = new Intern(baseAnswers.memberName, baseAnswers.memberID, baseAnswers.memberEmail, answers.internSchool);
        teamArr.push(newIntern);
        if (answers.answerAddAnother === true) {
            employeeInfo()
        } else {
            buildTeam();
            console.log("Team Assembled")
        }
    })
}


function managerQs(baseAnswers) {
    inquirer.prompt([{
            type: "input",
            message: "Please enter Manager's office number",
            name: "managerOffice",
        },
        {
            type: "confirm",
            message: "Member assembled. Would you like to add another?",
            name: "answerAddAnother",
        },
    ]).then(function (answers) {
        const newManager = new Manager(baseAnswers.memberName, baseAnswers.memberID, baseAnswers.memberEmail, answers.managerOffice);
        teamArr.push(newManager);
        if (answers.answerAddAnother === true) {
            employeeInfo()
        } else {
            buildTeam();
            console.log("Team Assembled")
        }
    })
}

function buildTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamArr), "utf-8");
}

employeeInfo();