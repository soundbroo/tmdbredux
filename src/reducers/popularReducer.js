import {
  GET_POPULAR_MOVIES,
  DISABLE_LOADER,
  IS_FAVOURITE,
  SEARCH_MOVIES,
  DISCOVER_MOVIES,
  CHANGE_PAGE,
  ADD_GENRE,
  EMPTY_GENRE,
  CHANGE_HREF
} from '../constants'

const initialState = {
  key: '2b862e29bf2b0b3c26234080c46833f0',
  lang: 'ru-RU',
  popular: [],
  totalPages: 0,
  currentPage: 1,
  page: 1,
  url: '',
  genre: [],
  checked: [],
  favId: 0,
  isFavourite: null,
  isLoaded: false,
  href: false,
  checkedBool: false
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
    case DISCOVER_MOVIES: {
      return {
        ...state,
        popular: action.payload.popular,
        totalPages: action.payload.totalPages,
        url: action.payload.url,
        isLoaded: action.payload.isLoaded
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
    case ADD_GENRE: {
      return { ...state, checked: action.payload.arr, checkedBool: action.payload.checkedBool }
    }
    case EMPTY_GENRE: {
      return { ...state, checked: action.payload.arr, checkedBool: action.payload.checkedBool }
    }
    case CHANGE_HREF: {
      return { ...state, href: action.payload.href, checked: action.payload.checked }
    }
    default:
      return state
  }
}
