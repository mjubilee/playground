import React from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function WatchList({ movies, watchList, addToWatchList }) {
  return (
    <div>
      <h1 className="title">Watch List</h1>
      <div className="watchlist">
        {watchList.map((movieId) => {
          const movie = movies.find((m) => m.id === movieId);
          return (
            <MovieCard
              movie={movie}
              key={movie.id}
              addToWatchList={addToWatchList}
              isWatchListed={true}
            />
          );
        })}
      </div>
    </div>
  );
}
