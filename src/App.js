import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
import Navigation from './Components/Navigation'
import { ClipLoader } from "react-spinners";
import Main from './Components/Main';
import {Fragment} from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';


export default class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      latestnews:[],
      titleKey:1,
      mediakey:2,
      summarykey:3,
      mediakey:4, 
      rightskey:5,
      datekey:6
    }
  }


 
    
   getLatestNews = async ()=>{
    let news = [];
         let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=business&page_size=100`)  
         console.log("url",url)
          let header = new Headers({'x-api-key':'L7DBi0iMqKfM98Mdh44oqyBRYYdkbQPgaiTE93Pj3-U'})
         let response =await fetch(url,{headers:header})
          let data = await response.json();
          news = data.articles;
          
          this.setState(
            {
              latestnews:news
            }
          )
          console.log("data",news)
          return news
  
          }
        
          // getKey(){
           
          //   this.state.latestnews.map((news)=>{
          //     let i=0;
          //     while(i<news.length){
          //      this.setState(
          //        {
          //          ...latestnews,
          //         title:

          //        }
          //      )
          //     }
          //     i =i+1
          //   }
          //   )
           

          // }
          randomIDGenerator() {
            // Math.random should be unique because of its seeding algorithm.
            // Convert it to base 36 (numbers + letters), and grab the first 9 characters
            // after the decimal.
            return "_" + Math.random().toString(36).substr(2, 9);
          }
            

   _renderNews(){
     let _news =this.state.latestnews.map((news)=>{
       return <Main  key={news._id} title={news.title} summary={news.summary} 
       media={news.media} rights={news.rights} date={news.published_date}
         
       
       >
          
       
       </Main>
      
    //  return <div className="row news" id='news-board'>
    //   <div className="col-lg-8"> 
    //   <img  key={this.state.mediakey} alt="news"className="news-img-size No-Image" 
    //   src={news.media}></img>
            
    //      </div>
    //     <div className="col-lg-4">
    //        <h2 key={this.state.titleKey} >{news.title}</h2>
    //        <p  key={this.state.summarykey}>  {news.summary} </p>            
    //       <div key={this.state.datekey}>
    //         {news.date} {news.rights}
    //       </div>
    //       <div key={this.state.rightskey}>
    //           저자:{news.rights}
    //       </div>
    //     </div>
    //     </div>
   })
     return _news
   }

     
  
// //각각의 값에 키값만 부여하면되는데..
   

  render(){
    let {news} = this.state.latestnews
    console.log("되니?",news)
    return (
    
      <div className="App container">
       <Header></Header>
       <Navigation 
          onChange={function(e){
       
        this.getLatestNews()
        
       }.bind(this)}></Navigation>
       
       
      {this._renderNews()}
    
      </div>
      
      
    );
  }


  
}


