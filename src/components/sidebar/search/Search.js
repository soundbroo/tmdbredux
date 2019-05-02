import React from "react";
import "./Search.css";

export default class Search extends React.Component {

  // handleSearch(e) {
  //   e.preventDefault()
  //   this.setState({ search: e.target.value }, async () => {
  //     if (this.state.search !== "") {
  //       const { key, lang, search } = this.state
  //       const searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=' + key + '&language=' + lang + '&query=' + search + '&page='
  //       const searchResult = await axios.get(searchUrl + 1)
  //       const movies = searchResult.data
  //       this.setState({
  //         popular: movies.results,
  //         totalPages: movies.total_pages,
  //         url: searchUrl
  //       })
  //       this.checkFavourite()
  //     }

  //     else { this.defaultState() }
  //   })
  // }
  render() {
    return <input type="text" className="search" placeholder="Поиск" />;
  }
}
