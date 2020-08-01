import {createAsyncActionCreator} from '../../../common/createReducer';
import * as movieService from '../../movieServices';

export const keys = {
  'GET_TOP_MOVIES': 'GET_TOP_MOVIES',
  'SEARCH_MOVIES': 'SEARCH_MOVIES',
  'GET_MOVIE_DETAILS': 'GET_MOVIE_DETAILS',
};

export const getTopMovies = (page) => createAsyncActionCreator(
  // actionnya
  keys.GET_TOP_MOVIES,
  // requestnya apa
  movieService.getTopMovies, 
  // param inputnya
  {page}
);

export const searchMovies = (query, page) => createAsyncActionCreator(
  keys.SEARCH_MOVIES,
  movieService.searchMovies, 
  {query, page}
);

export const getMovieDetails = (movieId) => createAsyncActionCreator(
  keys.GET_MOVIE_DETAILS,
  movieService.getMovieDetails, 
  {movieId}
);