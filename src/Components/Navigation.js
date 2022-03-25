import React, { Component } from 'react'

export default class Navigation extends Component {
  // getTopic= async(e)=>{
  //   let topic = {e.target.textContext}
  //   this.url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=kR&topic={${topic}}&page_size=100`)
  // }
  render() {
    return (
        <div className="menus">
        <button>sport</button>
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
