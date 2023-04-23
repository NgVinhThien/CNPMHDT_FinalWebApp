import React from 'react';
import Header from '../components/Header'
import '../_CSS/Home.css'
import '../_CSS/verticalCard.css'
import Stack from 'react-bootstrap/Stack'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'

export default function Home() {
    
  return (
    <div>
      <Header/>
      <div class= "main-home">
      <div class="left-home">
            <div class="noibat">
              <div class="largeTitle">Tin nổi bật</div>
              <div class="groupCard">
                <div class="vertical-card">
                    <img class="card-image" src="https://th.bing.com/th/id/OIP.iSu2RcCcdm78xbxNDJMJSgHaEo?pid=ImgDet&rs=1"/>
                    
                    <div class= "card-body">
                        <div class= "card-title">Card Title</div>
                        <div class="card-description">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</div>
                        <div class="article-info">
                            <span>Tác giả</span>
                            <span>Ngày đăng</span>
                        </div>
                    </div>
                    
                </div>
                <div class="vertical-card">
                    <img class="card-image" src="https://th.bing.com/th/id/OIP.iSu2RcCcdm78xbxNDJMJSgHaEo?pid=ImgDet&rs=1"/>
                    
                    <div class= "card-body">
                        <div class= "card-title">Card Title</div>
                        <div class="card-description">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</div>
                        <div class="article-info">
                            <span>Tác giả</span>
                            <span>Ngày đăng</span>
                        </div>
                    </div>
                    
                </div>
                <div class="vertical-card">
                    <img class="card-image" src="https://th.bing.com/th/id/OIP.iSu2RcCcdm78xbxNDJMJSgHaEo?pid=ImgDet&rs=1"/>
                    
                    <div class= "card-body">
                        <div class= "card-title">Card Title</div>
                        <div class="card-description">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</div>
                        <div class="article-info">
                            <span>Tác giả</span>
                            <span>Ngày đăng</span>
                        </div>
                    </div>
                    
                </div>
                {/* <Card style={{ width: '16rem' }}>
                      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.iSu2RcCcdm78xbxNDJMJSgHaEo?pid=ImgDet&rs=1" />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text style={{marginBottom: 0}}>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                        </Card.Text>
                        <div class="article-info">
                            <span>Tác giả</span>
                            <span>Ngày đăng</span>
                        </div>
                      </Card.Body>
                    </Card>
                <Card style={{ width: '16rem' }}>
                      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.iSu2RcCcdm78xbxNDJMJSgHaEo?pid=ImgDet&rs=1" />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                <Card style={{ width: '16rem' }}>
                      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.iSu2RcCcdm78xbxNDJMJSgHaEo?pid=ImgDet&rs=1" />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>  */}
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
