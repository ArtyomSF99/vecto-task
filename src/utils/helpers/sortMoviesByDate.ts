import { IMovie } from "../types";

export const sortMoviesByDate = (movies: Array<IMovie>) => {
  const sortedArray = movies
    .sort((a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime())
    .slice(0, 50);

  return sortedArray;
};
