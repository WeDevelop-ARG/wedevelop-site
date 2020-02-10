<template>
  <div class="thank-you">
    <div class="thank-you-message alt-section alt-section--thankyou">
      <h1 class="title">Thanks for reaching out!</h1>
      <p class="text">Someone from our team will get back to you soon.</p>
      <img class="image" src="../../assets/img/thank-you-drawing.svg" />
      <p class="text highlighted-text highlighted-text--mobile">Forgot to say something important?</p>
      <p class="text text--mobile">
        Send us a <span class="highlighted-text--purple">new message</span> or write us at
        <span class="highlighted-text highlighted-text--last-mobile"> info@wedevelop.me</span>
      </p>
    </div>
    <Footer :scrollDuration="scrollDuration" :isNotHome="true" />
  </div>
</template>

<script>
import Footer from '../../components/Footer'

export default {
  name: 'thankyou',
  components: {
    Footer
  },
  props: {
    scrollDuration: Number
  }
}
</script>

<style scoped>
  .thank-you {
    display: flex;
    justify-content: center;
    padding-top: 760px;
  }

  .thank-you-message {
    position: absolute;
    top: 152px;
    padding: 125px 300px 115px 300px;
    background-color: #F7F9FC;
  }

  .title {
    margin: 0 0 30px 0;
    color: #272A40;
    font-size: 40px;
    font-weight: 900;
    letter-spacing: 0.8px;
    line-height: 48px;
  }

  .text {
    margin: 0;
    color: #272A40;
    font-size: 18px;
    letter-spacing: 0.63px;
    line-height: 34px;
  }

  .text:last-child {
    margin-top: 15px;
  }

  .highlighted-text,
  .highlighted-text--purple {
    font-weight: 900;
  }

  .highlighted-text--purple {
    color: #8224E3;
  }

  .image {
    width: 496px;
    height: 245px;
    margin: 45px 0 88px 0;
  }

  /* Top left ThankYou cutted corner */
  .alt-section--thankyou:before {
    border-bottom: 195px solid transparent;
    border-left: 195px solid #fff;
  }

  /* Bottom right ThankYou cutted corner */
  .alt-section--thankyou:after {
    border-bottom: 125px solid #272A40;
    border-left: 140px solid transparent;
  }

  @media (max-width: 1024px) {
    .thank-you {
      flex-direction: column;
      padding-top: 0;
    }

    .thank-you-message {
      position: initial;
      top: 0;
      padding: 55px 25px 78px 25px;
    }

    .alt-section--thankyou:before {
      display: none;
    }

    .alt-section--thankyou:after {
      display: none;
    }

    .title {
      font-size: 30px;
      letter-spacing: 0.6px;
      line-height: 36px;
    }

    .image {
      height: 155px;
      width: 313px;
      margin: 40px 0 72px 0;
    }

    .highlighted-text--mobile {
      letter-spacing: 0.36px;
      line-height: 22px;
    }

    .text--mobile {
      font-size: 16px;
      letter-spacing: 0.56px;
    }

    .highlighted-text--last-mobile {
      line-height: 44px;
    }
  }
</style>
