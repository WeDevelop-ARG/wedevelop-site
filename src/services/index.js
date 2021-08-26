import {
  Switch,
  Route
} from 'react-router-dom'
import Article from 'main_app/components/Article'
import NavBar from 'main_app/components/NavBar'
import Footer from 'main_app/components/Footer'
import Service from './components/Service'

function Services() {
  return (
    <>
      <NavBar
        variant={['solid', 'dark']}
        variantAtScrollTop={['transparent', 'dark']}
      />
      <Article>
        <Switch>
          <Route path="/services">
            <Service />
          </Route>
        </Switch>
      </Article>
      <Footer variant="light" />
    </>
  )
}

export default Services
