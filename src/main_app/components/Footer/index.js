import SVGIcon from '../SVGIcon'

function Footer () {
  return (
    <footer>
      <ul>
        <li>
          <a href='https://www.linkedin.com/company/wedevelop-arg' target='_blank' rel='noreferrer'>
            <SVGIcon name='footer/linked_in' title={'WeDevelop\'s LinkedIn'} />
          </a>
        </li>
        <li>
          <a href='https://facebook.com/WeDevelop-101618141565362' target='_blank' rel='noreferrer'>
            <SVGIcon name='footer/facebook' title={'WeDevelop\'s Facebook'} />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/wedevelop.me' target='_blank' rel='noreferrer'>
            <SVGIcon name='footer/instagram' title={'WeDevelop\'s Instagram'} />
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href='mailto:info@wedevelop.me'>
            <SVGIcon name='footer/email' />
            info@wedevelop.me
          </a>
        </li>
        <li>
          <SVGIcon name='footer/location' />
          <address>
            WeDevelop LLC
            <br />
            FL 33134, US
          </address>
        </li>
        <li>
          <SVGIcon name='footer/phone' />
          <a href='tel:+19254486165'>
            +1 (925) 448-6165
          </a>
        </li>
      </ul>
      <SVGIcon name='logo' />
      <div>
        © 2021 WeDevelop LLC. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
