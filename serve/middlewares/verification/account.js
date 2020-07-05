module.exports = {
  account (value) {
    if (!value) return 'account is required!'
    if (value.length > 3 && value.length < 20) return 'account 3~15'
  }
}