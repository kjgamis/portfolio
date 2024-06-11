import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Page from './components/templates/Page';
import React from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Page>
      <App />
    </Page>,
  },
  {
    path: 'about',
    element: <Page>
      <About />
    </Page>,
  },
  {
    path: 'resume',
    element: <Page>
      <Experience />
      <Skills />
      <Projects />
    </Page>
  },
])

export default router
