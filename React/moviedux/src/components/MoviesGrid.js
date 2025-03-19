import React, { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MoviesGrid({ movies, watchList, addToWatchList }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterSearchTerm = (movie, searchTerm) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const filterByGenre = (movie, genre) => {
    return (
      genre === "All Genres" ||
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  const filterByRating = (movie, rating) => {
    if (rating === "All") {
      return true;
    } else if (rating === "Good") {
      return movie.rating >= 8;
    } else if (rating === "Ok") {
      return movie.rating >= 5 && movie.rating < 8;
    } else {
      return movie.rating < 5;
    }
  };

  const filteredMovies = movies.filter(
    (movie) =>
      filterByGenre(movie, genre) &&
      filterByRating(movie, rating) &&
      filterSearchTerm(movie, searchTerm)
  );

  const handleGenre = (e) => {
    setGenre(e.target.value);
  };

  const handleRating = (e) => {
    setRating(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        className="search-input"
        value={searchTerm}
        onChange={handleSearch}
      />

      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenre}
          >
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>
        <div className="filter-slot">
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRating}
          >
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>

      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            addToWatchList={addToWatchList}
            isWatchListed={watchList.includes(movie.id)}
          />
        ))}
      </div>
    </div>
  );
}
