import React, { Component } from 'react'
import './AddNewBooksComponent.css'


class AddNewBooksComponent extends Component {
    constructor(props)
    {
        super(props)

        this.state = {
            bookName : '',
            authorName : '',
            ISBN:'',
            genre:''
        }
    }

    bookNameHandler = (event) =>{
        this.setState({
            bookName : event.target.value
        })
    }

    authorNameHandler = (event) =>{
        this.setState({
            authorName : event.target.value
        })
    }

   ISBNHandler = (event) =>{
        this.setState({
            ISBN : event.target.value
        })
    }

    genreHandler = (event) =>{
        this.setState({
            genre : event.target.value
        })
    }

    formSubmitHandler = (event) =>{
        event.preventDefault()

        fetch('http://localhost:3500/api/v1/books',{
        method:'POST',
        crossDomain: true,
        headers: {
            'Content-type':'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            bookName : this.state.bookName,
            authorName : this.state.authorName,
            ISBN : this.state.ISBN,
            genre:this.state.genre
        })
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.message)
            {
                alert(data.message)
            }
            else{
                alert(`${data.bookName} is added successfully`)
                window.location.href = '/'
            }
        })
    }

  render() {
    const {bookName, authorName, ISBN, genre} = this.state
    return (
        <form className='form-container' onSubmit={this.formSubmitHandler}>
            <h2>Adding a new book</h2>

        <div className='form-group'>
            <label>Book Name</label>
            <input
            type='text'
            placeholder='Enter the book name'
            value={bookName}
            onChange={this.bookNameHandler}
            required
            />
        </div>

        <div className='form-group'>
            <label>Author Name</label>
            <input
            type='text'
            className='form-control'
            placeholder='Enter the author name'
            value={authorName}
            onChange={this.authorNameHandler}
            required
            />
        </div>

        <div className='form-group'>
            <label>ISBN Number</label>
            <input
            type='text'
            pattern='[0-9]{13}'
            placeholder='Enter the ISBN Number'
            value={ISBN}
            onChange={this.ISBNHandler}
            required
            />
        </div>

        <div className='form-group'>
            <label>Genre</label>
            <input
            type='text'
            placeholder='Enter the genre'
            value={genre}
            onChange={this.genreHandler}
            required
            />
        </div>

        <div>
            <button type='submit'>Add</button>
        </div>
        </form>
        
    )
  }
}

export default AddNewBooksComponent