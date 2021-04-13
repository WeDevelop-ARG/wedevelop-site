import BaseNavBar from './NavBar'
import {
  NavBarContextProvider,
  NavBarContextProxy,
  withNavBarContextProps
} from './Context'

const NavBar = withNavBarContextProps(BaseNavBar)

export {
  NavBarContextProxy as default,
  NavBarContextProvider,
  NavBar
}
