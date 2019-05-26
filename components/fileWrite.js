var fs = require("fs");

function writeNew(data) {
    fs.readFile("file.txt", function (err, buf) {
        if (buf.toString() === "") {
            var arrayData = [];
            arrayData.push(data)
            var newData = JSON.stringify(arrayData);
            fs.writeFileSync('file.txt', newData)
        }
        else {
            var read = buf.toString()
            var readData = JSON.parse(read);
            var exists = false;
            readData.forEach(element => {
                if (element.name === data.name) {
                    console.log("Todo item with this name already exists")
                    exists = true;
                }
            });
            if (!exists) {
                readData.push(data)
                var newData = JSON.stringify(readData);
                fs.writeFileSync('file.txt', newData)
            }
        }
    });
}
function readAll() {
    var data = fs.readFileSync("file.txt")
    if (data.toString() === "") {
        console.log("Nothing to show!")
    }
    else {
        var read = data.toString();
        var readData = JSON.parse(read);
        var names = new Array();
        readData.forEach(element => {
            names.push(element.name)
        });
        return names;
    }
}
function readSingle(name) {
    var data = fs.readFileSync("file.txt")
    var read = data.toString()
    var readData = JSON.parse(read)
    readData.forEach(element => {
        if (element.name == name) {
            console.log("Name: " + element.name + "\nDescription: " + element.description + "\nStatus: " + element.status)
        }
    })
}
function update(obj1){
    var data = fs.readFileSync("file.txt")
    var read = data.toString()
    var readData = JSON.parse(read)
    var getIndex = readData.map(function (element) { 
        return element.name; 
    }).indexOf(obj1.name.toString());
    var obj = readData[getIndex];
    //return obj
    obj.description = obj1.description;
    obj.status = obj1.status;
    readData[getIndex] = obj;
    var newData = JSON.stringify(readData);
    fs.writeFileSync('file.txt', newData)
}
function deleteSingle(name) {
    var data = fs.readFileSync("file.txt")
    var read = data.toString()
    var readData = JSON.parse(read)
    var removeIndex = readData.map(function (element) { 
        return element.name; 
    }).indexOf(name.toString());
    readData.splice(removeIndex, 1);
    var newData = JSON.stringify(readData);
    fs.writeFileSync('file.txt', newData)
}
module.exports = {
    writeNew,
    readAll,
    readSingle,
    update,
    deleteSingle
}