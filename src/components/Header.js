import React, { useState } from 'react'
import Switch from 'react-switch'

const Header = () => {
  const [checked, setChecked] = useState(false)

  const onThemeSwitchChange = (checked) => {
    setChecked(checked)
    setTheme()
  }

  const setTheme = () => {
    var dataThemeAttribute = 'data-theme'
    var body = document.body
    var newTheme =
      body.getAttribute(dataThemeAttribute) === 'dark' ? 'light' : 'dark'
    body.setAttribute(dataThemeAttribute, newTheme)
  }

  return (
    <header id='home' style={{ height: window.innerHeight - 140, display: 'block' }}>
      <div className='row aligner' style={{ height: '100%' }}>
        <div className='col-md-12'>
          <div>
            <span className='iconify header-icon' data-icon='la:laptop-code' data-inline='false'></span>
            <br />
            <h1 className='mb-0'>
              <p>Kage Gamis</p>
            </h1>
            <div className='title-container'>
              <div className='title-styles'>Software Developer</div>
            </div>
            <Switch
              checked={checked}
              onChange={onThemeSwitchChange}
              offColor='#353239'
              onColor='#353535'
              className='react-switch mx-auto'
              width={90}
              height={40}
              uncheckedIcon={
                <span
                  className='iconify'
                  data-icon='twemoji:owl'
                  data-inline='false'
                  style={{
                    display: 'block',
                    height: '100%',
                    fontSize: 25,
                    textAlign: 'end',
                    marginLeft: '20px',
                    color: '#353239',
                  }}
                ></span>
              }
              checkedIcon={

                <span
                  className='iconify'
                  data-icon='noto-v1:sun-with-face'
                  data-inline='false'
                  style={{
                    display: 'block',
                    height: '100%',
                    fontSize: 25,
                    textAlign: 'end',
                    marginLeft: '10px',
                    color: '#353239',
                  }}
                ></span>
              }
              id='icon-switch'
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
