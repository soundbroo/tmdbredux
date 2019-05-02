import React, { Component } from 'react'
import './popular.css'
import axios from 'axios'
import { Pagination } from 'antd'
import { Link } from 'react-router-dom'

class Popular extends Component {
    constructor(props) {
        super(props)
        this.state = {
            key: "2b862e29bf2b0b3c26234080c46833f0",
            lang: "ru-RU",
            popular: [],
            totalPages: 0,
            currentPage: 1,
            search: "",
            url: "",
            genre: [],
            favId: 0,
            isFavourite: []
        }
        this.handleChangePage = this.handleChangePage.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleAddFavourite = this.handleAddFavourite.bind(this)
        this.handleRemoveFavourite = this.handleRemoveFavourite.bind(this)
    }

    async defaultState() {
        const { key, currentPage, lang } = this.state
        const url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + key + '&language=' + lang + '&page='
        const popularRequest = await axios.get(url + currentPage)
        const popularMovies = popularRequest.data
        this.setState({
            popular: popularMovies.results,
            totalPages: popularMovies.total_pages,
            currentPage: popularMovies.page,
            url: url
        })
    }

    async componentDidMount() {
        const { key, lang } = this.state
        this.defaultState()
        const genre = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=' + key + '&language=' + lang)
        this.setState({ genre: genre.data.genres })
        this.checkFavourite()
    }

    async handleChangePage(page) {
        const { url } = this.state
        const requestResult = await axios.get(url + page)
        const popularMovies = requestResult.data
        this.setState({
            popular: popularMovies.results,
            totalPages: popularMovies.total_pages,
            currentPage: popularMovies.page
        })
        this.checkFavourite()
        window.scrollTo(0, 0)
    }

    handleSearch(e) {
        e.preventDefault()
        this.setState({ search: e.target.value }, async () => {
            if (this.state.search !== "") {
                const { key, lang, search } = this.state
                const searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=' + key + '&language=' + lang + '&query=' + search + '&page='
                const searchResult = await axios.get(searchUrl + 1)
                const movies = searchResult.data
                this.setState({
                    popular: movies.results,
                    totalPages: movies.total_pages,
                    url: searchUrl
                })
                this.checkFavourite()
            }

            else { this.defaultState() }
        })
    }

    handleAddFavourite(e) {
        e.preventDefault()
        this.setState({ favId: e.target }, () => {
            localStorage.setItem(this.state.favId.id, this.state.favId.id)
            this.checkFavourite()
        })
    }

    handleRemoveFavourite(e) {
        e.preventDefault()
        this.setState({ favId: e.target }, () => {
            localStorage.removeItem(this.state.favId.id, this.state.favId.id)
            this.checkFavourite()
        })
    }

    checkFavourite() {
        const arr = this.state.popular.map(res => res.id)
        const isFavourite = arr.filter(el => el == localStorage.getItem(el))
        this.setState({
            isFavourite: isFavourite
        })
    }

    genreFunction(ids) {
        return this.state.genre.filter(el => el.id === ids).map(el => <span>{el.name}; </span>)

    }

    render() {
        const { popular, currentPage, totalPages } = this.state
        return (
            <>
                
                <div className="popular">{popular.map(res =>
                    <div className="popular-card">
                        <div><img src={"https://image.tmdb.org/t/p/w185/" + res.poster_path} alt="poster"></img></div>
                        <div className="popular-card__description">
                            <div><h2>{res.title}</h2>
                                <p className="popular-date">Дата релиза: {res.release_date}; Рейтинг: {res.vote_average}</p>
                                <p className="popular-genre">Жанр: {res.genre_ids.map(el => this.genreFunction(el))}</p>
                                <p>{res.overview}...</p></div>
                            <div>
                                <button className="popular__read-button">
                                    <Link to={`/movie/${res.id}`} className="movie-link">Подробнее</Link>
                                </button>
                                <button onClick={localStorage.getItem(res.id) ? this.handleRemoveFavourite : this.handleAddFavourite} id={res.id} className="popular__favourite-button">{localStorage.getItem(res.id) ? "Убрать" : "В избранное"}</button>
                            </div>
                        </div>
                    </div>
                )}</div>
                <Pagination className="popular-pagination" onChange={this.handleChangePage} defaultCurrent={currentPage} total={totalPages * 10} />
            </>
        )
    }
}

export default Popular