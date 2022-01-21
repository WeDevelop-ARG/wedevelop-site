import CvsdResumeBackground from 'assets/portfolio/cvsd/resume_background.png'
import CvsdHeader from 'assets/portfolio/cvsd/header_background.png'
import CvsdLogo from 'assets/portfolio/cvsd/cvsd_logo.png'
import CvsdLobby from 'assets/portfolio/cvsd/cvsd_lobby.png'
import CvsdAreaView from 'assets/portfolio/cvsd/cvsd_area_view.png'

const raftDetails = {
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
    logoURL: CvsdLogo,
    logoBackground: '#000000',
    heading: 'Success Story',
    title: 'CVSD',
    subtitle: 'A computer vision-powered solution for Social Distancing.',
    tags: [
      'Health',
      'Computer Vision'
    ],
    description: 'CVSD system allows people to move freely through the installation in a safe way due to the COVID reality. This system is really simple and fast, it doesn\'t even have to be installed, we manage that anyone can use it in their current camera network.',
    websiteURL: '',
    imageURL: CvsdLobby
  },
  challenge: {
    title: 'The Challenge',
    content: (
      <>
        <p>
          Due to a surprising reality to everyone, especially to the facilities that
          from one day to another had to close, our challenge was to create something
          that allows them to re-open in a really fast and easy way. But also without
          leaving behind the safety of everyone, because that was primordial we developed
          this. Anyone that enters the facility knows that the space is secure, and on
          the other hand the business keeps moving and avoids closing.
        </p>
      </>
    )
  },
  testimonials: [],
  solution: {
    title: 'The Solution',
    content: (
      <>
        <p>
          We worked alongside different possible solutions to this and once we figured
          it out we kept improving it, adding functions and making it easier for everyone.
        </p>
        <p>
          WeDevelop put their creative team to brainstorm ways to develop these solutions
          in a fast iterative way, so that a functional version could be delivered on time.
        </p>
        <h4>About Software Development Methodology</h4>
        <p>
          Due to the need presented by the COVID in 2019 this internal product was developed
          to have a control of social distancing through computer vision with a frame processing
          of a real time video that has an integration with your camera network (yes! we manage
          to do that there is no need for an extra setup or hardware required… it can be running
          by itself in 15 minutes).
        </p>
        <p>
          This tool was able to do an immediate estadistic analysis of the extracted data allowing
          to re-open the facilities and also providing a healthy space for the guests, tracking the
          occupancy and average distance between people.
        </p>
        <p>
          ALSO... we thought it as a way of gaining the trust of customers by showing them the real
          time information, just printing a QR and hanging it on the wall. Immediately they were able
          to know all the information about the room.
        </p>
        <p>
          We also achieved the fact that you can also access to actionable metrics and get instant
          alerts based on real activity in the facility to know how the environment is there.
        </p>
        <p>
          By building this we saw a lot of benefit points for everyone. But by being able to re-open
          your facility could let a business start gaining money again, so it had benefits from
          wherever you see it.
        </p>
      </>
    ),
    imageURL: CvsdAreaView
  }
}

export default raftDetails
