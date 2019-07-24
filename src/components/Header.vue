<template>
  <header class="header">
    <Navbar />
    <h1>We create, we innovate, we develop.</h1>
    <a href="#contact" class="action-button" v-smooth-scroll="{ offset: -50 }">Start a project with us</a>
    <a href="#who" class="down-button" v-smooth-scroll="{ offset: -100 }">
      <i class="fal fa-chevron-down"></i>
    </a>
  </header>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  name: 'Header',
  components: {
    Navbar
  }
}
</script>

<style scoped>
  h1 {
    margin: 4.4em 0 1.1em 0;
    font-size: 60px;
    font-weight: 900;
    color: #fff;
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 50px;
    }
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
</style>
