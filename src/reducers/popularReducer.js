import { GET_POPULAR_MOVIES, IS_FAVOURITE } from '../constants'

const initialState = {
    key: "2b862e29bf2b0b3c26234080c46833f0",
    lang: "ru-RU",
    popular: [],
    totalPages: 0,
    currentPage: 1,
    search: "",
    url: "",
    genre: [],
    favId: 0,
    isFavourite: null
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
                url: action.payload.url
            }
        }
        case IS_FAVOURITE: {
            return { ...state, isFavourite: action.payload.favourite }
        }
        default: return state
    }
}