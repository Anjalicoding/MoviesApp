import { combineReducers } from "redux";
import {
  ADD_MOVIES,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  SET_SHOW_FAVOURITES,
  ADD_MOVIES_TO_LIST,
  ADD_SEARCH_RESULT
} from "../actions";

const InitialMovieState = {
  list: [],
  favourites: [],
  showFavourites: false
};
export function movies(state = InitialMovieState, action) {
  // if (action.type === ADD_MOVIES) {
  //   return {
  //     ...state,
  //     list: action.movies
  //   };
  // }
  // return state;
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies
      };
    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites]
      };
    case REMOVE_FAVOURITE:
      const filteresdArray = state.favourites.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favourites: filteresdArray
      };
    case SET_SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites: action.val
      };
    case ADD_MOVIES_TO_LIST:
      return {
        ...state,
        list: [action.movie, ...state.list]
      };
    default:
      return state;
  }
}
const InitialSearchState = {
  result: {},
  showSearchResults: false
};
export function search(state = InitialSearchState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResults: true
      };
    case ADD_MOVIES_TO_LIST:
      return {
        ...state,
        showSearchResults: false
      };
    default:
      return state;
  }
}

// const InitialRootState = {
//   movies: InitialMovieState,
//   search: InitialSearchState
// };
// export default function rootReducer(state = InitialRootState, action) {
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action)
//   };
// }
//Already present in Redux
export default combineReducers({
  movies,
  search
});
