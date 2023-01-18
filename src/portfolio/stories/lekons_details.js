import LekonsMobileBackground from 'assets/portfolio/lekons/mobile_background.png'
import LekonsBackground from 'assets/portfolio/lekons/lekons_background.png'
import LekonsLogo from 'assets/portfolio/lekons/lekons_logo.svg'
import MainPictures from 'assets/portfolio/lekons/main_pictures.png'
import LekonsFeatured from 'assets/portfolio/lekons/featured.png'
import TestimonialsImage from 'assets/portfolio/lekons/testimonials_picture.png'
import ResumeBackground from 'assets/portfolio/lekons/resume_background.png'
import TurboRepo from 'assets/portfolio/tech_stack/turborepo.svg'
import NodeJS from 'assets/portfolio/tech_stack/node.svg'
import ReactNative from 'assets/portfolio/tech_stack/react.svg'
import Firebase from 'assets/portfolio/tech_stack/firebase.svg'
import TypeScript from 'assets/portfolio/tech_stack/typescript.svg'
import GraphQL from 'assets/portfolio/tech_stack/graphql.svg'
import ApolloServer from 'assets/portfolio/tech_stack/apollo.svg'
import Sass from 'assets/portfolio/tech_stack/sass.svg'
import ElasticSearch from 'assets/portfolio/tech_stack/elasticsearch.svg'

const lekonsDetails = {
  urlName: 'lekons',
  metadata: {
    title: 'Story Details',
    description: 'Story Details for Lekons'
  },
  resume: {
    headerImageURL: ResumeBackground
  },
  header: {
    backgroundURL: LekonsBackground,
    mobileBackgroundURL: LekonsMobileBackground,
    logoURL: LekonsLogo,
    logoBackground: '#B40C17',
    heading: 'Success Story',
    title: 'Lekons',
    subtitle: 'Wholesaler hardware store offering shipping nationwide',
    tags: ['Marketplace', 'Retail'],
    description:
      'Create an e-commerce for their entire catalog with stock updated in real-time, along with price updates, the possibility of searching for products by category, SKU, brand and type, and replace products that are out of stock with similar products',
    imageURL: MainPictures,
    showDescription: false
  },
  challenge: {
    title: 'The Challenge',
    content: (
      <>
        <p>
          Create an e-commerce for their entire catalog with stock updated in real-time, along
          with price updates, the possibility of searching for products by category, SKU,
          brand and type, and replace products that are out of stock with similar products
        </p>
        <p>
          There’s two types of users with different capabilities.
        </p>
        <ul>
          <li>
            <p>
              Client: can make orders, request quotes, make quotes for their own customers and
              contact their salesman.
            </p>
          </li>
          <li>
            <p>
              Salesman: can access their clients list, make orders and quotes on behalf of their
              clients. All the functionalities of the application have to be available offline as well.
            </p>
          </li>
        </ul>
      </>
    )
  },
  testimonials: [
    {
      profileImageURL: TestimonialsImage,
      name: '',
      quote:
        'We Develop’s team has been efficient, agile, and transparent in the resolution of each one of our requirements. I highly recommend them.',
      position: 'General Manager',
      company: 'Facundo Otta'
    }
  ],
  solution: {
    title: 'The Solution',
    content: (
      <p>
        We developed a cross-platform mobile application available in Google Play (Android)
        and App Store (iOS). We also developed a web application for their back office, where
        they can add deals, create, edit and delete salesman users, upload flash information
        that the users can see upon login, list all the orders, and general management tools.
      </p>
    ),
    imageURL: LekonsFeatured
  },
  techStackContent: [],
  techStackIcons: [
    {
      id: '1',
      name: 'TurboRepo',
      photo: TurboRepo
    },
    {
      id: '2',
      name: 'Node.js',
      photo: NodeJS
    },
    {
      id: '3',
      name: 'React / React Native',
      photo: ReactNative
    },
    {
      id: '4',
      name: 'TypeScript',
      photo: TypeScript
    },
    {
      id: '5',
      name: 'GraphQL',
      photo: GraphQL
    },
    {
      id: '6',
      name: 'Apollo Server/Client',
      photo: ApolloServer
    },
    {
      id: '7',
      name: 'Sass',
      photo: Sass
    },
    {
      id: '8',
      name: 'Firebase',
      photo: Firebase
    },
    {
      id: '9',
      name: 'Elasticsearch',
      photo: ElasticSearch
    }
  ],
  reviewedOnClutch: true
}

export default lekonsDetails
