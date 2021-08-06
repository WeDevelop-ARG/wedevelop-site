import webServices from 'assets/home/services/web-services.svg'
import staffAugm from 'assets/home/services/staff-augmentation.svg'

const services = [{
  id: '1',
  title: 'Web Development',
  description: 'We build trustworthy digital product',
  photo: webServices,
  path: ''
},
{
  id: '2',
  title: 'Staff Augmentation',
  description: 'Extend your team with the right talent',
  photo: staffAugm,
  path: ''
}
]

function useServicesOffered () {
  return services
}

export default useServicesOffered
