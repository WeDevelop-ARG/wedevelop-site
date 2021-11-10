import { useCallback } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import NavBar from 'main_app/components/NavBar'
import Article from 'main_app/components/Article'
import ContactModal from 'main_app/components/ContactModal'
import Footer from 'main_app/components/Footer'
import Image from 'main_app/components/Image'
import PortfolioProjectCard from 'portfolio/components/PortfolioProjectCard'
import useProjectCards from './components/PortfolioProjectCard/hooks/useProjectCards'
import Button from 'main_app/components/Button'

import DotsPattern from 'assets/home/dots_pattern.svg'

import classes from './styles.module.scss'

function Portfolio () {
  const projectCards = useProjectCards()
  const contactPagePath = '/portfolio/contact'
  const match = useRouteMatch(contactPagePath)
  const history = useHistory()
  const handleClose = useCallback(() => {
    history.push('/portfolio')
  }, [history])

  return (
    <>
      <NavBar
        variant={['solid', 'dark']}
        variantAtScrollTop={['transparent', 'dark']}
        contactPagePath={contactPagePath}
      />
      <Article>
        <section id='portfolio' className={classes.sectionPortfolio}>
          <div>
            <p className={classes.subheadingText}>success stories</p>
            <h2 className={classes.titleText}>Our Portfolio</h2>
            <hr className={classes.horizontalBar} />
          </div>
          <div className={classes.projectCards}>
            {projectCards.map(({ id, ...props }) => (
              <PortfolioProjectCard
                key={id}
                {...props}
              />
            ))}
          </div>
          <div className={classes.talk}>
            <Button
              as={HashLink}
              to='/'
              smooth
              isAnchor
              variant='secondary'
            >
              View All
            </Button>
          </div>
          <Image src={DotsPattern} alt='' className={classes.topRightPattern} />
          <div className={classes.filledCircle} />
          <div className={classes.emptyCircle} />
          <div className={classes.smallBlurCircle} />
          <div className={classes.bottomFilledCircle} />
          <div className={classes.bottomEmptyCircle} />
          <div className={classes.bottomSmallBlurCircle} />
          {match?.isExact && <ContactModal isOpen onRequestClose={handleClose} />}
        </section>
      </Article>
      <Footer variant='light' />
    </>
  )
}

export default Portfolio
