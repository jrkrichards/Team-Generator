// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    constructor(officeNum) {
      this.officeNum = officeNum
      this.role = "Manager"
    }
};

module.exports = Manager