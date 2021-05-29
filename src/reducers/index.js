import { ADD_MOVIES } from "../actions";

const InitialMovieState = {
  list: [],
  favourites: []
};
export default function movies(state = InitialMovieState, action) {
  if (action.type === ADD_MOVIES) {
    return {
      ...state,
      list: action.movies
    };
  }
  return state;
}
