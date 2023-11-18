import { IMovie } from "../types";

export const moveMovieToFirstIndex = (
  movies: Array<IMovie>,
  idToMove: string
): Array<IMovie> => {
  const indexToMove = movies.findIndex((movie) => movie.Id === idToMove);

  if (indexToMove === -1) {
    return movies;
  }

  const movedMovie = movies.splice(indexToMove, 1)[0];

  movies.unshift(movedMovie);

  return movies;
};
