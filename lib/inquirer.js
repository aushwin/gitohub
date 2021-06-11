
const inquirer = require('inquirer')

module.exports = {
     getGithubCredentials()
{
    const questions = [
        {
            name: 'username',
            type: 'input',
            message: 'Enter your Github username or email address',
            validate: function (value) {
                if (value.length) return true
                else return 'Please enter your username'
            }
        },
        {
            name: 'token',
            type: 'input',
            message: 'Enter your access token',
            validate: function (value) {
                if (value.length) return true
                else return 'Please enter your token'
            }
        }
    ]
    return inquirer.prompt(questions)
}
}