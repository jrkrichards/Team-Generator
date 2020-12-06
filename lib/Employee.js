// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, email) {
      this.name = name
      Employee.lastId++
      this.id = Employee.lastId
      this.email = email
      this.role = "Employee"
    }
    getName() {
      return this.name
    }
    getId() {
      return this.id
    }
    getEmail() {
      return this.email
    }
    getRole() {
      return this.role
    }
};

Employee.lastId = 0

module.exports = Employee