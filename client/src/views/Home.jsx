import React, { useEffect, useState } from 'react';
import Header from '../components/Header'
import '../_CSS/Home.css'
import '../_CSS/verticalCard.css'
import '../_CSS/horizontalCard.css'
// import Stack from 'react-bootstrap/Stack'
// import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import axios from 'axios'

export default function Home() {

    const [data, setData]= useState([]);
    useEffect(()=>{
      axios.get("http://localhost:5000/getHotArticle")
      .then(response=>setData(response.data))
      .catch(error=>{
        console.log(error);
      })
    }, []);
  
    
  return (
    <div>
      <Header/>
      <div class= "main-home">
      <div class="left-home">
            <div class="noibat">
              <div class="largeTitle">Tin nổi bật</div>
              <div class="groupCard">
                {data.map(item=>(
                  <div class="vertical-card">
                  <img class="card-image" src="https://th.bing.com/th/id/OIP.iSu2RcCcdm78xbxNDJMJSgHaEo?pid=ImgDet&rs=1"/>
                  
                  <div class= "card-body">
                      <div class= "card-title">{item.title}</div>
                      <div class="card-description">{item.abstract}</div>
                      <div class="article-info">
                          <span>Tác giả</span>
                          <span>{item.publish_date}</span>
                      </div>
                  </div>  
              </div>))}
              </div>
            </div>
            <div class="tinmoi">
              <div class="largeTitle">Tin mới</div>
              {data.map(item=>(
                 <div class= "horizontal-card">
                 <img class="horizontal-card-image" src="https://th.bing.com/th/id/OIP.iSu2RcCcdm78xbxNDJMJSgHaEo?pid=ImgDet&rs=1"></img>
                 <div class="horizontal-card-body">
                 <div class= "card-title">{item.title}</div>
                 <div class="card-description">{item.abstract}</div>
                       <div class="article-info">
                           <span>Tác giả</span>
                           <span>{item.publish_date}</span>
                       </div>
                 </div>
               </div>
              ))}
             
              
            </div>
            
        </div>
        <div class= "right-home">
          <Image class="image-of-right-home" style={{width: '100%', margin: 0, padding: 0}} src="https://th.bing.com/th/id/OIP.iSu2RcCcdm78xbxNDJMJSgHaEo?pid=ImgDet&rs=1"/>
          <div class="smallTitle">Tin nổi bật</div>
         
        </div>
      </div>
    </div>
    
    
  )
}
