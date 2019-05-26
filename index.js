const clear = require('clear')
const Figlet = require('./components/figlet')
var fs = require("fs");
const Main = require('./main')

clear();
Figlet.figlett('To Do List App')
Figlet.figlett('-----------')
Main.mainFunc();