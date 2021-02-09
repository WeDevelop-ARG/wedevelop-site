<template>
  <nav
    class="navbar"
    :class="{'filled-navbar': fillNavbar}"
  >
    <span
      class="mobile-toggle"
      :class="{ 'active-toggle': toggleMenu }"
      v-on:click="onToggle"
    >
      <i
        class="fal"
        :class="{
          'fa-bars': !toggleMenu,
          'fa-times': toggleMenu
        }"
        />
    </span>
    <a href="#app" class="nav-brand" v-smooth-scroll="{ duration: scrollDuration }">
      <img src="../assets/img/wedevelop-logo.svg" alt="WeDevelop">
    </a>
    <ul class="nav-link-list" :class="{'active-menu': toggleMenu}" >
      <span class="separator upper-separator"></span>
      <li v-on:click="onToggle">
        <a href="#services" class="nav-link" v-smooth-scroll="{ duration: scrollDuration, offset: -100 }">What we do</a>
      </li>
      <li v-on:click="onToggle">
        <a href="#tech" class="nav-link" v-smooth-scroll="{ duration: scrollDuration, offset: -50 }">Technologies</a>
      </li>
      <li v-on:click="onToggle">
        <a href="#who" class="nav-link" v-smooth-scroll="{ duration: scrollDuration, offset: -100 }">About us</a>
      </li>
      <li v-on:click="onToggle">
        <a href="#reviews" class="nav-link" v-smooth-scroll="{ duration: scrollDuration, offset: -200 }">Reviews</a>
      </li>
      <li v-on:click="onToggle">
        <a href="#contact" class="nav-link" v-smooth-scroll="{ duration: scrollDuration, offset: -75 }">Contact</a>
      </li>
      <li v-on:click="onToggle">
        <a href="#contact" class="start-project" v-smooth-scroll="{ duration: scrollDuration, offset: -75 }">Leave us a message</a>
      </li>
      <span class="separator bottom-separator"></span>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    scrollDuration: Number
  },
  data () {
    return {
      fillNavbar: false,
      toggleMenu: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      // Get the current scroll position
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      // Here we determine whether we need to fill or hide the navbar
      this.fillNavbar = currentScrollPosition > 10
    },

    onToggle () {
      if (window.innerWidth <= 576) {
        this.toggleMenu = !this.toggleMenu

        if (this.toggleMenu) {
          document.documentElement.style.overflow = 'hidden'
          document.body.scroll = 'no'
        } else {
          document.documentElement.style.overflow = 'scroll'
          document.body.scroll = 'yes'
        }
      }
    }
  }
}
</script>

<style scoped>
  .navbar {
    display: flex;
    position: fixed;
    width: 100%;
    justify-content: space-between;
    padding: 2.5em .6em 0 .6em;
    transition: all 0.3s linear;
  }

  .mobile-toggle {
    display: none;
    font-size: 30px;
    color: #fff;
    cursor: pointer;
  }

  .filled-navbar {
    padding: 1.2em .6em 1em .6em;
    background-color: #272A40;
    z-index: 1;
  }

  .nav-brand {
    margin-left: 3.1em;
  }

  @media (max-width: 1200px) {
    .nav-brand {
      margin-left: 1em;
    }
  }

  .nav-brand img {
    width: 200px;
  }

  .nav-link-list {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .nav-link {
    margin: 0 2.5em 0 0;
    color: #fff;
    font-size: 16px;
    letter-spacing: 1.45px;
    text-decoration: none;
  }

  .start-project{
    margin: 0 2.5em 0 0;
    height: 46px;
    padding: 1em 3em 1em 3em;
    padding-top: calc(1em - 2px);
    padding-bottom: calc(1em - 2px);
    border: 2px solid #45DA60;
    color: #FFFFFF;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.26px;
    line-height: 16px;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.5s ease-in-out;
  }

  .filled-navbar .start-project:hover {
    background-color: #45DA60;
  }

  .filled-navbar .nav-link {
    font-weight: 500;
  }

  .filled-navbar .nav-link:hover {
    color: #45DA60;
    font-weight: bold;
    font-weight: 700;
  }

  @media (max-width: 1280px) {
    .start-project {
      margin-right: 0;
      border: 0;
      text-align: start;
      transition: all 0s;
      text-transform: initial;
      font-size: 16px;
      padding: 0 0 0 0;
    }

    .filled-navbar .start-project:hover {
    background-color: rgba(255, 255, 255, 0.001);
    color: #45DA60;
    font-weight: bold;
    font-weight: 700;
  }
}

@media (max-width: 576px) {
  .navbar {
    padding: 2em 1.5em 0 1.5em;
    z-index: 2;
  }

  .mobile-toggle {
    display: inline-block;
  }

  .filled-navbar {
    padding: 0.7em 1.5em 0.2em 1.5em;
  }

  .nav-link-list {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: url('../assets/img/menu-background.jpg') no-repeat center center;
    background-size: cover;
  }

  .nav-link {
    margin: 0;
    font-size: 24px;
    letter-spacing: 2.18px;
  }

  .active-toggle {
    z-index: 3;
  }

  .active-menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
  }

  .separator {
    height: 4px;
    background-color: #45DA60;
  }

  .upper-separator {
    margin-bottom: .8em;
    width: 24%;
  }

  .bottom-separator {
    margin-top: 2.8em;
    width: 13.5%;
  }

  .nav-brand img {
    width: 155px;
  }

  .nav-link-list li {
    margin-top: 2em;
  }

  .nav-link-list li:first-child {
    margin-top: 0;
  }

  .start-project {
    font-size: 24px;
    font-weight: 500px;
  }
}
</style>
