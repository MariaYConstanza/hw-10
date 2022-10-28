const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./src/page-template.js');

const teamMembers = [];

const generateHTML = ({name, id, email, officeNumber, school, role}) => 
// html layout 
`<!DOCTYPE html>
<html>
  <head>
    <title>Team Profile Generator</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" 
    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="./style.css" />
  </head>

  <body>
 <header>
    <div class="jumbotron jumbotron-fluid custom-jumbotron">
        <div class="container">
          <h1 class="display-4">My Team</h1>
        </div>
      </div>
 </header>

 <main>
    <div class="card custom-card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Employee Name ${name}</h5>
          <p class="card-text">Employee position ${role}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID:${id}</li>
          <li class="list-group-item">Email:${email}</li>
          <li class="list-group-item">GitHub:${github}</li>
        </ul>
    </div>
 </main>
 <script src="./index.js"></script>
  </body>
</html>
`
// questions and answers for employee role and profile stats
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'role',
      message: 'What is your role in the company?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your employee ID number?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your perferred email address?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username.',
    },
    {
      type: 'input',
      name: 'school',
      message: 'What university are you currently enrolled?',
    },
  ])

  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('team.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created team.html!')
    );
  });


// function for creating manager - inquirer questions
  // take those questions and create a new Manager with the user provided answers
  // push that new Manager to the team members array

  // follow the same pattern for each type of employee
  // build a function for them that uses inquirer


// STRUCTURING IT

// start with manager function, since every team needs a manager
// at the end of manager function, call a createTeam function

// this function would simply ask the user which type of employee they would like to add, based on their choice, run the correesponding function

// at the end, use fs to write file while sending the team array over to the function you brought in from page-template.js