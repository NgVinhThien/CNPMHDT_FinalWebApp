import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import '../_CSS/dropdown.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Landing = () => {
  const [categories, setCategory]= useState([]);
  useEffect(()=>{
    axios.get(`http://localhost:5000/mainCategories`)
    .then(response=> setCategory(response.data.data))
    .catch(err=>{
      console.log(err);
    }, []);});
  const [subCategories, setSubCategory]= useState([]);
  useEffect(()=>{
    axios.get(`http://localhost:5000/subCategories`)
    .then(response=>setSubCategory(response.data.data))
    .catch(err=>{console.log(err)}, [])
  })
  const [tags, setTag]= useState([]);
  useEffect(()=>{
    axios.get(`http://localhost:5000/tags`)
    .then(response=>setTag(response.data.data))
    .catch(err=>{console.log(err)}, []);
  })
  return (

    <div style={{width: '100%'}}>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.7f34a70a5bee79488309934920d316cb?rik=IRJI6pSFo6OI%2fQ&riu=http%3a%2f%2fallpicts.in%2fwp-content%2fuploads%2f2018%2f03%2fNatural-Images-HD-1080p-Download-with-Keyhole-Arch-at-Pfeiffer-Beach.jpg&ehk=JPI0MFI04N62Xtd7MT1P2sw4vJgwODLsp1EcpgvuGFo%3d&risl=&pid=ImgRaw&r=0"
          alt="First slide"
          style={{height: 250}}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://couchclarity.com/wp-content/uploads/2015/10/sample-slide5.jpg"
          alt="Second slide"
          style={{height: 250}}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/OIP.wwxK07x0Umfnh0l-nrjxjgHaDg?pid=ImgDet&rs=1"
          alt="Third slide"
          style={{height: 250}}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll>
            
            <NavDropdown title="Chuyên mục" id="navbarScrollingDropdown">
         
              <Container style={{position: 'absolute', left: '0px',  backgroundColor: 'white', width: '1000px'}}>
                  <Row style={{display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap'}}>
                  {categories.map(category=>(
                  <Col lg='3' style={{color: "#2FA1B3"}} key= {category.id} >{category.name}
                    {subCategories.filter(subCat=> subCat.parent_id === category.id).map(subCat=>(
                        <Dropdown.Item href="#action3" key= {subCat.id}>{subCat.name}</Dropdown.Item>
                    ))}
                  </Col>
                ))}
                 </Row>
              </Container>
            </NavDropdown>
           
            <NavDropdown title="Tag">
            {tags.map(tag=>(
              <Dropdown.Item key={tag.id}>#{tag.value}</Dropdown.Item>
            ))}
              
            </NavDropdown>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>   
    
    </div>
  );
}

export default Landing