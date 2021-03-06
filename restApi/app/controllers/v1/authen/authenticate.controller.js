const BaseController = require('./../base.controller')
const AuthService = require('./../../../applicationServices/authen/authen.service')

class AuthenticateController extends BaseController {
  constructor(authService) {
    super()
    this._authService = authService || AuthService
  }

  login = async (req, res) => {
    res.status(200).send(authData)
  }

  signUp = async (req, res) => {
    res.status(200).send(authData)
  }

  test = async (req, res) => {
    res.status(200).send('test success')
  }

}

module.exports = AuthenticateController