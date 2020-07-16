const fs = require('fs')
const path = require('path')
const fastify = require('fastify')
const fstatic = require('fastify-static')

const fastifyConf = {
  http2: true,
  https: {
    key: fs.readFileSync(path.join(__dirname, './config/localhost.key')),
    cert: fs.readFileSync(path.join(__dirname, './config/localhost.crt'))
  },
	logger:
		process.env.DEBUG === 'true'
			? { prettyPrint: { colorize: true, translateTime: true, crlf: false } }
			: true
}

const app = fastify(fastifyConf)
const port = process.env.PORT || 443
const ip = process.env.IP || 'localhost'

app.register(fstatic, {
  root: path.join(__dirname, 'public'),
  prefix: '/public/',
})

app.after(() => {
  app.get(`/`, async () => {
    return {
      name: 'This is a test!',
      version: '0.0.1'
    }
  })
  
  app.get(`/test`, async (req, res) => {
		res.sendFile('index.html')
		return res
	})
})

app.ready(async (err) => {
	if (err) return app.log.error(err)

  app.listen(port, ip)
})

