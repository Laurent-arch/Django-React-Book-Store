import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './BookList.module.css'

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
    <div className={styles['book-container']}>
    <div className={styles['book-list']}>
      {books.map(book => (
        <div key={book.id} className={styles['book-card']}>
          <div className="book-cover-container">
            {book.cover_image && (
              <img
                src={`http://127.0.0.1:8000${book.cover_image}`}
                alt={`Cover for ${book.title}`}
                className={styles['book-cover']}
              />
            )}
          </div>
          <div className={styles['book-details']}>
            <h5 className={styles['book-title']}>
              <Link to={`/books/${book.slug}`} className={styles['book-link']}>
                {book.title}
              </Link>
            </h5>
            <p className={styles['book-author']}>
              By {book.author} <br />
            </p>
           
            {book.synopsis.length > 50 && (
              <Link to={`/books/${book.slug}`} className={styles['see-more-link']}>
               Synopsis
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default BookList;