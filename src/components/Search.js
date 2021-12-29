import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";

const Search = ({ books, handleChange }) => {
  const [text, setText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleTextChange = async (e) => {
    setText(e.target.value);
    const results = await BooksAPI.search(e.target.value);
    results !== undefined && Array.isArray(results)
      ? setSearchResults(
          results.map((result) => {
            const foundBook = books.filter((book) => {
              return book.title === result.title;
            });
            return foundBook.length > 0 ? foundBook[0] : result;
          })
        )
      : setSearchResults(results);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
          <input
            type="text"
            placeholder="Search by title or author"
            value={text}
            onChange={handleTextChange}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchResults === undefined || searchResults.length === 0 ? (
            <li>Please Enter a term to search with</li>
          ) : !Array.isArray(searchResults) ? (
            <li>No books were found for this term</li>
          ) : (
            searchResults.map((book) => {
              return (
                <li key={book.id}>
                  <Book
                    book={book}
                    title={book.title}
                    authors={book.authors === undefined ? [] : book.authors}
                    image={
                      book.imageLinks === undefined
                        ? ""
                        : book.imageLinks.thumbnail
                    }
                    handleChange={handleChange}
                  />
                </li>
              );
            })
          )}
        </ol>
      </div>
    </div>
  );
};
export default Search;
