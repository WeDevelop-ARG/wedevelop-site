import React from 'react'
import Routes from './routes'

import { setPageTitleSuffix } from 'utils/use_page_title'

setPageTitleSuffix(' - WeDevelop')

function MainApp () {
  return (
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  )
}

export default MainApp
