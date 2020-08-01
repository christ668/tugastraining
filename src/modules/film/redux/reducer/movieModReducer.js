import { keys } from '../action/movieModalAction';
import { createReducer } from '../../../common/createReducer';

const movieModReducer = createReducer({ isOpen: false, movieId: undefined }, {
  [keys.OPEN_MOVIE_MODAL]: (state, action) => ({
    isOpen: true,
    movieId: action.movieId
  }),
  [keys.CLOSE_MOVIE_MODAL]: (state, action) => ({
    ...state,
    isOpen: false
  })
});

export default movieModReducer;