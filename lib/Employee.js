class Employee {
    
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.gitHub = gitHub;
    }
  
    getName() {
      return this.name;
    }
  
    getId() {
      return this.id;
    }
  
    getEmail() {
      return this.email;
    }
  
    getRole() {
      return "Employee";
    }
  
    getGitHub() {
      return this.gitHub;
    }
  }
  
  module.exports = Employee;