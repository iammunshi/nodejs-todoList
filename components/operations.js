const inquirer = require('inquirer')
var fs = require("fs");
const FileWrite = require('./fileWrite')

function createFunc() {
    inquirer.prompt({
        message: "Name: ",
        type: "text",
        name: "name"
    }).then(function (answer1) {
        inquirer.prompt({
            message: "Description: ",
            type: "text",
            name: "description"
        }).then(function (answer2) {
            inquirer.prompt({
                message: "Status: ",
                type: "checkbox",
                name: "status",
                choices: ["Complete", "Incomplete"]
            }).then(function (answer3) {
                var obj = {
                    name: answer1.name,
                    description: answer2.description,
                    status: answer3.status[0]
                }
                FileWrite.writeNew(obj)
                console.log(obj)
            })  
            
        })
    })
}
function readFunc(){
    var opt = FileWrite.readAll()
    inquirer.prompt({
        message: "Name: ",
        type: "checkbox",
        name: "name",
        choices: opt
    }).then(function (answer1) {
        FileWrite.readSingle(answer1.name)
    })
}
function updateFunc(){
    var opt = FileWrite.readAll()
    inquirer.prompt({
        message: "Name: ",
        type: "checkbox",
        name: "name",
        choices: opt
    }).then(function (answer1) {
        //var obj = FileWrite.update(answer1.name)
        inquirer.prompt({
            message: "Description: ",
            type: "text",
            name: "description"
        }).then(function (answer2) {
            inquirer.prompt({
                message: "Status: ",
                type: "checkbox",
                name: "status",
                choices: ["Complete", "Incomplete"]
            }).then(function (answer3) {
                var obj = {
                    name: answer1.name,
                    description: answer2.description,
                    status: answer3.status[0]
                }
                FileWrite.update(obj)
                //console.log(obj)
            })  
            
        })
    })
}
function delFunc(){
    var opt = FileWrite.readAll()
    inquirer.prompt({
        message: "Name: ",
        type: "checkbox",
        name: "name",
        choices: opt
    }).then(function (answer1) {
        FileWrite.deleteSingle(answer1.name)
    })
}

module.exports = {
    createFunc,
    readFunc,
    updateFunc,
    delFunc
}