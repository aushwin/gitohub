const Clui = require('clui')
const Conf = require('conf')
const chalk = require('chalk')
const Octokit = require('@octokit/rest')

const Spinner = Clui.Spinner
const  { createTokenAuth } = require('@octokit/auth-token')
const inquirer = require('./inquirer')
const pkg = require('../package.json')

const conf = new Conf(pkg.name)

let octokit

module.exports = {
    getInstance: () => octokit,
    getStoredGithubToken: () => conf.get('github.token'),
    getPersonalAccessToken: async() => {
        const credentials = await inquirer.getGithubCredentials(),
            status = new Spinner('Authenticating, Please wait...')

        status.start()
        try{
            const auth = createTokenAuth(credentials.token)
            const authenticationToken = await auth()
            if(authenticationToken.token){
                conf.set('github.token',authenticationToken.token)
                return authenticationToken
            }else throw new Error('Github token was not found in the response')
        }finally {
            status.stop()

        }
    }
}