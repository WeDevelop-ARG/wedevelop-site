import usePageTitle from 'utils/use_page_title'

function NotFound () {
  usePageTitle('404 Not Found')

  return (
    <>
      <h1>Not Found</h1>
      <p>The page you're looking for was not found on this server.</p>
    </>
  )
}

export default NotFound
