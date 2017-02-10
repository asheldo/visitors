'use strict'

const config = require('./config/server')
const restify = require('restify')

global.server = restify.createServer({
  name: config.name,
  version: config.version
})

server.pre(restify.pre.sanitizePath());
server.use(restify.bodyParser())

server.on('uncaughtException', (req, res, route, err) => {
  res.send(err)
})

server.listen(config.port, function() {
  const routes = require('./api/routes')
  console.log(`Server listening, port: ${config.port}`)
})
