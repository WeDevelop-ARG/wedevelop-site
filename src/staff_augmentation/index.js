import NavBar from 'main_app/components/NavBar'
import Article from 'main_app/components/Article'
import CalendlyWidget from 'main_app/components/CalendlyWidget'
import Footer from 'main_app/components/Footer'

import Header from './components/Header'

import classes from './styles.module.scss'

function StaffAugmentation () {
  return (
    <>
      <NavBar />
      <Article>
        <Header />
        <section id='contact' className={classes.wrapper}>
          <div className={classes.fillHeight}>
            <h1 className={classes.titleText}>Schedule a call with us</h1>
            <CalendlyWidget />
          </div>
        </section>
      </Article>
      <Footer />
    </>
  )
}

export default StaffAugmentation
