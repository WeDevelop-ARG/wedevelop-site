<template>
  <header class="header">
    <Navbar :scrollDuration="scrollDuration" />
    <h1>We create, we innovate, we develop.</h1>
    <a href="#contact" class="action-button" v-smooth-scroll="{ duration: scrollDuration, offset: -50 }">Start a project with us</a>
    <a href="#who" class="down-button" v-smooth-scroll="{ duration: scrollDuration, offset: -100 }">
      <i class="fal fa-chevron-down"></i>
    </a>
  </header>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  name: 'Header',
  props: {
    scrollDuration: Number
  },
  components: {
    Navbar
  }
}
</script>

<style scoped>
  h1 {
    margin: 6em 0 1.1em 0;
    font-size: 60px;
    font-weight: 900;
    letter-spacing: 0.76px;
    line-height: 46px;
    color: #fff;
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url('../assets/img/header-background.png') no-repeat center center;
    background-size: cover;
  }

  .action-button {
    margin-bottom: 7em;
    padding: 1em 3em;
    background-color: #45DA60;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
  }

  .down-button {
    margin-bottom: 2.5em;
    color: #fff;
    font-size: 40px;
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 50px;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 38px;
    }
  }

  @media (max-width: 576px) {
    h1 {
      margin: 5.4em 0 2.8em 0;
    }

    .header {
      background: url('../assets/img/mobile-header-background.png') no-repeat center center;
      background-size: cover;
    }

    .action-button {
      margin-bottom: 4em;
      padding: 1.1em 1.7em;
      font-size: 14px;
    }

    .down-button {
      margin-bottom: 2.3em;
      font-size: 30px;
    }
  }
</style>
