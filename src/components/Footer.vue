<template>
  <div class="footer">
    <div class="col copyright-col">
      <div>
        <router-link
          to="/#app"
          v-smooth-scroll="{ duration: scrollDuration }"
        >
          <img src="../assets/img/wedevelop-logo.svg" alt="WeDevelop">
        </router-link>
        <p>© 2019. All rights reserved.</p>
      </div>
      <div
        class="clutch-widget"
        data-url="https://widget.clutch.co"
        :data-widget-type="windowWidth <= 576 ? 1 : 2"
        data-height="50"
        data-darkbg="1"
        data-clutchcompany-id="810049"
      ></div>
    </div>
    <div class="nav">
      <div class="col nav-col">
        <h4>About us</h4>
        <router-link
          to="/#who"
          v-smooth-scroll="{ duration: scrollDuration, offset: isNotHome ? 300 : -100 }"
        >
          Who we are
        </router-link>
        <router-link
          to="/#team"
          v-smooth-scroll="{ duration: scrollDuration, offset: isNotHome ? 750 : -50 }"
        >
          Our Team
        </router-link>
        <router-link
          to="/#join"
          v-smooth-scroll="{ duration: scrollDuration, offset: isNotHome ? 1050 : -150 }"
        >
          Join Us
        </router-link>
      </div>
      <div class="col nav-col">
        <h4>Services</h4>
        <router-link
          to="/#services"
          v-smooth-scroll="{ duration: scrollDuration, offset: isNotHome ? 1000 : -100 }"
        >
          Web Development
        </router-link>
        <router-link
          to="/#services"
          v-smooth-scroll="{ duration: scrollDuration, offset: isNotHome ? 1000 : -100 }"
        >
          Consulting Services
        </router-link>
        <router-link
          to="/#services"
          v-smooth-scroll="{ duration: scrollDuration, offset: isNotHome ? 1000 : -100 }"
        >
          Outsourcing
        </router-link>
      </div>
      <div class="col nav-col nav-col-last">
        <router-link
          to="/#how"
          v-smooth-scroll="{ duration: scrollDuration, offset: -100 }"
        >
          <h4>How we work</h4>
        </router-link>
        <router-link
          to="/#tech"
          v-smooth-scroll="{ duration: scrollDuration, offset: isNotHome ? 450 : -50 }"
        >
          <h4>Technologies</h4>
        </router-link>
        <router-link
          to="/#reviews"
          v-smooth-scroll="{ duration: scrollDuration, offset: isNotHome ? 1000 : -100 }"
        >
          <h4>Reviews</h4>
        </router-link>
        <router-link
          to="/#contact"
          v-smooth-scroll="{ duration: scrollDuration, offset: isNotHome ? 1250 : -50 }"
        >
          <h4>Contact</h4>
        </router-link>
        <router-link to="/privacy-policy">
          <h4>Privacy Policy</h4>
        </router-link>
      </div>
      <div class="nav-mobile">
        <router-link
          to="/#who"
          v-smooth-scroll="{ duration: scrollDuration, offset: isNotHome ? 300 : -100 }"
        >
          <h4>About us</h4>
        </router-link>
        <router-link
          to="/#join"
          v-smooth-scroll="{ duration: scrollDuration, offset: isNotHome ? 750 : -150 }"
        >
          <h4>Join us</h4>
        </router-link>
        <router-link
          to="/#contact"
          v-smooth-scroll="{ duration: scrollDuration, offset: isNotHome ? 850 : -50 }"
        >
          <h4>Contact</h4>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      windowWidth: 0
    }
  },
  props: {
    scrollDuration: Number,
    isNotHome: Boolean
  },
  mounted () {
    let clutchScript = document.createElement('script')
    clutchScript.setAttribute('src', 'https://widget.clutch.co/static/js/widget.js')
    clutchScript.async = true
    document.head.appendChild(clutchScript)
    this.windowWidth = window.innerWidth
  }
}
</script>

<style scoped>
  a {
    color: #A7AFC3;
    font-size: 16px;
    letter-spacing: 1.4px;
    text-align: left;
    text-decoration: none;
    margin-bottom: 1em;
  }

  h4 {
    margin: 0 0 1.5em 0;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 1.82px;
    text-align: left;
    color: #fff;
  }

  p {
    margin: 0 0 38px 0;
    color: #A7AFC3;
    font-size: 14px;
    letter-spacing: 0.5px;
    line-height: 34px;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 22.5em 10.5em 9.5em 10.5em;
    background-color: #272A40;
  }

  .content {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    padding: 0 7em;
  }

  .nav {
    display: flex;
  }

  .nav-col {
    margin-right: 8em;
  }

  .nav-mobile {
    display: none;
  }

  @media (max-width: 1200px) {
    a {
      font-size: 14px;
    }

    h4 {
      font-size: 18px;
    }

    p {
      margin: 0 0 2em 0;
    }

    .footer {
      padding: 20em 6em 7em 6em;
    }

    .nav-col {
      margin-right: 5em;
    }
  }

  .col {
    display: flex;
    flex-direction: column;
    width: max-content;
    text-align: left;
  }

  .nav-col-last {
    margin-right: 0;
  }

  .nav-col-last a {
    margin-bottom: 0;
  }

  @media (max-width: 576px) {
    h4 {
      font-size: 16px;
    }

    a {
      letter-spacing: 1.45px;
    }

    p {
      font-size: 12px;
      letter-spacing: 0.42px;
    }

    img {
      width: 125px;
    }

    .copyright-col {
      width: 100%;
      order: 2;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .nav {
      order: 1;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .footer {
      padding: 4.4em 1.5em;
      flex-direction: column;
    }

    .nav-col {
      display: none;
    }

    .nav-mobile {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: .5em;
    }

    .clutch-widget {
      width: 130px;
    }
  }
</style>
