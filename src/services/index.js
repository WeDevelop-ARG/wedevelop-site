import {
  Switch,
  Route
} from 'react-router-dom'
import Article from 'main_app/components/Article'
import Footer from 'main_app/components/Footer'
import NavBar from 'main_app/components/NavBar'
import StaffAugmentation from './components/StaffAugmentation'
import WebDevelopment from './components/WebDevelopment'


function Services () {
  return (
    <>
      <NavBar variant={['solid', 'dark']} />
      <Article>
        <Switch>
          <Route
            exact
            path={['/services/web-development', '/services/web-development/contact']}
            component={WebDevelopment}
          />
          <Route
            exact
            path={['/services/staff-augmentation', '/services/staff-augmentation/contact']}
            component={StaffAugmentation}
          />
        </Switch>
      </Article>
      <Footer />
    </>
  )
}

export default Services
