import NavBar from 'main_app/components/NavBar'
import Article from 'main_app/components/Article'
import CalendlyWidget from 'main_app/components/CalendlyWidget'
import Footer from 'main_app/components/Footer'

import Header from './components/Header'

function StaffAugmentation () {
  return (
    <>
      <NavBar />
      <Article>
        <Header />
        <section>
          <CalendlyWidget />
        </section>
      </Article>
      <Footer />
    </>
  )
}

export default StaffAugmentation
