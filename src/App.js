import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
import Navigation from './Components/Navigation'
// import Main from './Components/Main'

export default class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      newsHtml:[]
    }
  }


 
  //  news(data){
  //   <div className="row news">
  //   <div className="col-lg-8"> 
  //   <img   alt="news"className="news-img-size No-Image" 
  //   src="img/hyun.jpg"></img>
          
  //      </div>
  //     <div className="col-lg-4">
  //        <h2>{this.getLatestNews.news.title}</h2>
  //        <p> 스트레이키즈가 오늘 컴백했다고 한다 </p>            
  //       <div>
  //         2022-03-01
  //       </div>
  //     </div>
  //     </div>
  //  }
    
    
   getLatestNews = async ()=>{
    let news = [];
         let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=business&page_size=10`)  
         console.log("url",url)
          let header = new Headers({'x-api-key':'L7DBi0iMqKfM98Mdh44oqyBRYYdkbQPgaiTE93Pj3-U'})
         let response =await fetch(url,{headers:header})
          let data = await response.json();
          news = data.articles;
          console.log("data",data)
         
         return news
  }   

   

  render(){
    return (
     
      <div className="App container">
       <Header></Header>
       <Navigation onChange={function(e){
        alert('hi')
        this.getLatestNews()
       }.bind(this)}></Navigation>
        <div className="row news">
      <div className="col-lg-8"> 
      <img   alt="news"className="news-img-size No-Image" 
      src="img/hyun.jpg"></img>
            
         </div>
        <div className="col-lg-4">
           <h2>메롱</h2>
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


