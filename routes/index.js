const express = require('express')
const router = express.Router()
const testConstroller = require('../controllers/testController')

router.get('/', testConstroller.homePage)
router.get('/nba/allplayers', testConstroller.testPage)

module.exports = router
