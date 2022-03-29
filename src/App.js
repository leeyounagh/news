import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
import Navigation from './Components/Navigation'
import { v4 as uuidv4 } from 'uuid';
import Main from './Components/Main';
import dompurify from "dompurify";
import Pagination from "react-js-pagination";

// import HomeButton from'./index/HomeButton';








export default class App extends Component{
  
  constructor(props){
    let url;
    
  
    super(props);
    this.state ={
      latestNews:[],
      page :1,
      totalPage:''
    
    }
  }





  
  componentDidMount() {
    this.getLatestNews();
    this.getNews();
    
    
  } //fech함수가 render 함수보다 늦게 호출되기때문에 componentDidMount()함수에 
  // 해당함수를 넣어야됨
 
    
   getNews = async ()=>{
    
      let news = [];
 
        
       
      let header = new Headers({'x-api-key':'L7DBi0iMqKfM98Mdh44oqyBRYYdkbQPgaiTE93Pj3-U'})

     let response =await fetch(this.url,{headers:header})
      let data = await response.json();
      news = data.articles
       this.page = data.page
       let totalPage = data.total_pages; //89 페이지
      
        JSON.stringify(news) //제이슨 파일을 스트링화해주는거 
      this.setState(
        {
          latestNews:news,
          totalPage:totalPage
        }
      )
      console.log("data",this.state.latestNews)
      console.log("새로운 알엘이",this.url)
      console.log("데이타",this.state.totalPage)
      
      return news
     
     
      
     }
   
    //  pageNation(){
    //   let pagenationHtml = ''
    //    let pageGroup = Math.ceil(this.page/5)
    //    let last = pageGroup*5;
    //    if(last > this.totalPage){
    //      last = this.totalPage
    //    }
    //   let first = last-4 <=0 ? 1: last -4 

    //  // 페이지와 마지막페이지를 만들어야되
    //  //  페이지 그룸이 0일경우 첫페이지 , 페이지 그룹의 마지막이 총페이지보다 클경우
    //   //  // 마지막페이지 = 총페이지 

    //      for(let i = first; i <= last; i++){
          
    //         pagenationHtml = <div><button onClick={function(e){
    //           console.log(e.target.textContent)
    //           this.movetopage(e.target.textContent)
    //         }.bind(this)} >1</button> 
    //         <button onClick={function(e){
    //           console.log(e.target.textContent)
    //           this.movetopage(e.target.textContent)
    //         }.bind(this)} >2</button>
    //         <button onClick={function(e){
    //           console.log(e.target.textContent)
    //           this.movetopage(e.target.textContent)
    //         }.bind(this)} >3</button>
    //          <button onClick={function(e){
    //           console.log(e.target.textContent)
    //           this.movetopage(e.target.textContent)
    //         }.bind(this)} >4</button>
    //            <button onClick={function(e){
    //           console.log(e.target.textContent)
    //           this.movetopage(e.target.textContent)
    //         }.bind(this)} >5</button></div>
          
         
          
          
          
    //      }
           
    //       return pagenationHtml
           
    //     }
      
    
    // return <span dangerouslySetInnerHTML={{__html: dompurify.sanitize(pagenationHtml)}}></span>
    //  }

     movetopage(_page){
       console.log(_page)
       this.setState({
         page:_page
       })
      this.url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=kR&topic=business&page_size=10&page=${this.state.page}`)  
      console.log("url",this.url)
      this.getNews()
       
     }

      getLatestNews= async ()=>{
          this.url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=kR&topic=business&page_size=10&page=${this.state.page}`)  

          console.log("url",this.url)
          this.getNews()
          
      } 

  
    
 
      
       
             

   _renderNews(){
    let _news =this.state.latestNews.map((news)=>{
    return <div key={uuidv4()} className="row news news-style" id='news-board'>
    <div key={uuidv4()} className="col-lg-8"> 
    <img  key={uuidv4()}  alt="news"className="news-img-size No-Image" 
   src={news.media ||  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU"}></img>
          
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
  
     
  

   

  render(){
  
    
    return (
    
      <div className="App container">
       
       <Header></Header>
       
       <Navigation getTopic={function async(e){
        this.url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=kR&topic=${e.target.textContent}&page_size=10&page=${this.state.page}`)
        this.getNews()
        
        console.log("토픽",this.url)
         
       }.bind(this)}></Navigation>
      
       { this._renderNews()}
       {/* <HomeButton></HomeButton> */}

       {/* <footer>
      <nav key={uuidv4()}  aria-label="Page navigation example">
      <ul className="pagination">
      <li className="page-item ">
    
    {this.pageNation()}
    </li>
    
    
   </ul>
      
    </nav>
      </footer>  */}
      
   
    
      </div>
      
      
    );
    
  }


  
}


