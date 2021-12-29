import React from "react";
import BookShelfChanger from "./BookShelfChanger";

const Book = ({ title, authors, image, book, handleChange }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${image})`,
          }}
        ></div>
        <BookShelfChanger
          book={book}
          handleChange={handleChange}
          defaultValue={book.shelf === undefined ? "none" : book.shelf}
        />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">
        {authors.map((author) => {
          return (
            <React.Fragment key={author}>
              {author}
              <br></br>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Book;
