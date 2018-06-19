// import environmental variables from our .env file
require('dotenv').config({path: '.env'})

// Start our app
const app = require('./app')
// Bind app to port
app.set('port', process.env.PORT || 3001)
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`)
})
