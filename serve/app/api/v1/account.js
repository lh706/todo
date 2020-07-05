module.exports = {
  prefix: 'account',
  routes: {
    post: {
      async 'register' (ctx) {
        Success('register')
      },
      async 'signin' (ctx) {
        Success('signin')
      }
    }
  }
}