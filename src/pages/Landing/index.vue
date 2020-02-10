<template>
  <div>
    <Header :scrollDuration="scrollDuration" />
    <Methodologies />
    <Skills />
    <Introduction />
    <Team />
    <Services />
    <Clients />
    <Contact />
    <Footer :scrollDuration="scrollDuration" />
    <cookie-law>
      <div slot-scope="props" class="cookie">
        <p class="message">This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media.</p>
        <div class="buttons">
          <button class="cookie-button" @click="props.accept">Accept</button>
          <button class="cookie-button" @click="props.close">Decline</button>
        </div>
      </div>
    </cookie-law>
  </div>
</template>

<script>
import CookieLaw from 'vue-cookie-law'

import Header from '../../components/Header'
import Introduction from '../../components/Introduction'
import Team from '../../components/Team'
import Services from '../../components/Services'
import Methodologies from '../../components/Methodologies'
import Skills from '../../components/Skills'
import Clients from '../../components/Clients'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

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
  props: {
    scrollDuration: Number
  }
}
</script>

<style>
  .cookie-button {
    background-color: #45DA60;
    padding: 8px 25px;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  .cookie {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .message {
    padding-right: 400px;
    text-align: left;
    line-height: 25px;
  }

  .cookie-button:first-child {
    margin-right: 20px;
  }

  @media (max-width: 576px) {
    .alt-section:after,
    .alt-section:before {
      display: none;
    }

    .cookie {
      align-items: center;
    }

    .message {
      padding-right: 0;
      text-align: center;
    }
  }
</style>
