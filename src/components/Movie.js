import React, { Component } from 'react'
import '../css/Movie.css'
import { connect } from 'react-redux'
import { getMovie, getSimillar } from '../actions/movieActions'
import { MovieCard } from './movieCard';
import { MovieImages } from './movieImages';
import { MovieSimillar } from './movieSimillar';
import { MovieOverview } from './movieOverview';
import { MovieRecommend } from './movieRecommend';


class Movie extends Component {

    constructor() {
        super()
        this.carousel1 = React.createRef()
        this.carousel2 = React.createRef()
        this.carousel3 = React.createRef()
    }

    componentDidMount() {
        const { key, lang, id } = this.props.movie
        this.props.getSimillar(this.props.location.pathname.slice(7))
        this.props.getMovie(key, lang, id)
    }

    // shouldComponentUpdate(nextProps) {
    //     if (nextProps.location.pathname != this.props.location.pathname) {
    //         const { key, lang } = this.props.movie
    //         this.props.getSimillar(this.props.location.pathname)
    //         this.props.getMovie(key, lang)
    //         return true
    //     } else return false
    // }

    nextSimilar1 = (e) => {
        e.preventDefault()
        const first = this.carousel1.current.firstChild.cloneNode(true)
        this.carousel1.current.appendChild(first)
        this.carousel1.current.removeChild(this.carousel1.current.firstChild)
    }

    prevSimilar1 = (e) => {
        e.preventDefault()
        const last = this.carousel1.current.lastChild.cloneNode(true)
        this.carousel1.current.insertBefore(last, this.carousel1.current.firstChild)
        this.carousel1.current.removeChild(this.carousel1.current.lastChild)
    }

    nextSimilar2 = (e) => {
        e.preventDefault()
        const first = this.carousel2.current.firstChild.cloneNode(true)
        this.carousel2.current.appendChild(first)
        this.carousel2.current.removeChild(this.carousel2.current.firstChild)
    }

    prevSimilar2 = (e) => {
        e.preventDefault()
        const last = this.carousel2.current.lastChild.cloneNode(true)
        this.carousel2.current.insertBefore(last, this.carousel2.current.firstChild)
        this.carousel2.current.removeChild(this.carousel2.current.lastChild)
    }

    nextSimilar3 = (e) => {
        e.preventDefault()
        const first = this.carousel3.current.firstChild.cloneNode(true)
        this.carousel3.current.appendChild(first)
        this.carousel3.current.removeChild(this.carousel3.current.firstChild)
    }

    prevSimilar3 = (e) => {
        e.preventDefault()
        const last = this.carousel3.current.lastChild.cloneNode(true)
        this.carousel3.current.insertBefore(last, this.carousel3.current.firstChild)
        this.carousel3.current.removeChild(this.carousel3.current.lastChild)
    }

    clickSimilar = (e, el) => {
        const { key, lang } = this.props.movie
        e.preventDefault()
        this.props.getSimillar(el)
        this.props.getMovie(key, lang)
        window.scrollTo(0, 0)
    }

    render() {
        const { movieData, date, currentGenre, similar, recommend, comments, image } = this.props.movie
        return (
            <div className="movie">
                <MovieCard movieData={movieData} date={date} currentGenre={currentGenre} />
                <MovieImages image={image} prevSimilar3={this.prevSimilar3} nextSimilar3={this.nextSimilar3} carousel3={this.carousel3} />
                <MovieSimillar similar={similar} prevSimilar1={this.prevSimilar1} nextSimilar1={this.nextSimilar1} carousel1={this.carousel1} clickSimilar={this.clickSimilar} />
                <MovieOverview comments={comments} />
                <MovieRecommend recommend={recommend} prevSimilar2={this.prevSimilar2} nextSimilar2={this.nextSimilar2} carousel2={this.carousel2} clickSimilar={this.clickSimilar} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movie: state.movie
    }
}

const mapDispatchToProps = {
    getMovie,
    getSimillar
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie)