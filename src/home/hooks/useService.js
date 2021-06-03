import webDevelopment from 'assets/home/web_development.svg'
import consultingServices from 'assets/home/consulting_services.svg'
import outsourcing from 'assets/home/outsourcing.svg'

const services = [{
  id: '1',
  name: 'Web Development',
  description: (
    <>
      From basic institutional webpages to large Web Applications, we create solutions <b />
      <span>
        focused on scalability, performance, and user experience.
      </span>
    </>
  ),
  photo: webDevelopment
},
{
  id: '2',
  name: 'Consulting Services',
  description: (
    <>
      Our extensive experience allows us to help you with decisions regarding your daily work. We help you to <b />
      <span>
        find improvement opportunities.
      </span>
    </>
  ),
  photo: consultingServices
},
{
  id: '3',
  name: 'Outsourcing',
  description: (
    <>
      We provide <b />
      <span>
        the human resources you need, <b />
      </span>
      either an entire and independent team or specific professionals for your projects.
    </>
  ),
  photo: outsourcing
}
]

function useService () {
  return services
}

export default useService
