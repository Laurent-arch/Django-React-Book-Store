import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact component={BookList} />
          <Route path="/books/:id" component={BookDetail} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;