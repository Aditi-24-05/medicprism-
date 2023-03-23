const express = require('express')
const router = express.Router()
const { createUser,
        checkUser } = require('../controllers/user')


router.route('/signup').post(createUser)
router.route('/login').post(checkUser)

module.exports = router