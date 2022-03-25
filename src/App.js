import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
import Navigation from './Components/Navigation'
import Main from './Components/Main';

import { v4 as uuidv4 } from 'uuid';




export default class App extends Component{
  
  constructor(props){
    let url;
    super(props);
    this.state ={
      latestnews:[],
      
    
    }
  }

  componentDidMount() {
    this.getLatestNews();
  } //fech함수가 render 함수보다 늦게 호출되기때문에 componentDidMount()함수에 
  // 해당함수를 넣어야됨
 
    
   getNews = async ()=>{
    let news = [];
        //  let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=kR&topic=business&page_size=100`)  
        //  console.log("url",url)
          let header = new Headers({'x-api-key':'L7DBi0iMqKfM98Mdh44oqyBRYYdkbQPgaiTE93Pj3-U'})
         let response =await fetch(this.url,{headers:header})
          let data = await response.json();
          news = data.articles
          JSON.stringify(news) //제이슨 파일을 스트링화해주는거 
          this.setState(
            {
              latestnews:news
            }
          )
          console.log("data",this.state.latestnews)
          return news
     
          }

      getLatestNews= async ()=>{
          this.url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=kR&topic=business&page_size=100`)  
          console.log("url",this.url)
          this.getNews()
          
      } 


   
    
 
      
       
             

   _renderNews(){
    let _news =this.state.latestnews.map((news)=>{
    return <div key={uuidv4()} className="row news news-style" id='news-board'>
    <div key={uuidv4()} className="col-lg-8"> 
    <img  key={uuidv4()}  alt="news"className="news-img-size No-Image" 
   src={news.media}></img>
          
       </div>
      <div key={uuidv4()} className="col-lg-4">
         <h2 key={uuidv4()}>{news.title}</h2>
         <p key={uuidv4()}> {news.summary} </p>            
        <div  key={uuidv4()}>
          {news.date} 
        </div>
        <div key={uuidv4()} >
            저자:{news.rights}
        </div>
      </div>
      </div>
     
      
   
    
   })
   return _news
   }

     
  
// //각각의 값에 키값만 부여하면되는데..
   

  render(){
    console.log("나와이새꺄", this.state.latestnews)
    
    return (
    
      <div className="App container">
       
       <Header></Header>
       <Navigation></Navigation>
       
      
       { this._renderNews()}
      
      
    
    
      </div>
      
      
    );
    
  }


  
}


