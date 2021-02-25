import HexagonOutline from 'assets/landing/hexagon_outline.svg'

function LetsTalk () {
  return (
    <section>
      <div>
        <img src={HexagonOutline} alt='' />
        <h2>Let’s talk</h2>
      </div>
      <form>
        <label>
          I am
          <select name='i_am'>
            <option>a Startup</option>
          </select>
        </label>
        <label>
          looking to
          <select name='looking_to'>
            <option>validate an idea</option>
          </select>
        </label>
        <input type='text' name='name' placeholder='Name' />
        <input type='email' name='email' placeholder='Email' />
        <textarea name='message' placeholder='Your message' maxLength='120' />
        <div aria-label='0 characters out of 120'>0 / 120</div>
        <button type='submit'>Send Message</button>
      </form>
    </section>
  )
}

export default LetsTalk
