import webServices from 'assets/home/services/web-services.svg'
import staffAugm from 'assets/home/services/staff-augmentation.svg'

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
  title: 'Hiring Solutions',
  description: 'Expand your team with the right talent',
  photo: staffAugm,
  path: '/services/staff-augmentation'
}
]

function useServicesOffered () {
  return services
}

export default useServicesOffered
