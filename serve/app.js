require('module-alias/register');
const Koa = require('koa');
const app = new Koa();
const {InitManager} = require('@root/middlewares/InitManager')

new InitManager(app)

app.listen(3601)
