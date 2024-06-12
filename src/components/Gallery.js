import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import nightlight1 from '../assets/nightlight-1.jpg';
import nightlight2 from '../assets/nightlight-2.jpg';
import nightlight3 from '../assets/nightlight-3.jpg';
import nightlight4 from '../assets/nightlight-4.jpg';
import nightlight5 from '../assets/nightlight-5.jpg';
import nightlight6 from '../assets/nightlight-6.jpg';
import nightlight7 from '../assets/nightlight-7.jpg';
import nightlight8 from '../assets/nightlight-8.jpg';
import nightlight9 from '../assets/nightlight-9.jpg';
import nightlight10 from '../assets/nightlight-10.jpg';

import francine1 from '../assets/francine-1.jpg';
import francine2 from '../assets/francine-2.jpg';
import francine3 from '../assets/francine-3.jpg';
import francine4 from '../assets/francine-4.jpg';
import francine5 from '../assets/francine-5.jpg';

import pup1 from '../assets/pup-1.jpg';

const photosData = [
  {
    src: nightlight9,
    alt: 'nightlight-9'
  },
  {
    src: nightlight1,
    alt: 'nightlight-1'
  },
  {
    src: nightlight2,
    alt: 'nightlight-2'
  },
  // {
  //   src: nightlight3,
  //   alt: 'nightlight-3'
  // },
  // {
  //   src: nightlight4,
  //   alt: 'nightlight-4'
  // },
  // {
  //   src: nightlight5,
  //   alt: 'nightlight-5'
  // },
  {
    src: nightlight6,
    alt: 'nightlight-6'
  },
  {
    src: nightlight7,
    alt: 'nightlight-7'
  },
  // {
  //   src: nightlight8,
  //   alt: 'nightlight-8'
  // },
  {
    src: nightlight10,
    alt: 'nightlight-10'
  },
  {
    src: francine1,
    alt: 'francine-1'
  },
  {
    src: francine2,
    alt: 'francine-2'
  },
  {
    src: francine3,
    alt: 'francine-3'
  },
  {
    src: francine4,
    alt: 'francine-4'
  },
  {
    src: francine5,
    alt: 'francine-5'
  },
  {
    src: pup1,
    alt: 'pup-1'
  }
]

const Gallery = () => {
  var photos = photosData.map((photo, index) => {
    return (
      <Col sm={12} md={6} lg={3} key={index} className='align-content-center'>
        <Image
          className='photo'
          src={photo.src}
          alt={photo.alt}
          thumbnail
        />
      </Col>
    )
  })

  return (
    <section id='gallery'>
      <div className='col-md-12'>
        <h1 className='section-title'>
          Photo Gallery
        </h1>
      </div>
      <Container fluid={true}>
        <Row>
          {photos}
        </Row>
      </Container>
    </section>
  )
}

export default Gallery
