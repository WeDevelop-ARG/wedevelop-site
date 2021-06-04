const services = [{
  id: '1',
  name: <b>Web Development</b>,
  description: (
    <>
      From basic institutional webpages to large Web Applications, we create solutions&nbsp;
      <b>
        focused on scalability, performance, and user experience.
      </b>
    </>
  ),
  photo: 'home/web_development'
},
{
  id: '2',
  name: <b>Consulting Services</b>,
  description: (
    <>
      Our extensive experience allows us to help you with decisions regarding your daily work. We help you to&nbsp;
      <b>
        find improvement opportunities.
      </b>
    </>
  ),
  photo: 'home/consulting_services'
},
{
  id: '3',
  name: <b>Outsourcing</b>,
  description: (
    <>
      We provide&nbsp;
      <b>
        the human resources you need,&nbsp;
      </b>
      either an entire and independent team or specific professionals for your projects.
    </>
  ),
  photo: 'home/outsourcing'
}
]

function useService () {
  return services
}

export default useService
