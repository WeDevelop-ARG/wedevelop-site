import NavBar from 'main_app/components/NavBar'
import Article from 'main_app/components/Article'
import Footer from 'main_app/components/Footer'

import Header from './components/Header'
import OurServices from './components/OurServices'
import WhyStaffAugmentation from './components/WhyStaffAugmentation'
import QuotesCarrousel from './components/QuotesCarrousel'

function StaffAugmentation () {
  return (
    <>
      <NavBar />
        <Article>
          <Header />
          <OurServices />
          <WhyStaffAugmentation />
          <QuotesCarrousel />
        </Article>
      <Footer />
    </>
  )
}

export default StaffAugmentation
