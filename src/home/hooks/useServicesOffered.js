import webServices from 'assets/home/services/web-services.svg'
import staffAugm from 'assets/home/services/hiring-solutions.svg'

const services = [{
  id: '1',
  title: 'Web Development',
  description: 'We build trustworthy digital products',
  introText: 'We understand how important it is for businesses to get a competitive web solution. Our expertise and talent ensures the most agile development process.',
  photo: webServices,
  path: '/services/web-development'
},
{
  id: '2',
  title: 'IT Talent Solutions',
  description: 'Expand your team with the right talent',
  photo: staffAugm,
  path: '/services/hiring-solutions'
}
]

function useServicesOffered () {
  return services
}

export default useServicesOffered
