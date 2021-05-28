import { useMemo } from 'react'
import { HashLink } from 'react-router-hash-link'

import NavBar from 'main_app/components/NavBar'
import Article from 'main_app/components/Article'
import Button from 'main_app/components/Button'

import usePageMedatada from 'utils/marketing/use_page_metadata'
import useOverlappingObserver from 'utils/use_overlapping_observer'

function NotFound () {
  usePageMedatada({
    title: '404 Not Found',
    description: 'The page you\'re looking for was not found.'
  })

  const [isNavBarAtTop, navBarRef] = useOverlappingObserver({
    root: document.body,
    ignoreHeight: true
  })
  const navBarVariant = useMemo(() => {
    if (isNavBarAtTop) return ['transparent', 'dark']

    return ['solid', 'dark']
  }, [isNavBarAtTop])

  return (
    <>
      <NavBar ref={navBarRef} variant={navBarVariant} hideMenu />
      <Article>
        <section>
          <h1>404</h1>
          <h2>Houston, We have a problem!</h2>
          <p>The page you're looking for is lost in cyberspace...</p>
          <Button
            as={HashLink}
            isAnchor
            variant='secondary'
            to='/'
            smooth
          >
            Let's head back to earth
          </Button>
        </section>
      </Article>
    </>
  )
}

export default NotFound
