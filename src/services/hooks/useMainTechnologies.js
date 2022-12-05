import reactLogo from 'assets/services/our_technologies/react.svg'
import nodeJsLogo from 'assets/services/our_technologies/nodejs.svg'
import javascriptLogo from 'assets/services/our_technologies/javascript.svg'
import golangLogo from 'assets/services/our_technologies/golang.svg'
import androidLogo from 'assets/services/our_technologies/android.svg'
import awsLogo from 'assets/services/our_technologies/aws.svg'

export default function useMainTechnologies () {
  return {
    technologies: [
      {
        name: 'React',
        description: 'React JavaScript is a flexible and efficient open-code library for user interfaces. It is a powerful tool that allows programmers to create reusable UI components and build single-page applications.',
        image: {
          src: reactLogo,
          alt: 'react logo',
          width: '80px',
          height: '80px'
        }
      },
      {
        name: 'Node.js',
        description: 'Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.',
        image: {
          src: nodeJsLogo,
          alt: 'node.js logo',
          width: '250px'
        }
      },
      {
        name: 'Javascript',
        description: 'JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages.',
        image: {
          src: javascriptLogo,
          alt: 'javascript logo',
          width: '100px'
        }
      },
      {
        name: 'Golang',
        description: 'Looking for an easy and friendly open source programming language to build reliable and efficient software at scale? Supported by Google, Golang is a compiled and concurrent language with which you can build Cloud and Network services, create command-line interfaces, and power web development.',
        image: {
          src: golangLogo,
          alt: 'golang logo',
          width: '150px'
        }
      },
      {
        name: 'Android',
        description: 'The Android operating system is a mobile operating system that was developed by Google (GOOGL) to be primarily used for touchscreen devices, cell phones, and tablets. Its design lets users manipulate the mobile devices intuitively, with finger movements that mirror common motions, such as pinching, swiping, and tapping. Google also employs Android software in televisions, cars, and wristwatches—each of which is fitted with a unique user interface.',
        image: {
          src: androidLogo,
          alt: 'android logo',
          height: '80px'
        }
      },
      {
        name: 'Amazon Web Services',
        description: 'Amazon Web Services, Inc. (AWS) is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis. These cloud computing web services provide distributed computing processing capacity and software tools via AWS server farms.',
        image: {
          src: awsLogo,
          alt: 'aws logo',
          width: '100px'
        }
      }
    ]
  }
}
