<template>
  <div id="app">
    <Header />
    <Introduction />
    <Team />
    <Services />
    <Methodologies />
    <Skills />
  </div>
</template>

<script>
import Header from './components/Header'
import Introduction from './components/Introduction'
import Team from './components/Team'
import Services from './components/Services'
import Methodologies from  './components/Methodologies'
import Skills from './components/Skills'

export default {
  name: 'app',
  components: {
    Header,
    Introduction,
    Team,
    Services,
    Methodologies,
    Skills
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
</style>
