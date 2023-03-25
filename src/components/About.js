import React from 'react'
import profileImg from '../assets/profile.jpg'

const About = () => {
  return (
    <section id='about'>
      <div className='col-md-12'>
        <h1 style={{ color: 'black' }}>
          <span>About Me</span>
        </h1>
        <div className='row center mx-auto mb-5'>
          <div className='col-md-4 mb-5 center'>
            <div className='polaroid'>
              <span style={{ cursor: 'auto' }}>
                <img
                  height='250px'
                  src={profileImg}
                  alt='Kage profile picture'
                />
                <br />
                <br />
                <br />
              </span>
            </div>
          </div>

          <div className='col-md-8 center'>
            <div className='col-md-10'>
              <div className='card'>
                <div className='card-header'>
                  <span
                    className='iconify'
                    data-icon='emojione:red-circle'
                    data-inline='false'
                  ></span>{' '}
                  &nbsp;{' '}
                  <span
                    className='iconify'
                    data-icon='twemoji:yellow-circle'
                    data-inline='false'
                  ></span>{' '}
                  &nbsp;{' '}
                  <span
                    className='iconify'
                    data-icon='twemoji:green-circle'
                    data-inline='false'
                  ></span>
                </div>
                <div
                  className='card-body font-trebuchet text-justify ml-3 mr-3'
                  style={{
                    height: 'auto',
                    fontSize: '145%',
                    lineHeight: '200%',
                  }}
                >
                  <br />
                  <span className='wave'>Hello</span>{' '}
                  <span role='img' aria-label='wave-emoji'>👋</span>
                  <br />
                  <br />
                  I'm Kage Gamis. I work with Javascript frameworks like Node and React, as well as have proficiencies in Ruby on Rails. I have experiences building applications for large enterprises and startups, all of which are used regularly by thousands of consumers. I pride myself in building with purpose by first understanding the needs of the customer and the business, as well as determining how to contribute best to a team, before setting off to build anything. Additionally, I ensure that accessibility is at the forefront of the product evolution and an alignment is maintained between the target users and digital products in development.
                  <br />
                  <br />
                  When I'm not building digital products, you will find me making <a target='_blank' rel='noopener noreferrer' href='https://www.tiktok.com/@honeybearmead'>mead</a>, tinkering with electronics, or acquiring a new hobby.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
