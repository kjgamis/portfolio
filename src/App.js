import React from 'react'
import './App.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Experience from './components/Experience'
// import Projects from './components/Projects'
import Skills from './components/Skills'

import ReactGA from 'react-ga'
ReactGA.initialize('UA-123130196-1')
ReactGA.pageview(window.location.pathname)

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Experience />
      <Skills />
      {/* <Projects
        resumeProjects={resumeData.projects}
        resumeBasicInfo={resumeData.basic_info}
      /> */}
      <Footer />
    </div>
  )
}

export default App
