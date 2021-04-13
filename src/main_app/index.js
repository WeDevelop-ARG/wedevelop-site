import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'

import { setPageTitleSuffix } from 'utils/use_page_title'
import { NavBar, NavBarContextProvider } from './components/NavBar'

setPageTitleSuffix(' - WeDevelop')

function MainApp () {
  return (
    <React.StrictMode>
      <Router>
        <NavBarContextProvider>
          <NavBar />
          <Routes />
        </NavBarContextProvider>
      </Router>
    </React.StrictMode>
  )
}

export default MainApp
