import React from "react";

const BookShelfChanger = ({ handleChange, book, defaultValue }) => {
  return (
    <div className="book-shelf-changer">
      <select
        onChange={(e) => handleChange(book, e)}
        defaultValue={defaultValue}
      >
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookShelfChanger;
