const errors = {
  default: [500, 5001, '系统异常'],
  success: [200, 2001, 'OK'],
  reqError: [400, 4001, '参数错误'],
  auth: []
}

class ErrorException extends Error{
  constructor (type = 'default', message) {
    super()
    let [code, status, msg] = [...errors[type]]
    this.message = message || msg
    this.status = status
    this.code = code
  }
  static init (app) {
    global.ErrorException = function (...params) {
      throw new ErrorException(...params)
    }
    global.Success = function (msg) {
      throw new ErrorException('success', msg)
    }
    app.use(ErrorException.middleware)
  }
  static async middleware (ctx, next) {
    try {
      await next()
    } catch(error) {
      if (!(error instanceof ErrorException)) {
        console.info(error)
        error = new ErrorException()
      }
      ctx.body = {error}
      ctx.status = error.code
    }
  }
}

module.exports = ErrorException