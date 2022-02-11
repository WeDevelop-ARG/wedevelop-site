import RachelAram from 'assets/about_us/testimonials/rachel_aram.jpg'
import FilipElez from 'assets/about_us/testimonials/filip_elez.jpg'
import HugoTroche from 'assets/about_us/testimonials/hugo_troche.jpg'
import DarrenLiu from 'assets/about_us/testimonials/darren_liu.jpg'
import SofiOtta from 'assets/portfolio/injob/testimonials_default_image.png'

const reviews = [
  {
    id: 1,
    profileImageURL: RachelAram,
    name: 'Rachel Aram',
    quote: 'They\'re a well-round team, which is conducive to troubleshooting [and] having difficult conversations.',
    position: 'CEO',
    company: 'TrainWith'
  },
  {
    id: 2,
    profileImageURL: FilipElez,
    name: 'Filip Elez',
    quote: 'WeDevelop was resourceful, unafraid of problems and blockers, creative, professional, and fast.',
    position: 'CEO',
    company: 'RAFT Croatia'
  },
  {
    id: 3,
    profileImageURL: HugoTroche,
    name: 'Hugo Troche',
    quote: 'The project cost about half of what it would have had we hired local engineers.',
    position: 'CTO',
    company: 'Moneda Lending'
  },
  {
    id: 4,
    profileImageURL: DarrenLiu,
    name: 'Darren Liu',
    quote: 'They\'re willing to engage with a problem to figure it out rather than waiting to be told what to do.',
    position: 'CEO',
    company: 'Betzar'
  }, {
    profileImageURL: SofiOtta,
    name: '',
    quote:
      'They are very understanding with us as it is our first time working with agile methodologies.',
    position: 'Founder & Investor',
    company: 'InJob Online'
  }
]

function useReviews () {
  return {
    reviews: reviews
  }
}

export default useReviews
