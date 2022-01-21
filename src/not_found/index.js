import InternalLink from 'main_app/components/InternalLink'

import WrappedImage from 'main_app/components/WrappedImage'
import NavBar from 'main_app/components/NavBar'
import Article from 'main_app/components/Article'
import Button from 'main_app/components/Button'

import PageMetadata from 'utils/marketing/PageMetadata'

import Astronaut from 'assets/not_found/astronaut.svg'

import classes from './styles.module.scss'

function NotFound () {
  return (
    <>
      <PageMetadata
        title='404 Not Found'
        description={'The page you\'re looking for was not found.'}
      />
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
              href='/'
            >
              Let's head back to earth
            </Button>
          </div>
          <WrappedImage src={Astronaut} layout='intrinsic' className={classes.astronaut} />
        </section>
      </Article>
    </>
  )
}

export default NotFound
