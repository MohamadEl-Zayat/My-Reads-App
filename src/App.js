import React, { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
import { Routes, Route } from "react-router-dom";

const BooksApp = () => {
  const [books, setBooks] = useState([]);
  const [isShelfChanged, setIsShelfChanged] = useState(false);

  const handleShelfChange = async (changedBook, e) => {
    await BooksAPI.update(changedBook, e.target.value);
    const newBooks = books.map((book) => {
      return book.id === changedBook.id ? changedBook : book;
    });
    setBooks(newBooks);
    setIsShelfChanged(true);
  };

  useEffect(() => {
    if (books.length === 0 || isShelfChanged) {
      BooksAPI.getAll()
        .then((response) => setBooks(response))
        .catch((e) => console.log("Failed to load books"));
      setIsShelfChanged(false);
    }
  }, [books, isShelfChanged]);

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={<Home books={books} handleChange={handleShelfChange} />}
        />
        <Route
          path="/search"
          element={<Search books={books} handleChange={handleShelfChange} />}
        />
      </Routes>
    </div>
  );
};

export default BooksApp;
