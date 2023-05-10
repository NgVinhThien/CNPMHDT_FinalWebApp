import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {  useParams } from 'react-router-dom';
import {
    MDBCard,
    MDBContainer,
    MDBCol,
    MDBIcon,
    MDBRipple,
    MDBRow,
    MDBBtn,
    MDBCardBody,
    MDBTextArea,
  } from "mdb-react-ui-kit";


export default function ShowPost() {
  let { articleId } = useParams();

  const [data, setArtData]= useState([]);
  useEffect(()=>{
    axios.get(`http://localhost:5000/getDetails/${articleId}`)
    .then(response=>setArtData(response.data.data))
    .catch(err=>{
      console.log(err);
    })
  }, []);
  console.log(data)

  return (
    <div>
      {data.map(item=>(
      <div style={{width: "80%"}} key={item.id}>   
      <MDBCard className="px-3 pt-3" style={{ maxWidth: "100%", marginTop: 0 }}>
      <div>
        <MDBRipple
          className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
          rippleTag="div"
          rippleColor="light"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
            className="img-fluid"
          />
          <a href="#!">
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </a>
        </MDBRipple>
        <MDBRow className="mb-3">
          <MDBCol col="6">
            <a href="" className="text-info">
              <MDBIcon fas icon="plane" className="me-1" />
              Travels
            </a>
          </MDBCol>
          <MDBCol col="6" className="text-end">
            <u> {item.publish_date}</u>
          </MDBCol>
        </MDBRow>
        <a href="#!" className="text-dark">
          <h1>{item.title}</h1>
          <p dangerouslySetInnerHTML={{__html: item.content}}></p>
        </a>
      </div>
    </MDBCard>
    <MDBCard style={{ maxWidth: "100%" }}>
      <MDBCardBody>
        <div className="d-flex justify-content-between mb-3">
          <div>
            <a href="#!">
              <MDBIcon
                fas
                icon="thumbs-up"
                color="primary"
                className="me-1"
              />
              <MDBIcon fas icon="heart" color="danger" className="me-1" />
              <span>124</span>
            </a>
          </div>
          <div>
            <a href="#!" className="text-muted">
              8 comments
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-between text-center border-top border-bottom mb-4">
          <MDBBtn size="lg" rippleColor="dark" color="link">
            <MDBIcon fas icon="thumbs-up" className="me-2" /> Like
          </MDBBtn>
          <MDBBtn size="lg" rippleColor="dark" color="link">
            <MDBIcon fas icon="comment-alt" className="me-2" /> Comments
          </MDBBtn>
          <MDBBtn size="lg" rippleColor="dark" color="link">
            <MDBIcon fas icon="share" className="me-2" /> Share
          </MDBBtn>
        </div>
        <div className="d-flex mb-3">
          <a href="#!">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/18.webp"
              className="border rounded-circle me-2"
              alt="Avatar"
              style={{ height: "40px" }}
            />
          </a>
          <MDBTextArea
            label="Message"
            id="textAreaExample"
            rows={2}
            wrapperClass="w-100"
          />
        </div>
        <div className="d-flex mb-3">
          <a href="#!">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
              className="border rounded-circle me-2"
              alt="Avatar"
              style={{ height: "40px" }}
            />
          </a>
          <div>
            <div className="bg-light rounded-3 px-3 py-1">
              <a href="#!" className="text-dark mb-0">
                <strong>Malcolm Dosh</strong>
              </a>
              <a href="#!" className="text-muted d-block">
                <small>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Natus, aspernatur!
                </small>
              </a>
            </div>
            <a href="#!" className="text-muted small ms-3 me-2">
              <strong>Like</strong>
            </a>
            <a href="#!" className="text-muted small me-2">
              <strong>Reply</strong>
            </a>
          </div>
        </div>
        <div className="d-flex mb-3">
          <a href="#!">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp"
              className="border rounded-circle me-2"
              alt="Avatar"
              style={{ height: "40px" }}
            />
          </a>
          <div>
            <div className="bg-light rounded-3 px-3 py-1">
              <a href="#!" className="text-dark mb-0">
                <strong>Rhia Wallis</strong>
              </a>
              <a href="#!" className="text-muted d-block">
                <small>
                  Et tempora ad natus autem enim a distinctio quaerat
                  asperiores necessitatibus commodi dolorum nam perferendis
                  labore delectus, aliquid placeat quia nisi magnam.
                </small>
              </a>
            </div>
            <a href="#!" className="text-muted small ms-3 me-2">
              <strong>Like</strong>
            </a>
            <a href="#!" className="text-muted small me-2">
              <strong>Reply</strong>
            </a>
          </div>
        </div>
        <div className="d-flex mb-3">
          <a href="#!">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/6.webp"
              className="border rounded-circle me-2"
              alt="Avatar"
              style={{ height: "40px" }}
            />
          </a>
          <div>
            <div className="bg-light rounded-3 px-3 py-1">
              <a href="#!" className="text-dark mb-0">
                <strong>Marcie Mcgee</strong>
              </a>
              <a href="#!" className="text-muted d-block">
                <small>
                  Officia asperiores autem sit rerum architecto a deserunt
                  doloribus obcaecati, velit ab at, ad delectus sapiente!
                  Voluptatibus quaerat suscipit in nostrum necessitatibus
                  illum nemo quo beatae obcaecati quidem optio fugit ipsam
                  distinctio, illo repellendus porro sequi alias perferendis
                  ea soluta maiores nisi eligendi? Mollitia debitis quam ex,
                  voluptates cupiditate magnam fugiat.
                </small>
              </a>
            </div>
            <a href="#!" className="text-muted small ms-3 me-2">
              <strong>Like</strong>
            </a>
            <a href="#!" className="text-muted small me-2">
              <strong>Reply</strong>
            </a>
          </div>
        </div>
        <div className="d-flex mb-3">
          <a href="#!">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/10.webp"
              className="border rounded-circle me-2"
              alt="Avatar"
              style={{ height: "40px" }}
            />
          </a>
          <div>
            <div className="bg-light rounded-3 px-3 py-1">
              <a href="#!" className="text-dark mb-0">
                <strong>Hollie James</strong>
              </a>
              <a href="#!" className="text-muted d-block">
                <small>
                  Voluptatibus quaerat suscipit in nostrum necessitatibus
                </small>
              </a>
            </div>
            <a href="#!" className="text-muted small ms-3 me-2">
              <strong>Like</strong>
            </a>
            <a href="#!" className="text-muted small me-2">
              <strong>Reply</strong>
            </a>
          </div>
        </div>
      </MDBCardBody>
    </MDBCard>
    </div>
    ))}
    </div>
    

  )
}
