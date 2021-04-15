import usePageMedatada from 'utils/marketing/use_page_metadata'

function NotFound () {
  usePageMedatada({
    title: '404 Not Found',
    description: 'The page you\'re looking for was not found.'
  })

  return (
    <>
      <h1>Not Found</h1>
      <p>The page you're looking for was not found on this server.</p>
    </>
  )
}

export default NotFound
