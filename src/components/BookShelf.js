import React from "react";
import Book from "./Book";

const BookShelf = ({ title, books, handleChange }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => {
            return (
              <li key={book.id}>
                <Book
                  book={book}
                  title={book.title}
                  authors={book.authors}
                  image={book.imageLinks.thumbnail}
                  handleChange={handleChange}
                />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
