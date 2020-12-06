// Variables
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employees = []

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const questions = async (inputs = []) => {
  const prompts = [
    {
      type: 'list',
      name: 'title',
      message: 'Which employee would you like to add?',
      choices: ["Manager", "Engineer", "Intern"],
    },
    {
      type: 'input',
      name: 'name',
      message: "What is the employee's name?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the employee's email address?",
    },
    {
      type: 'input',
      name: 'github',
      message: "What is the Engineer's Github?",
      when: function(answers) {
        return answers.title === "Engineer"
      }
    },
    {
      type: 'input',
      name: 'school',
      message: "What school does the intern go to?",
      when: function(answers) {
        return answers.title === "Intern"
      }
    },
    {
      type: 'confirm',
      name: 'anotherOne',
      message: "Would you like to create another employee profile?",
    },
  ];

  const{anotherOne, ...answers} = await inquirer.prompt(prompts)
  const newInputs = [...inputs, answers]
  return anotherOne ? questions(newInputs): newInputs;
};


// function to initialize program
const init = async () => {
    console.log('Starting input questions');
    try {
      const answers = await questions();

      await createProfiles(answers)

      await render(employees)

    //   const markdownAnswers = otherUtils(answers); WONT WORK RIGHT NOW
  
    //   await writeFileAsync('README.md', markdownAnswers); WONT WORK RIGHT NOW
    
      console.log('Thank you for providing your input');
      console.log(answers)
    } catch (err) {
      console.log(err);
    }
};

const createProfiles = (answers) => {
  for (let i = 0; i < answers.length; i++) {
    if(answers[i].title === "Manager") {
      let employee = new Manager(answers[i].name, answers[i].email);
      employees.push(employee)
    } else if(answers[i].title === "Engineer") {
      let employee = new Engineer(answers[i].name, answers[i].email, answers[i].github)
      employees.push(employee)
    } else if(answers[i].title === "Intern") {
      let employee = new Intern(answers[i].name, answers[i].email, answers[i].school)
      employees.push(employee)
    }
  }
  console.log(employees)
}

// function call to initialize program
init();


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
