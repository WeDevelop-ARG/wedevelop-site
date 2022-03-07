import { useEffect } from 'react'
import Head from 'next/head'

import { setPageTitlePrefix } from '../src/utils/marketing/PageMetadata'
import { setupGlobalDeveloperHints } from '../src/utils/marketing/developer_hints'
import { NavBar, NavBarContextProvider } from '../src/main_app/components/NavBar'
import { BASE_URL, IS_PRODUCTION } from '../src/main_app/constants'

import '../src/styles/global.scss'
import '../src/styles/root.scss'

setupGlobalDeveloperHints()
setPageTitlePrefix('WeDevelop - ')

const WAIT_TIME_BEFORE_APPEND = 3000

function loadAfterInteraction () {
  window.removeEventListener('scroll', loadAfterInteraction, { passive: true })

  loadCookieConsent()
}

function loadGoogleTagManager () {
  if (!IS_PRODUCTION) return undefined

  const sc = document.createElement('script')

  sc.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-53CPLS8'
  sc.async = true
  sc.defer = true

  setTimeout(function () {
    document.head.appendChild(sc)
  }, WAIT_TIME_BEFORE_APPEND)
}

function loadCookieConsent () {
  const sc = document.createElement('script')
  const st = document.createElement('link')

  sc.src = 'https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js'
  sc.dataset.cfasync = 'false'
  sc.async = 'true'
  sc.defer = 'true'

  st.rel = 'stylesheet'
  st.type = 'text/css'
  st.href = 'https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css'

  sc.addEventListener('load', function () {
    if (!window.cookieconsent) return undefined

    window.cookieconsent.initialise({
      palette: {
        popup: {
          background: '#f7f9fc',
          text: '#363636'
        },
        button: {
          background: '#4776e6',
          text: '#ffffff'
        }
      },
      theme: 'edgeless'
    })
  })

  document.head.append(sc, st)
}

function MyApp ({ Component, pageProps }) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
    window.addEventListener('scroll', loadAfterInteraction, { passive: true })
    document.addEventListener('DOMContentLoaded', loadGoogleTagManager)
  }, [])

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='msapplication-TileColor' content='#2d89ef' />
        <meta name='theme-color' content='#2426e3' />
        <link rel='manifest' href={`${BASE_URL}/manifest.json`} />
        <link rel='apple-touch-icon' sizes='180x180' href={`${BASE_URL}/apple-touch-icon.png`} />
        <link rel='icon' type='image/png' sizes='32x32' href={`${BASE_URL}/logo32.png`} />
        <link rel='icon' type='image/png' sizes='16x16' href={`${BASE_URL}/logo16.png`} />
        <link rel='mask-icon' href={`${BASE_URL}/safari-pinned-tab.svg`} color='#8224e3' />
        <title>WeDevelop</title>
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <link rel='preconnect' href='https://res.cloudinary.com' />
        <link rel='dns-prefetch' href='https://res.cloudinary.com' />
        <link rel='dns-prefetch' href='https://cdn.jsdelivr.net' />
        <link rel='dns-prefetch' href='https://www.googletagmanager.com' />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <NavBarContextProvider>
        <NavBar />
        <Component {...pageProps} />
      </NavBarContextProvider>
      {IS_PRODUCTION && (
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-53CPLS8'
            height='0'
            width='0'
            style='display:none;visibility:hidden'
          />
        </noscript>
      )}
    </>
  )
}

export default MyApp
