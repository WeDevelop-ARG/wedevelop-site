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
        <div className={classes.wrapper}>
          <section className={classes.fillHeight}>
            <CalendlyWidget />
          </section>
        </div>
      </Article>
      <Footer />
    </>
  )
}

export default StaffAugmentation
