const Operations = require('./components/operations')
const inquirer = require('inquirer')

function mainFunc(){
    var questions = {
        message: "What do you want to do?",
        type: "checkbox",
        name: "question1",
        choices: ["Create", "Read", "Update", "Delete"]
    }
    inquirer.prompt(questions)
        .then(function (answers) {
            // console.log(answers.question1)
            if (answers.question1 == "Create") {
                Operations.createFunc();
            }
            else if (answers.question1 == "Read") {
                Operations.readFunc();
            }
            else if (answers.question1 == "Update") {
                Operations.updateFunc();
            }
            else if (answers.question1 == "Delete") {
                Operations.delFunc();
            }
        }
    );
}

module.exports = {
    mainFunc
}
