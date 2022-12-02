import useBackgroundColor from 'staff_augmentation/components/AvailableDevs/use_background_colors'

import Eduardo from 'assets/home/top_engineers/profile_images/eduardo.png'
import Francisco from 'assets/home/top_engineers/profile_images/francisco.png'
import Juan from 'assets/home/top_engineers/profile_images/juan.png'
import Julian from 'assets/home/top_engineers/profile_images/julian.png'
import Lucila from 'assets/home/top_engineers/profile_images/lucila.png'
import Maria from 'assets/home/top_engineers/profile_images/maria.png'
import Mariano from 'assets/home/top_engineers/profile_images/mariano.png'
import Pablo from 'assets/home/top_engineers/profile_images/pablo.png'
import William from 'assets/home/top_engineers/profile_images/william.png'

export default function useAvailableDevs () {
  const { colors } = useBackgroundColor()

  const availableDevs = [
    {
      id: '1',
      devImgURL: Pablo,
      devName: 'Pablo L.',
      devRole: 'Back end Developer',
      devSkills: [
        { skill: 'PHP', color: colors.bdazzledBlue },
        { skill: 'Javascript', color: colors.spanishGray },
        { skill: 'Angular', color: colors.red },
        { skill: 'React', color: colors.vividSkyBlue },
        { skill: 'PostgreSQL', color: colors.lighterBlack }
      ],
      devExperience: '8 yrs',
      devRate: '42 / hour'
    },
    {
      id: '2',
      devImgURL: Maria,
      devName: 'Maria W.',
      devRole: 'Back end Developer',
      devSkills: [
        { skill: 'PHP', color: colors.bdazzledBlue },
        { skill: 'Javascript', color: colors.spanishGray },
        { skill: 'MySQL', color: colors.lighterBlack },
        { skill: 'jQuery', color: colors.limeGreen },
        { skill: 'HTML', color: colors.amber }
      ],
      devExperience: '15 yrs',
      devRate: '45 / hour'
    },
    {
      id: '3',
      devImgURL: Juan,
      devName: 'Juan V.',
      devRole: 'Front end Developer',
      devSkills: [
        { skill: 'React', color: colors.vividSkyBlue },
        { skill: 'Javascript', color: colors.spanishGray },
        { skill: 'Node.js', color: colors.citron },
        { skill: 'GraphQL', color: colors.cosmicLatte },
        { skill: 'HTML5', color: colors.scarlet }
      ],
      devExperience: '5 yrs',
      devRate: '40 / hour'
    },
    {
      id: '4',
      devImgURL: William,
      devName: 'William O.',
      devRole: 'Front end Developer',
      devSkills: [
        { skill: 'React', color: colors.vividSkyBlue },
        { skill: 'Angular', color: colors.red },
        { skill: 'Typescript', color: colors.spanishGray },
        { skill: 'Docker', color: colors.blueCrayola },
        { skill: 'AWS', color: colors.yellowMunsell }
      ],
      devExperience: '4 yrs',
      devRate: '38 / hour'
    },
    {
      id: '5',
      devImgURL: Eduardo,
      devName: 'Eduardo K.',
      devRole: 'Back end Developer',
      devSkills: [
        { skill: 'PHP', color: colors.bdazzledBlue },
        { skill: 'Javascript', color: colors.spanishGray },
        { skill: 'Angular', color: colors.red },
        { skill: 'Laravel', color: colors.white },
        { skill: 'Symfony', color: colors.limeGreen }
      ],
      devExperience: '14 yrs',
      devRate: '43 / hour'
    },
    {
      id: '6',
      devImgURL: Mariano,
      devName: 'Mariano C.',
      devRole: 'Back end Developer',
      devSkills: [
        { skill: 'PHP', color: colors.bdazzledBlue },
        { skill: 'Javascript', color: colors.spanishGray },
        { skill: 'Laravel', color: colors.white },
        { skill: 'CSS', color: colors.plumWeb },
        { skill: 'Vue.js', color: colors.darkGreenX11 }
      ],
      devExperience: '7 yrs',
      devRate: '35 / hour'
    },
    {
      id: '7',
      devImgURL: Lucila,
      devName: 'Lucila L.',
      devRole: 'Fullstack Developer',
      devSkills: [
        { skill: 'Golang', color: colors.lightBlack },
        { skill: 'Javascript', color: colors.spanishGray },
        { skill: 'GraphQL', color: colors.cosmicLatte },
        { skill: 'Kubernetes', color: colors.mediumSpringGreen },
        { skill: 'GitLab', color: colors.white }
      ],
      devExperience: '4 yrs',
      devRate: '38 / hour'
    },
    {
      id: '8',
      devImgURL: Julian,
      devName: 'Julian J.',
      devRole: 'QA Automation',
      devSkills: [
        { skill: 'Selenium Test', color: colors.azureX11WebColor },
        { skill: 'Scrum Master', color: colors.magnolia },
        { skill: 'Agile', color: colors.canary },
        { skill: 'Javascript', color: colors.spanishGray }
      ],
      devExperience: '6 yrs',
      devRate: '45 / hour'
    },
    {
      id: '9',
      devImgURL: Francisco,
      devName: 'Francisco N.',
      devRole: 'Fullstack Developer',
      devSkills: [
        { skill: 'Golang', color: colors.lightBlack },
        { skill: 'Javascript', color: colors.spanishGray },
        { skill: 'React', color: colors.vividSkyBlue },
        { skill: 'Python', color: colors.red },
        { skill: 'AWS', color: colors.yellowMunsell }
      ],
      devExperience: '14 yrs',
      devRate: '49 / hour'
    }
  ]

  return {
    availableDevs
  }
}
