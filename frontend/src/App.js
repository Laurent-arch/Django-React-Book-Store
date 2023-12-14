import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import Register from './auth/Register';
// import Login from './auth/Login';
// import Logout from './auth/Logout';

// Dummy user authentication check (replace with actual logic)
const isAuthenticated = true;

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/books/:slug" element={<BookDetail />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/login" element={<Login />} />
          <Route
            path="/logout"
            element={isAuthenticated ? <Logout /> : <Navigate to="/login" />}
          /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;