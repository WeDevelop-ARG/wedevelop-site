import Article from 'main_app/components/Article'
import Footer from 'main_app/components/Footer'
import NavBar from 'main_app/components/NavBar'
import SuccessHeader from './components/SuccessHeader'
import { useRouter } from 'next/router'

export default function SuccessConfirm () {
  const { query } = useRouter()

  const displayScheduleCallHint = new URLSearchParams(query).get('scheduleCall') === '1'

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
      <Footer />
    </>
  )
}
