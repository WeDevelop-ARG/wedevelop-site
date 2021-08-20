import { Switch, Route } from 'react-router-dom'
import WebDevelopment from './WebDevelopment'
import StaffAugmentation from './StaffAugmentation'

function Service() {
  return (
    <Switch>
      <Route
        exact
        path="/services/web-development"
        component={WebDevelopment}
      />
      <Route
        exact
        path="/services/staff-augmentation"
        component={StaffAugmentation}
      />
    </Switch>
  )
}

export default Service
