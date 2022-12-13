function generateHtml(teamMembers) {
  const employeeCards = [];
  function setCards() {

      // manager card
      function managerCard(manager) {
          let mgrCard = ` 
      <main>
      <div class="card custom-card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Employee Name ${manager.getName()}</h5>
            <p class="card-text">Employee position ${manager.getRole()}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:${manager.id}</li>
            <li class="list-group-item">Email:<a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office Number:${manager.getOfficeNumber()}</li>
          </ul>
      </div>
   </main>
      `
          employeeCards.push(mgrCard)
      };
      
      // engineer card
      function engineerCard(engineer) {
          let engCard = `
      <main>
    <div class="card custom-card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Employee Name ${engineer.getName()}</h5>
          <p class="card-text">Employee position ${engineer.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID:${engineer.getId()}</li>
          <li class="list-group-item">Email:<a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item">GitHub:<a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
        </ul>
    </div>
 </main>
      `
          employeeCards.push(engCard);
      };
     
      // intern card
      function internCard(intern) {
          let internCard = `
      <div class="card col-xl-2 col-lg-3 col-md-5 col-sm-10 col-10 shadow" style="width: 18rem">
      <div class="card-header">
          <h5 class="card-title">${intern.getName()}</h5>
          <h6 class="card-subtitle"><i></i>${intern.getRole()}</h6>
      </div>
      <div class="card-body custom-card">
          <ul class="list-group list-group-flush">
              <li class="list-group-item rounded-pill m-1">ID : ${intern.getId()}</li> <!-- employee -->
              <li class="list-group-item rounded-pill m-1">email : <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
              <li class="list-group-item rounded-pill m-1">school : ${intern.getSchool()}</li>
          </ul>
      </div>
      </div> 
      <main>
    <div class="card custom-card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Employee Name ${intern.getName()}</h5>
          <p class="card-text">Employee position ${intern.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID:${intern.getId()}</li>
          <li class="list-group-item">Email:<a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li class="list-group-item">School:${intern.getSchool()}</li>
        </ul>
    </div>
 </main>
          `
          employeeCards.push(internCard);
      };
      
      // employee cards
      for (let i = 0; i < teamMembers.length; i++) {
          if (teamMembers[i].getRole() === 'Manager') {
              managerCard(teamMembers[i]);
          };
          if (teamMembers[i].getRole() === 'Engineer') {
              engineerCard(teamMembers[i]);
          };
          if (teamMembers[i].getRole() === 'Intern') {
              internCard(teamMembers[i]);
          }
      };
      
      return employeeCards.join('');
  };

  setCards();
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

    <!-- container card that holds the employee profile stats -->
<body>
<header>
<div class="jumbotron jumbotron-fluid custom-jumbotron">
    <div class="container">
      <h1 class="display-4">My Team</h1>
    </div>
  </div>
</header>
  <main>
${employeeCards}
  </main>
  <script src="./script.js"></script>
</body>
</html>
`
};

module.exports = generateHtml;



// module.exports = team => {

//   // template literal - html body that calls the generate team function
  
// }