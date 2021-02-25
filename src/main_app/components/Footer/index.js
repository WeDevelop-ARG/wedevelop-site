import Logo from '../Logo'

import LinkedIn from 'assets/footer/linked_in.svg'
import Facebook from 'assets/footer/facebook.svg'
import Instagram from 'assets/footer/instagram.svg'
import Email from 'assets/footer/email.svg'
import Location from 'assets/footer/location.svg'
import Phone from 'assets/footer/phone.svg'

function Footer () {
  return (
    <footer>
      <ul>
        <li>
          <a href='https://www.linkedin.com/company/wedevelop-arg' target='_blank' rel='noreferrer'>
            <img src={LinkedIn} alt={'WeDevelop\'s LinkedIn'} />
          </a>
        </li>
        <li>
          <a href='https://facebook.com/WeDevelop-101618141565362' target='_blank' rel='noreferrer'>
            <img src={Facebook} alt={'WeDevelop\'s Facebook'} />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/wedevelop.me' target='_blank' rel='noreferrer'>
            <img src={Instagram} alt={'WeDevelop\'s Instagram'} />
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href='mailto:info@wedevelop.me'>
            <img src={Email} alt='' />
            info@wedevelop.me
          </a>
        </li>
        <li>
          <img src={Location} alt='' />
          <address>
            WeDevelop LLC
            <br />
            FL 33134, US
          </address>
        </li>
        <li>
          <img src={Phone} alt='' />
          <a href='tel:+19254486165'>
            +1 (925) 448-6165
          </a>
        </li>
      </ul>
      <Logo />
      <div>
        © 2021 WeDevelop LLC. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
