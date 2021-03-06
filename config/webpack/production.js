process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const environment = require('./environment')
environment.config.externals = {
  config: JSON.stringify({
    apiUrl: '/api/v1'
  })
}

module.exports = environment.toWebpackConfig()
