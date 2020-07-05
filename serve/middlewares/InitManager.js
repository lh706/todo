const ErrorException = require('@m/exception/')
const Api = require('@a/api/')
const Verification = require('@m/Verification/')

class InitManager {
  constructor (app) {
    ErrorException.init(app)
    Api.init(app)
    Verification.init(app)
  }
}

module.exports = {
  InitManager
}