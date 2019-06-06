import {
  GET_POPULAR_MOVIES,
  DISABLE_LOADER,
  IS_FAVOURITE,
  SEARCH_MOVIES,
  CHANGE_PAGE,
} from '../constants'

const initialState = {
  key: '2b862e29bf2b0b3c26234080c46833f0',
  lang: 'ru-RU',
  popular: [],
  totalPages: 0,
  currentPage: 1,
  url: '',
  genre: [],
  favId: 0,
  isFavourite: null,
  isLoaded: false,
}

export const popular = (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR_MOVIES: {
      return {
        ...state,
        popular: action.payload.popular,
        genre: action.payload.genre,
        totalPages: action.payload.totalPages,
        currentPage: action.payload.currentPage,
        url: action.payload.url,
        isLoaded: action.payload.isLoaded,
      }
    }
    case DISABLE_LOADER: {
      return { ...state, isLoaded: false }
    }
    case IS_FAVOURITE: {
      return { ...state, isFavourite: action.payload.favourite }
    }
    case SEARCH_MOVIES: {
      return {
        ...state,
        popular: action.payload.popular,
        totalPages: action.payload.totalPages,
        url: action.payload.url,
        search: action.payload.search,
      }
    }
    case CHANGE_PAGE: {
      return {
        ...state,
        popular: action.payload.popular,
        totalPages: action.payload.totalPages,
        currentPage: action.payload.currentPage,
        isLoaded: action.payload.isLoaded,
      }
    }
    default:
      return state
  }
}
