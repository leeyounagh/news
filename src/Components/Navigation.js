import React, { Component } from 'react'

export default class Navigation extends Component {
  render() {
    return (
        <div className="menus">
        <button type="button" onClick={function(){
          this.props.onChange()
        }.bind(this)}>sport</button>
        <button>news</button>
        <button>tech</button>
        <button>world</button>
        <button>finance</button>
        <button>politics</button>
        <button>business</button>
        <button>economics</button>
        <button>entertainment</button>
        <button>beauty</button>
        <button>travel</button>
        <button>music</button>
        <button>food</button>
        <button>science</button>
        <button>gaming</button>
        <button>energy</button>
      
        </div>
    )
  }
}
