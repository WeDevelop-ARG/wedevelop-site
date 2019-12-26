<template>
  <div id="app">
    <Header :scrollDuration="this.scrollDuration" />
    <Methodologies />
    <Skills />
    <Introduction />
    <Team />
    <Services />
    <Clients />
    <Contact />
    <Footer :scrollDuration="this.scrollDuration" />
    <cookie-law
      buttonClass="cookie-button"
      message="This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media."
    >
    </cookie-law>
  </div>
</template>

<script>
import Vue from 'vue'
import vueSmoothScroll from 'vue2-smooth-scroll'
import CookieLaw from 'vue-cookie-law'

import Header from './components/Header'
import Introduction from './components/Introduction'
import Team from './components/Team'
import Services from './components/Services'
import Methodologies from './components/Methodologies'
import Skills from './components/Skills'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'

Vue.use(vueSmoothScroll)

export default {
  name: 'app',
  components: {
    Header,
    Introduction,
    Team,
    Services,
    Methodologies,
    Skills,
    Clients,
    Contact,
    Footer,
    CookieLaw
  },
  data () {
    return {
      scrollDuration: 2000
    }
  }
}
</script>

<style>
  @font-face {
    font-family: 'Lato';
    src: url('assets/fonts/Lato-Light.ttf')  format('truetype');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Lato';
    src: url('assets/fonts/Lato-Regular.ttf')  format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Lato';
    src: url('assets/fonts/Lato-Medium.ttf')  format('truetype');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Lato';
    src: url('assets/fonts/Lato-Bold.ttf')  format('truetype');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Lato';
    src: url('assets/fonts/Lato-Black.ttf')  format('truetype');
    font-weight: 900;
  }

  * {
    box-sizing: border-box;
  }

  #app {
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  .highlight-paragraph {
    color: #272A40;
  }

  .alt-section {
    position: relative;
    background-color: #F7F9FC;
  }

  /* Cutted corners */
  .alt-section:before,
  .alt-section:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
  }

  /* Top left cutted corner */
  .alt-section:before {
    top: 0;
    left: 0;
    border-bottom: 210px solid transparent;
    border-left: 240px solid #fff;
  }

  /* Bottom right cutted corner */
  .alt-section:after {
    bottom: 0;
    right: 0;
    border-bottom: 125px solid #fff;
    border-left: 170px solid transparent;
  }

  .cookie-button {
    background-color: #45DA60;
    padding: 8px 25px;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 576px) {
    .alt-section:after,
    .alt-section:before {
      display: none;
    }

    .Cookie__content {
      width: 100%;
    }

    .drift-widget-welcome-expanded-online,
    .drift-widget-welcome-away {
      bottom: 0!important;
    }
  }
</style>
