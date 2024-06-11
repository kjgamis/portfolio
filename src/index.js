import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Link
} from 'react-router-dom'
import router from './router'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

/* GLOBAL VARIABLES */

window.$primaryLanguage = 'en'
window.$primaryLanguageIconId = 'primary-lang-icon'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
