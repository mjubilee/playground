import React, {useState, useEffect, createContext} from 'react'

export const BooksContext = createContext();

export const BooksProvider = ( {children} ) => {
    const [books, setBooks] = useState([]);

    useEffect( () => {
        fetch("/books.json")
        .then( resp => resp.json())
        .then( data => setBooks(data))
        .catch( err => console.error(err));
    }, []);

    return (
        <BooksContext.Provider value={books}>{children}</BooksContext.Provider>
    );
};
