import SVGIcon from 'main_app/components/SVGIcon'

function GetFreeQuoteConfirmationMessage () {
  return (
    <>
      <figure>
        <SVGIcon name='staff_augmentation/check_sign' />
      </figure>
      <div>
        <h2>Message sent</h2>
        <p>Thanks for contacting us! We'll get back to you as soon as possible! :)</p>
      </div>
      <div>
        <p>Want to add something?</p>
        <p>Send us a new message or write us at <a href='mailto:info@wedevelop.me'>info@wedevelop.me</a></p>
      </div>
    </>
  )
}

export default GetFreeQuoteConfirmationMessage
