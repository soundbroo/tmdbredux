import axios from "axios";
import { GET_FAVOURITES_MOVIES } from '../constants'

export const getFavourites = (key, lang, page, pageSize) => dispatch => {
    const a = []
    if (page * pageSize < localStorage.length) {
        for (var i = page * pageSize - pageSize; i < page * pageSize; i++) {
            a.push(localStorage.key(i));
        }
    } else {
        for (var i = page * pageSize - pageSize; i < localStorage.length; i++) {
            a.push(localStorage.key(i));
        }
    }

    const url = a.map(
        el =>
            "https://api.themoviedb.org/3/movie/" + el + "?api_key=" + key + "&language=" + lang
    );
    let promiseArray = url.map(url => axios.get(url));
    Promise.all(promiseArray).then(res => {
        const result = res
        dispatch({
            type: GET_FAVOURITES_MOVIES,
            payload: {
                movies: result.map(el => el.data),
                sRes: result.map(el => el.data)
            }
        })
    });

}