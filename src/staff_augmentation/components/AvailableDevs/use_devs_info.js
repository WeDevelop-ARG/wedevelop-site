import AbelImg from 'assets/hire_developers/abel_profile.png'
import NahuelImg from 'assets/hire_developers/nahuel_profile.png'
import VaninaImg from 'assets/hire_developers/vanina_profile.png'
import JSLogo from 'assets/hire_developers/javascript.png'
import PythonLogo from 'assets/hire_developers/python.png'
import AngularLogo from 'assets/hire_developers/angular.png'

function useDevsInfo () {
  return [
    {
      id: '1',
      devImgURL: AbelImg,
      devRole: 'Full Stack',
      techLogoURL: JSLogo,
      devDescription: '7 years experience',
      devRate: '12'
    },
    {
      id: '2',
      devImgURL: NahuelImg,
      devRole: 'Backend',
      techLogoURL: PythonLogo,
      devDescription: 'Former Google',
      devRate: '15'
    },
    {
      id: '3',
      devImgURL: VaninaImg,
      devRole: 'Frontend',
      techLogoURL: AngularLogo,
      devDescription: 'Experience leading teams',
      devRate: '10'
    }
  ]
}

export default useDevsInfo
