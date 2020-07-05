let requireDirectory = require('require-directory');
const Router = require('@koa/router');
const needVersions = ['v1', 'v2']
const apiDic = `${process.cwd()}/app/api/`


const init = function (app) {
  needVersions.forEach(version => {
    requireDirectory(module, apiDic + version + '/', {visit: visitor(app, version)});
  })
}

function visitor (app, version) {
  const router = new Router({
    prefix: '/' + version
  })
  function loadRoutes ({prefix, routes}) {
    if (!routes) return
    Object.entries(routes).forEach(([type, fns]) => {
      if (typeof fns === 'function') {
        router[type](`/${prefix}`, fns)
      } else if (typeof fns === 'object'){
        Object.entries(fns).forEach(([name, fn]) => {
          router[type](`/${prefix}/${name}`, fn)
        })
      }
    })
    app.use(router.routes())
  }
  return loadRoutes
}

module.exports = {
  init
}