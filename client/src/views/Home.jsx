import React, { useEffect, useState } from 'react';
import Header from '../components/Header'
import '../_CSS/Home.css'
import '../_CSS/verticalCard.css'
import Stack from 'react-bootstrap/Stack'
import Card from 'react-bootstrap/Card';
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
            <div class="largeTitle">Tin mới</div>
            {/* <div class= "groupCard">
              <Stack direction="horizontal" gap={2} style={{height: '110px', marginTop: '10px'}}>
                    <Card.Img src="https://th.bing.com/th/id/OIP.iSu2RcCcdm78xbxNDJMJSgHaEo?pid=ImgDet&rs=1" style={{ width: '20%', height: '100%' } } />
                    <Card.Body style={{ width: '100%', height: '100%' } }>
                      <Card.Title >Card Title</Card.Title>
                      <Card.Text style={{margin: 0, padding:0}}>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Card.Text style={{margin: 0, padding:0}}>Tác giả: </Card.Text>
                      <Card.Text style={{margin: 0, padding:0}}>Ngày đăng: </Card.Text>
                    </Card.Body>
                  </Stack>
              <Stack direction="horizontal" gap={2} style={{height: '110px', marginTop: '10px'}}>
                    <Card.Img src="https://th.bing.com/th/id/OIP.iSu2RcCcdm78xbxNDJMJSgHaEo?pid=ImgDet&rs=1" style={{ width: '20%', height: '100%' } } />
                    <Card.Body style={{ width: '100%', height: '100%' } }>
                      <Card.Title >Card Title</Card.Title>
                      <Card.Text style={{margin: 0, padding:0}}>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Card.Text style={{margin: 0, padding:0}}>Tác giả: </Card.Text>
                      <Card.Text style={{margin: 0, padding:0}}>Ngày đăng: </Card.Text>
                    </Card.Body>
                  </Stack>
              <Stack direction="horizontal" gap={2} style={{height: '110px', marginTop: '10px'}}>
                    <Card.Img src="https://th.bing.com/th/id/OIP.iSu2RcCcdm78xbxNDJMJSgHaEo?pid=ImgDet&rs=1" style={{ width: '20%', height: '100%' } } />
                    <Card.Body style={{ width: '100%', height: '100%' } }>
                      <Card.Title >Card Title</Card.Title>
                      <Card.Text style={{margin: 0, padding:0}}>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Card.Text style={{margin: 0, padding:0}}>Tác giả: </Card.Text>
                      <Card.Text style={{margin: 0, padding:0}}>Ngày đăng: </Card.Text>
                    </Card.Body>
                  </Stack>
              <Stack direction="horizontal" gap={2} style={{height: '110px', marginTop: '10px'}}>
                    <Card.Img src="https://th.bing.com/th/id/OIP.iSu2RcCcdm78xbxNDJMJSgHaEo?pid=ImgDet&rs=1" style={{ width: '20%', height: '100%' } } />
                    <Card.Body style={{ width: '100%', height: '100%' } }>
                      <Card.Title >Card Title</Card.Title>
                      <Card.Text style={{margin: 0, padding:0}}>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Card.Text style={{margin: 0, padding:0}}>Tác giả: </Card.Text>
                      <Card.Text style={{margin: 0, padding:0}}>Ngày đăng: </Card.Text>
                    </Card.Body>
                  </Stack>
            </div> */}
        </div>
        <div class= "right-home">
          <Image class="image-of-right-home" style={{width: '100%', margin: 0, padding: 0}} src="https://th.bing.com/th/id/OIP.iSu2RcCcdm78xbxNDJMJSgHaEo?pid=ImgDet&rs=1"/>
          <div class="smallTitle">Tin nổi bật</div>
         
        </div>
      </div>
    </div>
    
    
  )
}
