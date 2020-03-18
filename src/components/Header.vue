<template>
  <header class="header">
    <Navbar :scrollDuration="scrollDuration" />
    <h1>Your digital transformation team</h1>
    <span class="team-description">Your creative, intelligent, independent, extended development team when you need sophisticated digital transformation</span>
    <div class="action-container">
      <div class="button-action-container">
        <a href="#contact" class="action-button" v-smooth-scroll="{ duration: scrollDuration, offset: -50 }">Start a project with us</a>
        <a href="#testimony" class="video-button" v-smooth-scroll="{ duration: scrollDuration, offset: 0 }">Watch testimonial video</a>
      </div>
      <a href="#who" class="down-button" v-smooth-scroll="{ duration: scrollDuration, offset: -100 }">
        <i class="fal fa-chevron-down"></i>
      </a>
    </div>
      <div class='proyects'>
        <img class="proyect-image" src="../assets/img/Moneda2.svg" alt="moneda">
        <img class="proyect-image" src="../assets/img/Ballwiz2.svg" alt="ballwiz">
        <img class="proyect-image copa" src="../assets/img/COPA.png" alt="COPA">
      </div>
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
    margin: 244px 0 0 0;
    color: #FFFFFF;
    font-size: 60px;
    font-weight: 900;
    letter-spacing: 1.2px;
    line-height: 72px;
    text-align: center;
  }

  .team-description {
    margin: 27px 10em 0 10em;
    color: #FFFFFF;
    font-size: 24px;
    letter-spacing: 0.48px;
    line-height: 40px;
    text-align: center;
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url('../assets/img/header-background.jpg') no-repeat center center;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.35);
    background-blend-mode: soft-light;
    height: 822px;
  }

  .action-container {
    display: flex;
    flex-direction: column;
    margin-top: 103px;
    margin-bottom: 131px;
  }

  .button-action-container{
    display: flex;
  }

  .action-button {
    height: 60px;
    width: 340px;
    padding: 1em 3em;
    background-color: #45DA60;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
  }

  .video-button {
    height: 60px;
    width: 340px;
    margin-left: 35px;
    padding: 1em 1.5em 1em 1.5em;
    padding-top: calc(1em - 2px);
    padding-bottom: calc(1em - 2px);
    border: 2px solid #45DA60;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 0.36px;
    line-height: 22px;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
  }

  .down-button {
    color: #fff;
    font-size: 40px;
    margin-top: 65px;
  }

  .proyects {
    position: absolute;
    display: flex;
    top: 756px;
    align-self: center;
    height: 154px;
    width: 1060px;
    background-color: #F7F9FC;
    justify-content: space-around;
    align-items: center;
  }

  .proyect-image {
    display: inline-block;
    height: 25px;
    width: 130px;
  }

  .copa{
    height: 31px;
    width: 123px;
  }

@media(max-width: 1920px) {
  .team-description {
    width: 50vw;
  }
}

@media(max-width: 1440px) {
  .team-description {
    width: auto;
  }
}

@media (max-width: 1200px) {
  .header {
      height: auto;
  }

  h1 {
    font-size: 50px;
  }

  .team-description {
    align-self: center;
    width: 70vw;
    font-size: 20px;
  }
}

@media (max-width: 1024px) {
  h1 {
    font-size: 46px;
  }

  .proyects {
    width: 100%;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 38px;
    margin-top: 144px;
  }

  .team-description {
    align-self: center;
    width: 70vw;
    font-size: 20px;
  }

  .action-container {
    margin-top: 40px;
  }

  .button-action-container {
    flex-direction: column;
    align-items: center;
  }

  .action-button {
    margin-bottom: 40px;
  }

  .video-button {
    margin: 0;
  }
}

@media (max-width: 576px) {
  h1 {
    margin: 3em 0 0 0;
  }

  .team-description {
    margin-top: 0;
  }

  .action-container {
    margin: 20px 0 0 0;
  }

  .down-button{
    margin-top: 10px;
  }

  .proyects {
    position: relative;
    top: 100%;
  }

  .proyect-image {
    width: 80px;
  }

  .copa {
    height: 20px;
  }
}
</style>
