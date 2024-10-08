import React from 'react'

const Skills = () => {
  const portfolioData = {
    icons: [
      {
        'name': 'C++',
        'class': 'devicon-cplusplus-plain',
        'level': '95'
      },
      {
        'name': 'C',
        'class': 'devicon-c-plain',
        'level': '95'
      },
      {
        'name': 'JavaScript',
        'class': 'devicon-javascript-plain',
        'level': '70'
      },
      {
        'name': 'TypeScript',
        'class': 'devicon-typescript-plain',
        'level': '70'
      },
      {
        'name': 'React',
        'class': 'devicon-react-original',
        'level': '70'
      },
      {
        'name': 'Node',
        'class': 'devicon-nodejs-plain',
        'level': '70'
      },
      {
        'name': 'Express',
        'class': 'devicon-express-original',
        'level': '70'
      },
      {
        'name': 'NestJS',
        'class': 'devicon-nestjs-plain',
        'level': '70'
      },
      {
        'name': 'GitHub',
        'class': 'devicon-github-original',
        'level': '75'
      },
      {
        'name': 'MongoDB',
        'class': 'devicon-mongodb-plain',
        'level': '75'
      },
      {
        'name': 'PostgreSQL',
        'class': 'devicon-postgresql-plain',
        'level': '60'
      },
      {
        'name': 'Cloudflare',
        'class': 'devicon-cloudflare-plain',
        'level': '60'
      },
      {
        'name': 'Google Cloud',
        'class': 'devicon-googlecloud-plain',
        'level': '60'
      },
      {
        'name': 'HTML 5',
        'class': 'devicon-html5-plain',
        'level': '95'
      },
      {
        'name': 'CSS 3',
        'class': 'devicon-css3-plain',
        'level': '95'
      }
    ]
  }
  const skills = portfolioData.icons.map((skill, i) => {
    return (
      <li className='list-inline-item mx-3' key={i}>
        <span>
          <div className='text-center skills-tile'>
            <i className={skill.class} style={{ fontSize: '220%' }}>
              <p
                className='text-center font-trebuchet'
                style={{ fontSize: '30%', marginTop: '4px' }}
              >
                {skill.name}
              </p>
            </i>
          </div>
        </span>
      </li>
    )
  })

  return (
    <section id='skills'>
      <div className='col-md-12'>
        <div className='col-md-12'>
          <h1 className='section-title'>
            <span className='text-white'>Skills</span>
          </h1>
        </div>
        <div className='col-md-12 text-center'>
          <ul className='list-inline mx-auto skill-icon'>{skills}</ul>
        </div>
      </div>
    </section>
  )
}

export default Skills
