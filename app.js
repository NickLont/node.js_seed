const express = require('express')
// const helpPage = require('')
const path = require('path')
const fs = require('fs')
const app = express()
const routes = require('./routes/index')

// Registration of middleware for express configuration

// Logger for timestamp whenever we get a call
app.use((req, res, next) => {
  const now = new Date().toString()
  const colouredLog = `\x1b[36mTimestamp\x1b[0m: ${now.toString()} \n\x1b[31mMethod\x1b[0m: ${req.method} \n\x1b[34mPATH\x1b[0m: ${req.url}\n`
  console.log(colouredLog)
  const log = `\nTimestamp: ${now.toString()} \nMethod: ${req.method} \nPATH: ${req.url}\n`
  fs.appendFile('server.log', log, (err) => {
    if (err) {
      console.log('Unable to append to server.log')
    }
  })
  next()
})

// Maintenance html serve
// app.use((req, res, next) => {
//   res.sendFile(path.resolve('./views/maintenance.html'))
//   next()
//   // TODO add a check to .env file for maintenance
// })

app.use(express.static(path.resolve(__dirname, 'public'))) // set the static directory for our public files

app.use('/', routes)

module.exports = app
