import React from 'react'
import './App.scss'
import Home from './components/Home'
import Photos from './components/Gallery'

import ReactGA from 'react-ga'
ReactGA.initialize('UA-123130196-1')
ReactGA.pageview(window.location.pathname)

const App = () => {
  return (
    <Home />
    // <Photos />
  )
}

export default App
