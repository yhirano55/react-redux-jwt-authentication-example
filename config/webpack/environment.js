const { environment } = require('@rails/webpacker')
environment.config.externals = {
  config: JSON.stringify({
    apiUrl: '/api/v1'
  })
}

module.exports = environment
