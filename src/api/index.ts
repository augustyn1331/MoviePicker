import {Movie} from 'src/models';
import {MovieApi} from 'src/models/movie';

export const genres: {[key: number]: string} = {
  12: 'Adventure',
  14: 'Fantasy',
  16: 'Animation',
  18: 'Drama',
  27: 'Horror',
  28: 'Action',
  35: 'Comedy',
  36: 'History',
  37: 'Western',
  53: 'Thriller',
  80: 'Crime',
  99: 'Documentary',
  878: 'Science Fiction',
  9648: 'Mystery',
  10402: 'Music',
  10749: 'Romance',
  10751: 'Family',
  10752: 'War',
  10770: 'TV Movie',
};

export const convertResponseToMovie = (
  data: MovieApi[],
  isMovie: boolean = true,
) => {
  const newResult: Movie[] = data.map(
    ({id, title, poster_path, vote_average, overview, genre_ids}) => ({
      id: id,
      title: title,
      poster_path: poster_path,
      vote_average: vote_average,
      overview: overview,
      genres: genre_ids.map(genre => genres[genre]),
      isMovie: isMovie,
    }),
  );
  return newResult;
};
