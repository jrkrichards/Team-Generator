// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, email, officeNum) {
      super(name, email);
      Manager.lastOfficeNum++
      this.officeNum = Manager.lastOfficeNum
      this.role = "Manager"
    }
    getOfficeNumber() {
      return this.officeNum
    }
};

Manager.lastOfficeNum = 0

module.exports = Manager