import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
import Navigation from './Components/Navigation'

export default class App extends Component{
 
  render(){
    return (
     
      <div className="App container">
       <Header></Header>
      <Navigation></Navigation>
      
        <div className="row news">
        <div className="col-lg-8"> 
        <img   alt="news"className="news-img-size No-Image" 
        src="img/hyun.jpg"></img>
                
        </div>
            <div className="col-lg-4">
               <h2>스트레이키즈 컴백</h2>
               <p> 스트레이키즈가 오늘 컴백했다고 한다 </p>            
              <div>
                2022-03-01
              </div>
            </div>
        </div>
        
    </div>
     
    );
  }


  
}


