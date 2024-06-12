import React from 'react'
import profileImg from '../assets/profile.jpg'

const About = () => {
  return (
    <section id='about' style={{ height: window.innerHeight - 225 }}>
      <div className='col-md-12'>
        <h1 className='section-title'>
          About Me
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
                  I am a passionate developer with a focus on backend development and infrastructure. My expertise lies in JavaScript frameworks like Node.js and React, alongside a strong command of C++. My approach to building software is centered around understanding customer and business needs thoroughly before diving into development, ensuring that my contributions align seamlessly with the business objectives.
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
