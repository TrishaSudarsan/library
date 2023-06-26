const booksModel = require('../models/bookModel')
const initialData = require('../data/initialData')


const getAllBooks = async(request, response) => {
    try{
    const books = await booksModel.find()
    if (books.length === 0)
    {
       const books = await booksModel.insertMany(initialData)
    }
    response.status(200).json(books)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

const addNewBook = async(request, response) => {
    const newBook = request.body
    try{
        const existingBook = await booksModel.findOne({ISBN:request.body.ISBN})
        if (existingBook)
        {
            return response.status(409).json({message:'ISBN number already exsists.'})
        }
        const book = await booksModel.create(newBook)
        response.status(201).json(book)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

const updateBook = async(request, response) => {
    const bookToBeUpdated = request.body
    try{
        
        const book = await booksModel.findOneAndUpdate({ISBN:bookToBeUpdated.ISBN}, bookToBeUpdated)
        response.status(201).json(book)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

module.exports = {getAllBooks, addNewBook, updateBook}