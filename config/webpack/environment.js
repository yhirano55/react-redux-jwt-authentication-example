const { environment } = require('@rails/webpacker')
environment.config.externals = {
  config: JSON.stringify({
    apiUrl: 'http://localhost:3000'
  })
}

module.exports = environment
