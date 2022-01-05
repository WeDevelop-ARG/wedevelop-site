import Article from 'main_app/components/Article'
import Footer from 'main_app/components/Footer'
import NavBar from 'main_app/components/NavBar'
import { useLocation } from 'react-router-dom'
import SuccessHeader from './components/SuccessHeader'

export default function SuccessConfirm() {
  const { search } = useLocation()
  const displayScheduleCallHint = new URLSearchParams(search).get('scheduleCall') === '1'

  return (
    <>
      <NavBar
        variant={['solid', 'dark']}
        variantAtScrollTop={['transparent', 'light']}
        hideMenu
      />
      <Article>
        <SuccessHeader displayScheduleCallHint={displayScheduleCallHint} />
      </Article>
      <Footer variant='light' />
    </>
  )
}