import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from './BookDetail.module.css'

const BookDetail = () => {
  const { slug } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/books/${slug}`);
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    if (slug) {
      fetchBookDetails();
    }
  }, [slug]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img
          src={`http://127.0.0.1:8000${book.cover_image}`}
          className={styles.cover}
          alt={`Cover for ${book.title}`}
        />
        <div className="book-details">
          <h5 className={styles.title}>{book.title}</h5>
          <p className="book-author">By {book.author}</p>
          <p>Genre: <em className={styles["book-genre"]}>{book.genre}</em> </p>
          <i className={styles.synopsis}>{book.synopsis}</i>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;