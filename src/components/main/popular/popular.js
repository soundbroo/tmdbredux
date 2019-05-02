import React, { Component } from 'react'
import './popular.css'
import axios from 'axios'
import { Pagination } from 'antd'
import { connect } from 'react-redux'
import { getPopular, isFavourite } from '../../../actions/popularActions'
import { PopularComponent } from './popularComponent'

class Popular extends Component {

    async componentDidMount() {
        const { key, lang, currentPage, popular } = this.props.popular
        this.props.getPopular(key, lang, currentPage)
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

    handleAddFavourite = (e) => {
        e.preventDefault()
        this.setState({ favId: e.target }, () => {
            localStorage.setItem(this.state.favId.id, this.state.favId.id)
            this.checkFavourite()
        })
    }

    handleRemoveFavourite = (e) => {
        e.preventDefault()
        this.setState({ favId: e.target }, () => {
            localStorage.removeItem(this.state.favId.id, this.state.favId.id)
            this.checkFavourite()
        })
    }

    checkFavourite = () => {
        const { popular } = this.props.popular
        const arr = popular.map(res => res.id)
        const favourite = arr.filter(el => el == localStorage.getItem(el))
        console.log(favourite)
        this.props.isFavourite(favourite)
    }

    genreFunction = (ids) => {
        return this.props.popular.genre.filter(el => el.id === ids).map(el => <span>{el.name}; </span>)

    }

    render() {
        const { popular, currentPage, totalPages } = this.props.popular
        return (
            <>

                <PopularComponent
                    popular={popular}
                    genreFunction={this.genreFunction}
                    handleAddFavourite={this.handleAddFavourite}
                    handleRemoveFavourite={this.handleRemoveFavourite}
                />
                <Pagination className="popular-pagination" onChange={this.handleChangePage} defaultCurrent={currentPage} total={totalPages * 10} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        popular: state.popular
    }
}

const mapDispatchToProps = {
    getPopular,
    isFavourite
}

export default connect(mapStateToProps, mapDispatchToProps)(Popular)