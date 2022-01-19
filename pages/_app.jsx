import React from 'react'

import { setPageTitlePrefix } from '../src/utils/marketing/use_page_metadata'
import { setupGlobalDeveloperHints } from '../src/utils/marketing/developer_hints'
import { NavBar, NavBarContextProvider } from '../src/main_app/components/NavBar'

setupGlobalDeveloperHints()
setPageTitlePrefix('WeDevelop - ')


function MyApp ({ Component, pageProps }) {
  return (
    <NavBarContextProvider>
      <NavBar />
      <Component {...pageProps} />
    </NavBarContextProvider>
  )
}

export default MyApp
