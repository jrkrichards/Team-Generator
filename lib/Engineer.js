// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, email, github) {
    super(name, email)
    this.github = github
    this.role = "Engineer"
  }
  getGithub() {
    return this.github
  }
}

module.exports = Engineer