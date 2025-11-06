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
      'company': 'Tereo',
      'url': 'https://tereo.ai',
      'title': 'Full Stack Developer',
      'years': 'April 2025 - Present',
      'location': 'Remote',
      'languages': [
        'TypeScript'
      ],
      'technologies': [
        'Supabase',
        'Deno',
        'React',
        'Amazon Web Services',
        'Docker',
      ]
    },
    {
      'company': 'University Health Network - Cancer Digital Intelligence',
      'url': 'https://pmcdi.ca/cobe/',
      'title': 'Full Stack Developer',
      'years': 'May 2024 - August 2024',
      'location': 'Toronto, ON',
      'languages': [
        'TypeScript',
      ],
      'technologies': [
        'NestJS',
        'React',
        'MongoDB',
        'Rest API',
      ]
    },
    {
      'company': '#paid',
      'url': 'https://hashtagpaid.com',
      'title': 'Full Stack Developer',
      'years': 'September 2021 - January 2023',
      'location': 'Remote',
      'languages': [
        'JavaScript',
        'Ruby'
      ],
      'technologies': [
        'React',
        'Node',
        'Ruby on Rails',
        'REST API',
        'Styled Components',
        'Jest',
        'Fastify'
      ]
    },
    {
      'company': 'TELUS Digital',
      'url': 'https://telus.com',
      'title': 'Front-End Developer',
      'years': 'January 2020 - August 2021',
      'location': 'Toronto, ON',
      'languages': [
        'JavaScript'
      ],
      'technologies': [
        'React',
        'Redux',
        'Node',
        'Express'
      ]
    },
    {
      'company': 'TELUS Digital',
      'url': 'https://telus.com',
      'title': 'Digital Analytics Developer',
      'years': 'September 2018 - December 2019',
      'location': 'Toronto, ON',
      'languages': [
        'JavaScript'
      ],
      'technologies': [
        'Adobe Launch',
        'Adobe Analytics'
      ]
    },
  ]
}

const Experience = () => {
    var work = resumeData.experience.map(function (work, i) {
      const technologies = work.technologies
      const languages = work.languages

      var langs = languages.map((language, i) => {
        return (
          <Badge pill className='main-badge mr-2 mb-2' key={i}>
            {language}
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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
            <h3
              className='vertical-timeline-element-title'
              style={{ textAlign: 'left', fontSize: '20px' }}
            >
              {work.title}
            </h3>
            <span style={{ fontSize: '12px', color: '#333' }}>{work.location}</span>
          </div>

          <h4
            className='vertical-timeline-element-subtitle'
            style={{ textAlign: 'left' }}
          >
            <a href={work.url} target='_blank' rel='noopener noreferrer'>
              {work.company}
            </a>
          </h4>

          <div style={{ textAlign: 'left', marginTop: '15px' }}>{langs}</div>
          <div style={{ textAlign: 'left', marginTop: '5px' }}>{tech}</div>
        </VerticalTimelineElement>
      )
    })

  return (
    <section id='experience'>
      <div className='col-md-12 m-auto'>
        <div className='col-md-12'>
          <h1 className='section-title'>
            Experience
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
