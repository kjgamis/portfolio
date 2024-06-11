import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import Badge from 'react-bootstrap/Badge'

const resumeData = {
  'experience': [
    {
      'company': '#paid',
      'title': 'Front-end Developer',
      'years': 'September 2021 - January 2023',
      'mainTech': [
        'React',
        'Node',
        'Ruby on Rails'
      ],
      'technologies': [
        'REST API',
        'JavaScript',
        'Styled Components',
        'Jest',
        'Fastify'
      ]
    },
    {
      'company': 'TELUS Digital',
      'title': 'Front-End Developer',
      'years': 'January 2020 - August 2021',
      'mainTech': [
        'React',
        'Redux',
        'Node'
      ],
      'technologies': [
        'JavaScript',
        'Express'
      ]
    },
    {
      'company': 'TELUS Digital',
      'title': 'Digital Analytics Developer',
      'years': 'September 2018 - December 2019',
      'mainTech': [
        'Adobe Launch',
        'Adobe Analytics'
      ],
      'technologies': [
        'JavaScript'
      ]
    }
  ]
}

const Experience = () => {
    var work = resumeData.experience.map(function (work, i) {
      const technologies = work.technologies
      const mainTechnologies = work.mainTech

      var mainTech = mainTechnologies.map((technology, i) => {
        return (
          <Badge pill className='main-badge mr-2 mb-2' key={i}>
            {technology}
          </Badge>
        )
      })
      var tech = technologies.map((technology, i) => {
        return (
          <Badge pill className='experience-badge mr-2 mb-2' key={i}>
            {technology}
          </Badge>
        )
      })
      return (
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date={work.years}
          iconStyle={{
            background: '#333',
            color: '#fff',
            textAlign: 'center',
          }}
          icon={<i className='fab fa-js experience-icon'></i>}
          key={i}
        >
          <div style={{ textAlign: 'left', marginBottom: '4px' }}>
            {mainTech}
          </div>

          <h3
            className='vertical-timeline-element-title'
            style={{ textAlign: 'left' }}
          >
            {work.title}
          </h3>
          <h4
            className='vertical-timeline-element-subtitle'
            style={{ textAlign: 'left' }}
          >
            {work.company}
          </h4>
          <div style={{ textAlign: 'left', marginTop: '15px' }}>{tech}</div>
        </VerticalTimelineElement>
      )
    })

  return (
    <section id='experience' className='pb-5'>
      <div className='col-md-12 mx-auto'>
        <div className='col-md-12'>
          <h1 className='section-title' style={{ color: 'black' }}>
            <span className='text-black' style={{ textAlign: 'center' }}>
              Experience
            </span>
          </h1>
        </div>
      </div>
      <div className='col-md-8 mx-auto'>
        <VerticalTimeline>
          {work}
          <VerticalTimelineElement
            iconStyle={{
              background: '#333',
              color: '#fff',
              textAlign: 'center',
            }}
            icon={
              <i className='fas fa-hourglass-start mx-auto experience-icon'></i>
            }
          />
        </VerticalTimeline>
      </div>
    </section>
  )
}

export default Experience
