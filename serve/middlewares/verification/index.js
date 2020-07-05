let requireDirectory = require('require-directory');
const ErrorException = require('../exception');
let verificationModules = requireDirectory(module, `${process.cwd()}/middlewares/verification/`,  {exclude: /index\.js$/})

const init = function () {
  global.Verification = Verification
  global.verificationModules = verificationModules
}
const Verification  = async function (ctx, verificationModule) {
  console.info(ctx, verificationModule)
  console.info(result, 222)
}

module.exports = {
  init
}