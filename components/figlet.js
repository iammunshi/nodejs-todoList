var figlet = require('figlet');
const chalk = require('chalk')

function figlett(message) {
    console.log(figlet.textSync(message, {
        horizontalLayout: 'default',
        verticalLayout: 'default'
    }));
}
module.exports = {
    figlett
}