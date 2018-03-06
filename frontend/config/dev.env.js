'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_LOCATION: '"http://hikari.food.test"',
  API_CLIENT_ID: '"2"',
  API_CLIENT_SECRET: '"tGxZzTwhFw6dFclGTJf9SrA4Ca896rDOFYAlDJ8M"',
  BROADCAST_AUTH_ENDPOINT: '""',
  PUSHER_KEY: '""',
  PUSHER_CLUSTER: '""',
})
