import React, { Component } from 'react'
import PropTypes from 'prop-types'; //에러메세지를 띄우기위한수단
import LinesEllipsis from 'react-lines-ellipsis'; //글씨를 사이즈에 맞게 유연하게 해주는거 

export default class Main extends Component {
  render() {
    return (
       
            <div className="row news" id='news-board'>
            <div className="col-lg-8"> 
            <img   alt="news"className="news-img-size No-Image" 
            src={this.props.media}></img>
                  
               </div>
              <div className="col-lg-4">
                 <h2>{this.props.title}</h2>
                 <p> {this.props.summary} </p>            
                <div>
                  {this.props.date} {this.props.rights}
                </div>
                <div>
                    저자:{this.props.rights}
                </div>
              </div>
              </div>
        
       
    )
  }
}
