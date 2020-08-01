import {combineReducers} from 'redux';
import { createReducer,createAsyncReducer } from '../../../common/createReducer';
import { keys as movieActionKeys } from '../action/movieAction';
import movieModReducer from './movieModReducer';

const movieModalReducer = createReducer({ isOpen: false }, {

});

const moviesSuccessReducer = (state, action) => {
  const existingMovies = state.response ? state.response.results : [];

  return {
    ...state,
    isLoading: false,
    response: {
      ...action.response,
      results: [
        ...existingMovies,
        ...action.response.results
      ]
    }
  };
}

// gabungin reducer dari setiap reducer yang ada di createRedujer.js
const movieBrowserReducer = combineReducers({
  movieModal: movieModReducer,
  topMovies: createAsyncReducer(movieActionKeys.GET_TOP_MOVIES, {
    [`${movieActionKeys.GET_TOP_MOVIES}_SUCCESS`]: moviesSuccessReducer
  }),
  movieSearch: createAsyncReducer(movieActionKeys.SEARCH_MOVIES, {
    [`${movieActionKeys.SEARCH_MOVIES}_SUCCESS`]: moviesSuccessReducer
  }),
  movieDetails: createAsyncReducer(movieActionKeys.GET_MOVIE_DETAILS),
});

export default movieBrowserReducer;