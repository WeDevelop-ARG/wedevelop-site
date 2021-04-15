import NavBar from 'main_app/components/NavBar'
import Article from 'main_app/components/Article'
import CalendlyWidget from 'main_app/components/CalendlyWidget'
import Footer from 'main_app/components/Footer'

import usePageMetadata from 'utils/marketing/use_page_metadata'

import Header from './components/Header'

import classes from './styles.module.scss'

function StaffAugmentation () {
  usePageMetadata({
    title: 'IT Staff Augmentation delivered in 7 days',
    description: 'Stop Interviewing. Start making money. We send you rates and available team within the hour, and make the Staff available to start in 7 days.'
  })

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
