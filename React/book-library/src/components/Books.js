import React, { useContext, useEffect } from "react";
import { BooksContext } from "../BooksContext";
import { useLocation } from "react-router-dom";

export default function Books() {
  const query = new URLSearchParams(useLocation().search);
  const searchParam = query.get("search") || "";
  const books = useContext(BooksContext);

  const filteredBook = books.filter((b) =>
    b.title.toLowerCase().includes(searchParam.toLowerCase())
  );

  useEffect(() => console.log(searchParam));

  return (
    <div>
      <h1>All Books</h1>
      <ul>
        {filteredBook.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
