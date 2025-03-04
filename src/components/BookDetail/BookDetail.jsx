import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { addToStoredReadList } from '../../utility/addToDb';

const BookDetail = () => {
    const {bookId} = useParams();
    const id = parseInt(bookId)
    const data = useLoaderData();
    const book = data.find(book=> book.bookId === id)
    
    const {bookId:currentBookId, image} = book;
    
    const handleMarkAsRead = (id) => {
        // console.log("mark as read");
        addToStoredReadList(id)
    }
    
    
  return (
    <div className='my-12'>
      <h2>Book Details : {bookId}</h2>
      <img className='w-36' src={image} alt='img'></img>
      <br />
      <button onClick={()=>handleMarkAsRead(bookId)} className='btn btn-outline mr-4 btn-accent'>Mark as Read</button>
      <button className='btn btn-accent'>WishList</button>
    </div>
  )
}

export default BookDetail
