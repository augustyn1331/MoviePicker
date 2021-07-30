import {Genres} from '.';

export interface TvShowsDetailsAxiosResponse {
  name: string;
  number_of_episodes: number;
  number_of_seasons: number;
  vote_average: number;
  poster_path: string;
  seasons: []; // add type for array
  id: number;
  overview: string;
  genres: Genres[];
}
// same as TvShowsDetails
