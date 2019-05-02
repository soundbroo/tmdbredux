import React, { Component } from 'react'
import '../css/Movie.css'
import axios from 'axios'
import Prev from '../img/prev.png'
import Next from '../img/next.png'


class Movie extends Component {

    constructor() {
        super()
        this.carousel1 = React.createRef()
        this.carousel2 = React.createRef()
        this.carousel3 = React.createRef()
        this.state = ({
            key: "2b862e29bf2b0b3c26234080c46833f0",
            lang: "ru-RU",
            movieData: [],
            date: "",
            currentGenre: [],
            similar: [],
            recommend: [],
            comments: [],
            image: [],
            id: window.location.pathname.split("/").splice(-1)
        })
        this.nextSimilar1 = this.nextSimilar1.bind(this)
        this.prevSimilar1 = this.prevSimilar1.bind(this)
        this.nextSimilar2 = this.nextSimilar2.bind(this)
        this.prevSimilar2 = this.prevSimilar2.bind(this)
        this.nextSimilar3 = this.nextSimilar3.bind(this)
        this.prevSimilar3 = this.prevSimilar3.bind(this)
        this.clickSimilar = this.clickSimilar.bind(this)
    }

    async componentDidMount() {
        this.initialState()
    }

    async initialState() {
        const { key, lang, id } = this.state
        const url = "https://api.themoviedb.org/3/movie/" + id + "?api_key=" + key + "&language=" + lang
        const similarUrl = "https://api.themoviedb.org/3/movie/" + id + "/similar?api_key=" + key + "&language=" + lang
        const recommendUrl = "https://api.themoviedb.org/3/movie/" + id + "/recommendations?api_key=" + key + "&language=" + lang
        const commentsUrl = "https://api.themoviedb.org/3/movie/" + id + "/reviews?api_key=" + key + "&language=en-US&page=1"
        const imageUrl = "https://api.themoviedb.org/3/movie/" + id + "/images?api_key=" + key
        const movieRequest = await axios.get(url)
        const similarRequest = await axios.get(similarUrl)
        const recommendRequest = await axios.get(recommendUrl)
        const commentsRequest = await axios.get(commentsUrl)
        const imageRequest = await axios.get(imageUrl)
        this.setState({
            movieData: movieRequest.data,
            date: movieRequest.data.release_date.split("-").splice(0, 1),
            currentGenre: movieRequest.data.genres.map(el => el.name),
            similar: similarRequest.data.results,
            recommend: recommendRequest.data.results,
            comments: commentsRequest.data.results,
            image: imageRequest.data.backdrops
        })
    }

    nextSimilar1(e) {
        e.preventDefault()
        const first = this.carousel1.current.firstChild.cloneNode(true)
        this.carousel1.current.appendChild(first)
        this.carousel1.current.removeChild(this.carousel1.current.firstChild)
    }

    prevSimilar1(e) {
        e.preventDefault()
        const last = this.carousel1.current.lastChild.cloneNode(true)
        this.carousel1.current.insertBefore(last, this.carousel1.current.firstChild)
        this.carousel1.current.removeChild(this.carousel1.current.lastChild)
    }

    nextSimilar2(e) {
        e.preventDefault()
        const first = this.carousel2.current.firstChild.cloneNode(true)
        this.carousel2.current.appendChild(first)
        this.carousel2.current.removeChild(this.carousel2.current.firstChild)
    }

    prevSimilar2(e) {
        e.preventDefault()
        const last = this.carousel2.current.lastChild.cloneNode(true)
        this.carousel2.current.insertBefore(last, this.carousel2.current.firstChild)
        this.carousel2.current.removeChild(this.carousel2.current.lastChild)
    }

    nextSimilar3(e) {
        e.preventDefault()
        const first = this.carousel3.current.firstChild.cloneNode(true)
        this.carousel3.current.appendChild(first)
        this.carousel3.current.removeChild(this.carousel3.current.firstChild)
    }

    prevSimilar3(e) {
        e.preventDefault()
        const last = this.carousel3.current.lastChild.cloneNode(true)
        this.carousel3.current.insertBefore(last, this.carousel3.current.firstChild)
        this.carousel3.current.removeChild(this.carousel3.current.lastChild)
    }

    clickSimilar(e, el) {
        e.preventDefault()
        this.setState({ id: el }, () => { this.initialState() })
        window.scrollTo(0, 0)
    }

    render() {
        const { movieData, date, currentGenre, similar, recommend, comments, image } = this.state
        return (
            <div className="movie">
                <div className="movie-card">
                    <div className="movie-poster"><img src={"https://image.tmdb.org/t/p/w185/" + movieData.poster_path} alt="poster"></img></div>
                    <div className="movie-description">
                        <h2>{movieData.title} ({date})</h2>
                        <p className="movie-rating">Дата релиза: {movieData.release_date}; Рейтинг: {movieData.vote_average}</p>
                        <p className="movie-genre"><div className="movie-genres">Жанр: {currentGenre.map(el => <span>{el}; </span>)}</div></p>
                        <p>{movieData.overview}</p>
                    </div>
                </div>

                <h2>Изображения</h2>
                <div className="similar">
                    <img onClick={this.prevSimilar3} src={Prev} className="similar-button prev-button" alt="prev"></img>
                    <div className="similar-movies" ref={this.carousel3}>
                        {image.map(el =>
                            <div><img src={"https://image.tmdb.org/t/p/w185/" + el.file_path} alt="image"></img>
                            </div>
                        )}
                    </div>
                    <img onClick={this.nextSimilar3} src={Next} className="similar-button next-button" alt="next"></img>
                </div>

                <h2>Похожие фильмы</h2>
                <div className="similar">
                    {similar.length == 0 ? <p>Этот фильм уникален и ни на что не похож</p> :
                        <><img onClick={this.prevSimilar1} src={Prev} className="similar-button prev-button" alt="prev"></img>
                            <div className="similar-movies" ref={this.carousel1}>
                                {similar.map(el =>
                                    <div><img src={"https://image.tmdb.org/t/p/w185/" + el.backdrop_path} alt={el.title}></img>
                                        <p onClick={(e) => this.clickSimilar(e, el.id)}>{el.title.substring(0, 23)}...</p>
                                    </div>
                                )}
                            </div>
                            <img onClick={this.nextSimilar1} src={Next} className="similar-button next-button" alt="next"></img></>
                    }

                </div>
                <h2>Рецензии</h2>
                <div className="movie-card comments-card">{comments.length == 0 ? <p className="no-comments">Рецензий еще нет</p> :
                    comments.map(el =>
                        <div>
                            <h2>{el.author}</h2>
                            <div>{el.content}</div>
                        </div>)
                }
                </div>

                <h2>Рекоммендуем</h2>
                <div className="similar">
                    <img onClick={this.prevSimilar2} src={Prev} className="similar-button prev-button" alt="prev"></img>
                    <div className="similar-movies" ref={this.carousel2}>
                        {recommend.map(el =>
                            <div><img src={"https://image.tmdb.org/t/p/w185/" + el.backdrop_path} alt={el.title}></img>
                                <p onClick={(e) => this.clickSimilar(e, el.id)}>{el.title.substring(0, 23)}...</p>
                            </div>
                        )}
                    </div>
                    <img onClick={this.nextSimilar2} src={Next} className="similar-button next-button" alt="next"></img>
                </div>

            </div>
        )
    }
}

export default Movie