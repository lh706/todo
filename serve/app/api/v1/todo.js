module.exports = {
  prefix: 'todo',
  routes: {
    get (ctx) {
      ErrorException('reqError')
    },
    post(ctx) {
      Success('post')
    },
    delete (ctx) {
      Success('delete')
    },
    put (ctx) {
      Success('put')
    },
  }
}