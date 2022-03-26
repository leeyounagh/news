import React, { Component } from 'react'

export default class Navigation extends Component {
 


  render() {
    return (
        <div className="menus">
        <button onClick={function(e){
          e.preventDefault();
          this.props.getTopic(e)
        }.bind(this)}>sport</button>
        <button onClick={function(e){
          e.preventDefault();
          this.props.getTopic(e)
        }.bind(this)}>news</button>
        <button onClick={function(e){
          e.preventDefault();
          this.props.getTopic(e)
        }.bind(this)}>tech</button>
        <button onClick={function(e){
          e.preventDefault();
          this.props.getTopic(e)
        }.bind(this)}>world</button>
        <button onClick={function(e){
          e.preventDefault();
          this.props.getTopic(e)
        }.bind(this)}>finance</button>
        <button onClick={function(e){
          e.preventDefault();
          this.props.getTopic(e)
        }.bind(this)}>politics</button>
        <button onClick={function(e){
          e.preventDefault();
          this.props.getTopic(e)
        }.bind(this)}>business</button>
        <button onClick={function(e){
          e.preventDefault();
          this.props.getTopic(e)
        }.bind(this)}>economics</button>
        <button onClick={function(e){
          e.preventDefault();
          this.props.getTopic(e)
        }.bind(this)}>entertainment</button>
        <button onClick={function(e){
          e.preventDefault();
          this.props.getTopic(e)
        }.bind(this)}>beauty</button>
        <button onClick={function(e){
          e.preventDefault();
          this.props.getTopic(e)
        }.bind(this)}>travel</button>
        <button onClick={function(e){
          e.preventDefault();
          this.props.getTopic(e)
        }.bind(this)}>music</button>
        <button onClick={function(e){
          e.preventDefault();
          this.props.getTopic(e)
        }.bind(this)}> food</button>
        <button onClick={function(e){
          e.preventDefault();
          this.props.getTopic(e)
        }.bind(this)}>science</button>
        <button onClick={function(e){
          e.preventDefault();
          this.props.getTopic(e)
        }.bind(this)}>gaming</button>
        <button onClick={function(e){
          e.preventDefault();
          this.props.getTopic(e)
        }.bind(this)}>energy</button>
      
        </div>
    )
  }
}
