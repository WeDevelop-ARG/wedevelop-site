import RaftBackground from 'assets/portfolio/raft/resume_background.png'
import TrainWithBackground from 'assets/portfolio/train_with/resume_background.png'
import CopaBackground from 'assets/portfolio/copa/resume_background.png'
import BallwizBackground from 'assets/portfolio/ballwiz/resume_background.png'
import LogoBallwiz from 'assets/portfolio/ballwiz/ballwiz_logo.svg'
import LogoRaft from 'assets/portfolio/raft/raft_logo.png'
import LogoTrainWith from 'assets/portfolio/train_with/train_with_logo.png'
import LogoCopa from 'assets/portfolio/copa/copa_logo.svg'

const projectCards = [{
  id: '1',
  projectName: 'Raft',
  coverImageURL: RaftBackground,
  logoURL: LogoRaft,
  logoBackground: '#FFFFFF',
  shortDescription: 'A search engine for ferry booking',
  tags: ['E-commerce', 'Web Responsive', 'Staff Augmentation'],
  description: 'Ferry transportation is a pretty niche industry, and there is no search engine or metada platform for it, either globally or in specific countries, so we had to build much of it on our own.',
  externalWebsiteURL: 'url',
  detailsPagePath: ''
},
{
  id: '2',
  projectName: 'TrainWith',
  coverImageURL: TrainWithBackground,
  logoURL: LogoTrainWith,
  logoBackground: 'linear-gradient(93.58deg, #9194A1 2.39%, #959AA6 96.87%)',
  shortDescription: 'A search engine for ferry booking',
  tags: ['E-commerce', 'Web Responsive', 'Staff Augmentation'],
  description: 'Ferry transportation is a pretty niche industry, and there is no search engine or metada platform for it, either globally or in specific countries, so we had to build much of it on our own.',
  externalWebsiteURL: 'url',
  detailsPagePath: ''
},
{
  id: '3',
  projectName: 'COPA',
  coverImageURL: CopaBackground,
  logoURL: LogoCopa,
  logoBackground: '#1F2024',
  shortDescription: 'A search engine for ferry booking',
  tags: ['E-commerce', 'Web Responsive', 'Staff Augmentation'],
  description: 'Ferry transportation is a pretty niche industry, and there is no search engine or metada platform for it, either globally or in specific countries, so we had to build much of it on our own.',
  externalWebsiteURL: 'url',
  detailsPagePath: ''
},
{
  id: '4',
  projectName: 'Ballwiz',
  coverImageURL: BallwizBackground,
  logoURL: LogoBallwiz,
  logoBackground: '#000000',
  shortDescription: 'A search engine for ferry booking',
  tags: ['E-commerce', 'Web Responsive', 'Staff Augmentation'],
  description: 'Ferry transportation is a pretty niche industry, and there is no search engine or metada platform for it, either globally or in specific countries, so we had to build much of it on our own.',
  externalWebsiteURL: 'url',
  detailsPagePath: ''
},
{
  id: '5',
  projectName: 'Raft',
  coverImageURL: RaftBackground,
  logoURL: LogoRaft,
  logoBackground: '#FFFFFF',
  shortDescription: 'A search engine for ferry booking',
  tags: ['E-commerce', 'Web Responsive', 'Staff Augmentation'],
  description: 'Ferry transportation is a pretty niche industry, and there is no search engine or metada platform for it, either globally or in specific countries, so we had to build much of it on our own.',
  externalWebsiteURL: 'url',
  detailsPagePath: ''
},
{
  id: '6',
  projectName: 'TrainWith',
  coverImageURL: TrainWithBackground,
  logoURL: LogoTrainWith,
  logoBackground: 'linear-gradient(93.58deg, #9194A1 2.39%, #959AA6 96.87%)',
  shortDescription: 'A search engine for ferry booking',
  tags: ['E-commerce', 'Web Responsive', 'Staff Augmentation'],
  description: 'Ferry transportation is a pretty niche industry, and there is no search engine or metada platform for it, either globally or in specific countries, so we had to build much of it on our own.',
  externalWebsiteURL: 'url',
  detailsPagePath: ''
}
]

function useProjectCards () {
  return projectCards
}

export default useProjectCards
