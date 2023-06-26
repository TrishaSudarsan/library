const express = require('express')
const router = express.Router()
const {getAllBooks, addNewBook, updateBook} = require('../controllers/booksController')

router.route('/').get(getAllBooks).post(addNewBook).patch(updateBook)

module.exports = router