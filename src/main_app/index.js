import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'

import { setPageTitlePrefix } from 'utils/marketing/use_page_metadata'
import { setupGlobalDeveloperHints } from 'utils/marketing/developer_hints'
import { NavBar, NavBarContextProvider } from './components/NavBar'

setupGlobalDeveloperHints()
setPageTitlePrefix('WeDevelop - ')

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
