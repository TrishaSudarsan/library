const booksModel = require('../models/bookModel')

const getISBN = async(request, response) => {
    const {ISBN} = request.body
    try{
    const bookToBeEdited = await booksModel.findOne({ISBN:ISBN})
    response.status(200).json(bookToBeEdited)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

module.exports = {getISBN}