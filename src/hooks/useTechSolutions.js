import MaleInVideocall from 'assets/staff_augmentation/male_videocall.png'
import MaleUsingComputer from 'assets/staff_augmentation/male_computer.png'
import MaleSalesSolutions from 'assets/staff_augmentation/male_sales_solutions.png'

const TECH_SOLUTIONS = [{
  id: '1',
  presentationPhotoURL: MaleInVideocall,
  title: 'Meet your next',
  titleGradient: 'Web Developer today',
  imageContainer: false,
  description: 'We send you a list of candidates today along with their rates and easy-to-read resumes. Your time is too precious to be dealing with Recruiting, Screening, Selection, Interviewing, Hiring, and more. Let us alleviate that burden. Save time. Grow Efficiently.'
},
{
  id: '2',
  presentationPhotoURL: MaleUsingComputer,
  title: 'Hire Top Web Developers',
  titleGradient: 'Without Hassle',
  imageContainer: true,
  description: 'Hiring the right developer is hard. Especially if you\'re looking for someone with specific skills and experience in a particular language or technology.At, WeDevelop, we match developers to clients based on skill sets, interests, and location & provide several options that meet your requirements. Hire top talent from around In Latin America without having to go through the hassle of interviewing them yourself. Focus on other important things such as growing your business and meeting deadlines.'
},
{
  id: '3',
  presentationPhotoURL: MaleSalesSolutions,
  title: 'Save time,',
  titleGradient: 'grow faster',
  imageContainer: false,
  description: 'Hiring the wrong developers can cost thousands of dollars and hours of wasted time. At WeDevelop, we\'ve already put in the groundwork. We have access to the best developers for your company’s needs, allowing you to focus on growing your business instead of trying to find new staff members. Stop spending time and resources on Interviews. If you want to grow your company’s IT Staff quickly.'
}
]

function useTechSolutions () {
  return TECH_SOLUTIONS
}

export default useTechSolutions
