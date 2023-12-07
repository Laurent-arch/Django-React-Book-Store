import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/books/');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <h3>
              <Link to={`/books/${book.id}`}>{book.title}</Link>
            </h3>
            <p>Author: {book.author.username}</p>
            <p>Genre: {book.genre}</p>
            <p>{book.synopsis}</p>
            {book.cover_image && (
              <img
                src={`http://127.0.0.1:8000${book.cover_image}`}
                alt={`Cover for ${book.title}`}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;