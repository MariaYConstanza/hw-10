const generateTeam = team => {

    // html for manager
    const generateManager = manager => {
        return `
        <!DOCTYPE html>
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
          <li class="list-group-item">Office Number:${officeNumber}</li>
        </ul>
    </div>
 </main>
 <script src="./index.js"></script>
  </body>
</html>
        `;
    };

    //html for engineers
    const generateEngineer = engineer => {
        return `
        <!DOCTYPE html>
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
        `;
    };

    //html for interns
    const generateIntern = intern => {
        return `
        <!DOCTYPE html>
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
          <li class="list-group-item">School:${school}</li>
        </ul>
    </div>
 </main>
 <script src="./index.js"></script>
  </body>
</html>
        `;
    };

}

module.exports = team => {

    // template literal - html body that calls the generate team function
    
}