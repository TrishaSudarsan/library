const express = require('express')
const router = express.Router()
const {getISBN} = require('../controllers/validateBooksController')

router.route('/').post(getISBN)

module.exports = router