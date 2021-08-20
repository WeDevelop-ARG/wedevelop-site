//Pattern
import WebDevPattern from 'assets/services/web-pattern.png'
import WebDevCircleDot from 'assets/services/web-circle-dot.svg'
import WebDevEmptyCircle from 'assets/services/web-empty-circle.svg'
import WebDevCircle from 'assets/services/web-circle.svg'
import StaffPattern from 'assets/services/staff-pattern.svg'
import StaffCircleDot from 'assets/services/staff-circle-dot.svg'
import StaffEmptyCircle from 'assets/services/staff-empty-circle.svg'
import StaffCircle from 'assets/services/staff-circle.svg'

const WEB_DEV = {
  Pattern: WebDevPattern,
  CircleDot: WebDevCircleDot,
  EmptyCircle: WebDevEmptyCircle,
  Circle: WebDevCircle,
  decoClasses: {
    circleDot: 'webDecoCircleDot',
    pattern: 'webDevDecoPattern',
    emptyCircle: 'webDevDecoEmptyCircle',
    circle: 'webDevDecoCircle'
  }
}
const STAFF = {
  Pattern: StaffPattern,
  CircleDot: StaffCircleDot,
  EmptyCircle: StaffEmptyCircle,
  Circle: StaffCircle,
  decoClasses: {
    circleDot: 'staffDecoCircleDot',
    pattern: 'staffDecoPattern',
    emptyCircle: 'stafffDecoEmptyCircle',
    circle: 'staffDecoCircle'
  }
}


const useHeroDecoration = (path) => {


  switch (path) {
    case '/services/web-development':
      return WEB_DEV
    case '/services/staff-augmentation':
      return STAFF
    default:
      break
  }
}

export { useHeroDecoration }
