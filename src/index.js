import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'

/* GLOBAL VARIABLES */

window.$primaryLanguage = 'en'
window.$primaryLanguageIconId = 'primary-lang-icon'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
