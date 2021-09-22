import WebDevPattern from 'assets/services/web-pattern.png'
import WebDevPatternMobile from 'assets/services/web_dev_header/pattern_mobile.svg'
import WebDevCircleDot from 'assets/services/web-circle-dot.svg'
import WebDevEmptyCircle from 'assets/services/web-empty-circle.svg'
import WebDevCircle from 'assets/services/web-circle.svg'
import WebDevCircleMobile from 'assets/services/web_dev_header/circle_mobile.svg'
import StaffPattern from 'assets/services/staff-pattern.svg'
import StaffCircleDot from 'assets/services/staff-circle-dot.svg'
import StaffEmptyCircle from 'assets/services/staff-empty-circle.svg'
import StaffCircle from 'assets/services/staff-circle.svg'

const WEB_DEV = {
  Pattern: WebDevPattern,
  PatternMobile: WebDevPatternMobile,
  CircleDot: WebDevCircleDot,
  EmptyCircle: WebDevEmptyCircle,
  Circle: WebDevCircle,
  CircleMobile: WebDevCircleMobile,
  decoClasses: {
    circleDot: 'webDecoCircleDot',
    pattern: 'webDevDecoPattern',
    patternMobile: 'webDevDecoPatternMobile',
    emptyCircle: 'webDevDecoEmptyCircle',
    circle: 'webDevDecoCircle',
    circleMobile: 'webDevDecoCircleMobile'
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

const useHeroDecoration = (service) => {
  switch (service) {
    case 'web-development':
      return WEB_DEV
    case 'staff-augmentation':
      return STAFF
    default:
      break
  }
}

export { useHeroDecoration }
