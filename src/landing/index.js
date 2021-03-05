import NavBar from 'main_app/components/NavBar'
import Footer from 'main_app/components/Footer'

import classes from './styles.module.scss'

import Header from './components/Header'
import WhatAreYouLookingFor from './components/WhatAreYouLookingFor'
import OurTeam from './components/OurTeam'
import LetsTalk from './components/LetsTalk'

function Landing () {
  return (
    <>
      <NavBar />
      <article className={classes.article}>
        <Header />
        <WhatAreYouLookingFor />
        <OurTeam />
        <LetsTalk />
      </article>
      <Footer />
    </>
  )
}

export default Landing
