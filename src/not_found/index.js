import InternalLink from 'main_app/components/InternalLink'


import NavBar from 'main_app/components/NavBar'
import Article from 'main_app/components/Article'
import Button from 'main_app/components/Button'
import SVGIcon from 'main_app/components/SVGIcon'

import usePageMedatada from 'utils/marketing/use_page_metadata'

import classes from './styles.module.scss'

function NotFound () {
  usePageMedatada({
    title: '404 Not Found',
    description: 'The page you\'re looking for was not found.'
  })

  return (
    <>
      <NavBar
        hideMenu
        variant={['solid', 'dark']}
        variantAtScrollTop={['transparent', 'dark']}
      />
      <Article>
        <section className={classes.notFoundSection}>
          <div className={classes.textContainer}>
            <h1>404</h1>
            <h2>Houston, we have a problem!</h2>
            <p>The page you're looking for is lost in cyberspace...</p>
            <Button
              as={InternalLink}
              isAnchor
              variant='secondary'
              href='/#top'
              smooth
            >
              Let's head back to earth
            </Button>
          </div>
          <SVGIcon name='not_found/astronaut' className={classes.astronaut} />
        </section>
      </Article>
    </>
  )
}

export default NotFound
