import React, { useEffect, useState } from 'react'
import Book from './Book';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch("./booksData.json")
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

  return (
    <div>
      
      <div className='grid grid-cols-3 gap-6'>
        {
            books.map((book,index)=><Book key={index} book={book}></Book>)
        }
      </div>
    </div>
  )
}

export default Books
