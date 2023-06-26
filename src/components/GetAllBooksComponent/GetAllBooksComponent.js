import React, { useState, useEffect } from 'react'
import BookComponent from './BookComponent'
import './GetAllBooksComponent.css'

function GetAllBooksComponent() {

    const [books, setBooks] = useState([])

    const fetchAllBooks  = async() => {
        const response = await fetch('http://localhost:3500/api/v1/books')
        const data = await response.json()
        console.log(data);
        setBooks(data)
    }

    useEffect(() => {
        fetchAllBooks()
    }, [])

  return (
    <div className='books'>
        {books.map(book=>(
            <BookComponent book={book}/>
        ))}
    </div>
  )
}

export default GetAllBooksComponent