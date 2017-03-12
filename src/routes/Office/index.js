module.exports = {
  path: 'office',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./container/Office').default)
    })
  }
}
