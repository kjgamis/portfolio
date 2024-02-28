import React, { useState } from 'react'
import ProjectDetailsModal from './ProjectDetailsModal'
import pawlertMain from '../assets/pawlert-main.png'
import pawlertLogo from '../assets/pawlert-logo.png'
import witalkMain from '../assets/witalk-main.png'
import witalkLogo from '../assets/witalk-logo.png'
import attnLogo from '../assets/attn-logo.png'
import attnMain from '../assets/attn-main.gif'

const resumeProjects = [
  {
    title: 'Pawlert',
    images: [pawlertLogo, pawlertMain],
    url: 'https://github.com/kjgamis/pawlert',
    description: 'A smart tracking system that help dog owners spot potential risk of heat stroke based on real-time weather data and pet health data collected by a smart collar.',
    technologies: [
      {
        'name': 'Cloudflare',
        'class': 'devicon-cloudflare-plain',
      },
      {
        'name': 'HTML 5',
        'class': 'devicon-html5-plain',
      },
      {
        'name': 'CSS 3',
        'class': 'devicon-css3-plain',
      }
    ]
  },
  {
    title: 'WiTalk',
    images: [witalkLogo, witalkMain],
    url: 'https://github.com/kjgamis/witalk',
    description: 'Connecting newcomers to interpreters',
    technologies: [
      {
        'name': 'Node',
        'class': 'devicon-nodejs-plain',
      },
      {
        'name': 'MongoDB',
        'class': 'devicon-mongodb-plain',
      },
      {
        'name': 'Google Cloud',
        'class': 'devicon-googlecloud-plain',
      },
      {
        'name': 'HTML 5',
        'class': 'devicon-html5-plain',
      },
      {
        'name': 'CSS 3',
        'class': 'devicon-css3-plain',
      }
    ]
  },
  {
    title: 'Attn',
    images: [attnLogo, attnMain],
    url: 'https://github.com/kjgamis/attn',
    description: 'Send a message with a click of a button. Create a message that can be sent quickly without having to type the same message again.',
    technologies: [
      {
        'name': 'Node (Express)',
        'class': 'devicon-nodejs-plain',
      },
      {
        'name': 'MongoDB',
        'class': 'devicon-mongodb-plain',
      },
      {
        'name': 'Google Cloud',
        'class': 'devicon-googlecloud-plain',
      },
      {
        'name': 'React Native',
        'class': 'devicon-react-plain',
      }
    ]
  }
]

const Projects = () => {
  const [detailsModalShow, setDetailsModalShow] = useState(false)
  const [data, setData] = useState({})
  let detailsModalClose = () => setDetailsModalShow(false)
  if (resumeProjects) {
    // var sectionName = resumeBasicInfo.section_name.projects;
    var projects = resumeProjects.map(function (projects) {
      return (
        <div
          className='col-sm-12 col-md-6 col-lg-4'
          key={projects.title}
          style={{ cursor: 'pointer' }}
        >
          <span className='portfolio-item d-block'>
            {/* <div className='foto' onClick={() => detailsModalShow(projects)}> */}
            <div className='foto' onClick={() => {
              setDetailsModalShow(true)
              setData(projects)
            }}>
              <div>
                <img
                  src={projects.images[0]}
                  alt='projectImages'
                  height='230'
                  style={{ marginBottom: 0, paddingBottom: 0, position: 'relative' }}
                />
                <br />
                <p className='project-title-settings mt-3'>
                  {projects.title}
                </p>
              </div>
            </div>
          </span>
        </div>
      )
    })
  }

  return (
    <section id='portfolio'>
      <div className='col-md-12'>
        <h1 className='section-title' style={{ color: 'black' }}>
          <span>Projects</span>
        </h1>
        <div className='col-md-10 mx-auto'>
          <div className='row mx-auto'>{projects}</div>
        </div>
        <ProjectDetailsModal
          show={detailsModalShow}
          onHide={detailsModalClose}
          data={data}
        />
      </div>
    </section>
  )
}

export default Projects
