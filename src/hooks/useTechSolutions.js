import MaleInVideocall from 'assets/staff_augmentation/male_videocall.png'
import MaleUsingComputer from 'assets/staff_augmentation/male_computer.png'
import MaleSalesSolutions from 'assets/staff_augmentation/male_sales_solutions.png'
import BrandGradient from 'main_app/components/TextGradient'

const TECH_SOLUTIONS = [{
  id: '1',
  imageURL: MaleInVideocall,
  title: <>Meet your next <BrandGradient>Web Developer today</BrandGradient></>,
  description: (
    <>
      <p>We send you a list of candidates today along with their rates and easy-to-read resumes.</p>
      <p>
        <b>
          Your time is too precious to be dealing with Recruiting, Screening, Selection,
          Interviewing, Hiring, and more.
        </b>
      </p>
      <p>Let us alleviate that burden. Save time. Grow Efficiently.</p>
    </>
  )
},
{
  id: '2',
  imageURL: MaleUsingComputer,
  title: <>Hire Top Web Developers <BrandGradient>Without Hassle</BrandGradient></>,
  description: (
    <>
      <p>
        Hiring the right developer is hard. Especially if you're looking for someone with specific
        skills and experience in a particular language or technology.
      </p>
      <p>
        At, WeDevelop, we match developers to clients based on skill sets, interests, and location
        & provide several options that meet your requirements. Hire top talent from around In Latin
        America without having to go through the hassle of interviewing them yourself.
      </p>
      <p>Focus on other important things such as growing your business and meeting deadlines.</p>
    </>
  )
},
{
  id: '3',
  imageURL: MaleSalesSolutions,
  title: <>Save time, <BrandGradient>grow faster</BrandGradient></>,
  description: (
    <>
      <p>Hiring the wrong developers can cost thousands of dollars and hours of wasted time.</p>
      <p>At WeDevelop, we've already put in the groundwork.</p>
      <p>
        We have access to the best developers for your company’s needs, allowing you to focus
        on growing your business instead of trying to find new staff members.
      </p>
      <p>
        Stop spending time and resources on Interviews. If you want to grow your company’s
        IT Staff quickly
      </p>
    </>
  )
}]

function useTechSolutions () {
  return TECH_SOLUTIONS
}

export default useTechSolutions