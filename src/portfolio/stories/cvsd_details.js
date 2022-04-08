import CvsdResumeBackground from 'assets/portfolio/cvsd/resume_background.png'
import CvsdMobileHeader from 'assets/portfolio/cvsd/mobile_header_background.png'
import CvsdHeader from 'assets/portfolio/cvsd/header_background.png'
import CvsdLogo from 'assets/portfolio/cvsd/cvsd_logo.svg'
import CvsdLobby from 'assets/portfolio/cvsd/cvsd_lobby.png'
import CvsdAreaView from 'assets/portfolio/cvsd/cvsd_area_view.png'

const cvsdDetails = {
  urlName: 'cvsd',
  metadata: {
    title: 'Story Details',
    description: 'Story Details for CVSD'
  },
  resume: {
    headerImageURL: CvsdResumeBackground
  },
  header: {
    backgroundURL: CvsdHeader,
    mobileBackgroundURL: CvsdMobileHeader,
    logoURL: CvsdLogo,
    logoBackground: '#000000',
    heading: 'Success Story',
    title: 'CVSD',
    subtitle: 'A vision-powered digital solution for Social Distancing',
    tags: ['Health', 'Computer Vision'],
    description:
      'The CVSD system allows people to move freely through the installation with full adherence to COVID guidelines and restrictions. This virtual system is simple and fast, and it doesn’t even have to be installed — anyone can use it within their current camera network.',
    imageURL: CvsdLobby
  },
  challenge: {
    title: 'The Challenge',
    content: (
      <>
        <p>
          Unfortunately, facilities sometimes have to close — especially in this
          COVID-related new normal. Our challenge was to allow them to re-open
          quickly and effectively without impacting public and employee safety.
          Anyone that enters the facility must know that the space is secure.
          Meanwhile, the business must keep moving and avoid closure.
        </p>
      </>
    )
  },
  solution: {
    title: 'The Solution',
    content: (
      <>
        <p>
          We worked on a number of possible solutions to this challenge. Once we
          decided on the best candidate, we began improving it, adding functions
          and making it easier for all users. This ongoing development was finalized
          and delivered within the client’s tight time frame.
        </p>
        <h4>About Software Development Methodology</h4>
        <p>
          Due to COVID-19, this internal product was developed to control social
          distancing through computer visual terminals. The solution needed to
          handle frame processing of real-time video integrated within the existing
          camera network. We managed to achieve all of this with no extra setup
          or hardware. The solution we built can be up and running by itself in 15 minutes.
        </p>
        <p>
          This tool was able to carry out immediate statistical analysis of the
          extracted data, allowing the re-opening of facilities and providing a
          healthy space for the guests. We achieved this by tracking occupancy
          levels and the average distance between people.
        </p>
        <p>
          We decided to gain customers’ trust by showing them this information in real-time.
          By printing a QR code and displaying this on the wall, we
          were able to deliver information about the room to visitors without a moment's delay.
        </p>
        <p>
          Teams using the solution can access actionable metrics and get instant
          alerts based on activity in the facility.
        </p>
      </>
    ),
    imageURL: CvsdAreaView
  },
  techStackContent: {
    title: 'Tech Stack',
    content: (
      <>
        <ul>
          <li>
            Deployment in a <b>serverless automated environment.</b>
          </li>
          <li>
            <b>Real time video frame processing.</b>
          </li>
          <li>
            <b>Statistical analysis</b> of the extracted data.
          </li>
          <li>
            <b>Visualization of video streams</b> with information overlay.
          </li>
          <li>
            <b>Deployed in an environment severless</b> (App Engine) automated.
          </li>
          <li>
            <b>Deployed manual of NVIDIA Triton</b> (Al server) to solve the
            problems with the Google Cloud Al Platform.
          </li>
          <li>
            <b>Development of AI models</b>, combining pre-existing ones
            with TensorFlow, as well as manual optimization of those models.
          </li>
          <li>
            <b>
              Google Cloud for all (App Engine, Al Platform, Compute Engine,
              DNS, BD, PubSub, Storage, Cloud Build).
            </b>
          </li>
          <li>
            <b>Google Analytics.</b>
          </li>
        </ul>
      </>
    )
  },
  techStackIcons: [],
  reviewedOnClutch: false
}

export default cvsdDetails
