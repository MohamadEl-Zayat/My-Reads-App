import React from "react";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";

const Home = ({ books, handleChange }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            title={"Currently Reading"}
            books={books.filter((book) => book.shelf === "currentlyReading")}
            handleChange={handleChange}
          />
          <BookShelf
            title={"Want To Read"}
            books={books.filter((book) => book.shelf === "wantToRead")}
            handleChange={handleChange}
          />
          <BookShelf
            title={"Read"}
            books={books.filter((book) => book.shelf === "read")}
            handleChange={handleChange}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default Home;
