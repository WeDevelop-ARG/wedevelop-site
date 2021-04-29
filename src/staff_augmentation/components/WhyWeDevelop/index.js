import SVGIcon from 'main_app/components/SVGIcon'

function WhyWeDevelop () {
  return (
    <section>
      <div>
        <p>Why WeDevelop</p>
        <h2>You are in <span>the right place if you</span></h2>
      </div>
      <div>
        <ul>
          <li>
            <SVGIcon name='staff_augmentation/rocket_icon' />
            <p>Want to <span>grow your company’s IT Staff quickly.</span></p>
          </li>
          <li>
            <SVGIcon name='staff_augmentation/tie_icon' />
            <p>Are looking for <span>Web Developers, Web Designers.</span></p>
          </li>
          <li>
            <SVGIcon name='staff_augmentation/target_icon' />
            <p>Are tired of <span>Spending too much time on interviews.</span></p>
          </li>
        </ul>
        <SVGIcon name='staff_augmentation/insert_idea' />
      </div>
    </section>
  )
}

export default WhyWeDevelop
