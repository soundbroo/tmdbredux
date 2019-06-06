import React, { Component } from "react";
import "./favourite.css";
import axios from "axios";
import { Link } from "react-router-dom";

class Favourite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "2b862e29bf2b0b3c26234080c46833f0",
      lang: "ru-RU",
      movies: [],
      sRes: [],
      movieTitles: [],
      totalPages: 0,
      currentPage: 1,
      currentGenre: [],
      search: "",
      url: 0,
      favId: 0
    };
    this.getFavourites = this.getFavourites.bind(this);
    this.handleRemoveFavourite = this.handleRemoveFavourite.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.getFavourites();
  }

  getFavourites() {
    const { key, lang } = this.state;
    const a = [];
    for (var i = 0; i < localStorage.length; i++) {
      a.push(localStorage.key(i));
    }
    const url = a.map(
      el =>
        "https://api.themoviedb.org/3/movie/" +
        el +
        "?api_key=" +
        key +
        "&language=" +
        lang
    );
    let promiseArray = url.map(url => axios.get(url));
    Promise.all(promiseArray).then(res => {
      this.setState({
        url: url.length,
        movies: res.map(el => el.data),
        sRes: res.map(el => el.data),
        movieTitles: res.map(el => el.data.title)
      });
    });
  }

  handleRemoveFavourite(e) {
    e.preventDefault();
    this.setState({ favId: e.target }, () => {
      localStorage.removeItem(this.state.favId.id, this.state.favId.id);
      this.getFavourites();
    });
  }

  handleSearch(e) {
    e.preventDefault();
    this.setState({ search: e.target.value }, () => {
      const sRes = this.state.sRes.filter(res =>
        res.title.toLowerCase().includes(this.state.search)
      );
      this.setState({
        movies: sRes
      });
    });
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <div className="popular">
          {movies.map(res => (
            <div className="popular-card">
              <div>
                <img
                  src={"https://image.tmdb.org/t/p/w185/" + res.poster_path}
                  alt="poster"
                />
              </div>
              <div className="popular-card__description">
                <div>
                  <h2>{res.title}</h2>
                  <p className="popular-date">
                    Дата релиза: {res.release_date}; Рейтинг: {res.vote_average}
                  </p>
                  <p className="popular-genre">
                    Жанр:{" "}
                    {res.genres.map(el => (
                      <span>{el.name}; </span>
                    ))}
                  </p>
                  <p>{res.overview}...</p>
                </div>
                <div>
                  <button className="popular__read-button">
                    <Link to={`/movie/${res.id}`} className="movie-link">
                      Подробнее
                    </Link>
                  </button>
                  <button
                    onClick={
                      this.handleRemoveFavourite
                    }
                    id={res.id}
                    className="popular__favourite-button"
                  >
                    {localStorage.getItem(res.id) ? "Убрать" : "В избранное"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Favourite;
