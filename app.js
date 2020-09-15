const express = require('express')

const router = require('./router/router.js')

const port = 3030

const app = express()

app.use(router)

app.listen(port, function () {
  console.log(`http://localhost:${port}/ serve start success！`)
})
