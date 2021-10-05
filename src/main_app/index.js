import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { PrerenderedControler } from 'react-prerendered-component'

import Routes from './routes'
import { IS_STATIC_RENDERER } from './constants'

import { setPageTitlePrefix } from 'utils/marketing/use_page_metadata'
import { setupGlobalDeveloperHints } from 'utils/marketing/developer_hints'
import { NavBar, NavBarContextProvider } from './components/NavBar'

setupGlobalDeveloperHints()
setPageTitlePrefix('WeDevelop - ')

function MainApp ({ hydrated }) {
  return (
    <React.StrictMode>
      <PrerenderedControler hydrated={hydrated} isServer={IS_STATIC_RENDERER}>
        <Router>
          <NavBarContextProvider>
            <NavBar />
            <Routes />
          </NavBarContextProvider>
        </Router>
      </PrerenderedControler>
    </React.StrictMode>
  )
}

export default MainApp
