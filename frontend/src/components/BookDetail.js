import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookDetail = ({match}) => {
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/books/${match.params.id}`);
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [match.params.id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card mb-3" style="max-width: 540px;">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`http://127.0.0.1:8000${book.cover_image}`} className="img-fluid rounded-start" alt={`Cover for ${book.title}`}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">{book.genre}</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
  )
}

export default BookDetail