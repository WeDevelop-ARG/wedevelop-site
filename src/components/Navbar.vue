<template>
  <nav
    class="navbar"
    :class="{'filled-navbar': fillNavbar}"
  >
    <a href="#app" class="nav-brand" v-smooth-scroll>
      <img src="../assets/img/wedevelop-logo.svg" alt="WeDevelop">
    </a>
    <ul class="nav-link-list">
      <li>
        <a href="#who" class="nav-link" v-smooth-scroll="{ offset: -100 }">About us</a>
      </li>
      <li>
        <a href="#services" class="nav-link" v-smooth-scroll="{ offset: -100 }">Services</a>
      </li>
      <li>
        <a href="#how" class="nav-link" v-smooth-scroll="{ offset: -100 }">How we work</a>
      </li>
      <li>
        <a href="#tech" class="nav-link" v-smooth-scroll="{ offset: -50 }">Technologies</a>
      </li>
      <li>
        <a href="#reviews" class="nav-link" v-smooth-scroll="{ offset: -100 }">Reviews</a>
      </li>
      <li>
        <a href="#contact" class="nav-link" v-smooth-scroll="{ offset: -50 }">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      fillNavbar: false
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

  .filled-navbar .nav-link {
    font-weight: 500;
  }

  .filled-navbar .nav-link:hover {
    color: #45DA60;
  }
</style>
