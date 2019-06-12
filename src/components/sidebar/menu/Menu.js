import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { addGenre } from '../../../actions/popularActions'
import "./Menu.css";

class Menu extends React.Component {

  isChecked = (e) => {
    if (e.target.checked) {
      this.props.checked.push(e.target.id)
      this.props.addGenre(this.props.checked)
    } else {
      const del = this.props.checked.indexOf(e.target.id)
      console.log(del)
      if (del != -1) {
        this.props.checked.splice(del, 1)
        this.props.addGenre(this.props.checked)
      }

    }
  }

  render() {
    return (
      <>
        <hr color='#333333' />
        <Link className="menu-item" to="/popular">Популярные</Link>
        <hr color='#333333' />
        <Link className="menu-item" to="/favourite">Избранные</Link>
        <div className="genres" >
          {this.props.genres.map(el => {
            return <div className='genres-element'>
              <label htmlFor={el.id}>{el.name}</label>
              <input id={el.id} type='checkbox' name={`${el.name}`} onChange={this.isChecked} />
            </div>
          })}
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    genres: state.popular.genre,
    checked: state.popular.checked
  }
}

const mapDispatchToProps = {
  addGenre
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)