<template>
  <div class="clients" id="reviews">
    <div class="content">
      <h2>Where work happens</h2>
      <p>We’ve worked on a <span class="highlight-paragraph">variety of projects with a wide range of clients</span>, each one with a unique problem set and perspective. We continually improve our process and do our best work in strong partnerships with them.</p>
      <a href="https://clutch.co/profile/wedevelop" class="action-button">See more on Clutch</a>
    </div>
    <div class="content testimonies">
      <a href="https://clutch.co/profile/wedevelop">
        <img class="clutch-badge" src="https://clutch.co/badges/2018/2017_We_Deliver_White.png" />
      </a>
      <Slider
        width="100%"
        :control-btn="false"
        :indicators="false"
        :autoplay="false"
        animation="fade"
        v-model="sliderIndex"
      >
        <SliderItem v-for="(review, i) in reviews" v-bind:key="i" :style="sliderItemStyles">
          <h5>{{ review.name }}</h5>
          <p class="position">{{ review.position }} - {{ review.companyName }}</p>
          <p class="testimony">“{{ review.testimony }}”.</p>
          <a :href="review.link" class="read-more">Read more</a>
        </SliderItem>
      </Slider>
      <div class="client-logo-section">
        <img
          class="client-logo"
          :class="{'client-logo-active': sliderIndex === i}"
          v-for="(review, i) in reviews"
          v-bind:key="i"
          :src="review.logo"
          :alt="review.companyName"
          @click="moveToIndex(i)"
        >
      </div>
    </div>
  </div>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider'
import BallwizLogo from '../assets/img/ballwiz.svg'
import MonedaLogo from '../assets/img/moneda.svg'

export default {
  name: 'Clients',
  components: {
    Slider,
    SliderItem
  },
  data () {
    return {
      sliderIndex: 0,
      reviews: [
        {
          name: 'Darren Liu',
          position: 'Founder',
          companyName: 'Ballwiz',
          testimony: 'They’re willing to engage with a problem to figure it out rather than waiting to be told what to do',
          logo: BallwizLogo,
          link: 'https://clutch.co/profile/wedevelop#review-817718'
        },
        {
          name: 'Hugo Troche',
          position: 'CTO',
          companyName: 'Moneda Lending',
          testimony: 'The project cost about half of what it would have had we hired local engineers',
          logo: MonedaLogo,
          link: 'https://clutch.co/profile/wedevelop#review-849998'
        }
      ],
      sliderItemStyles: {
        zIndex: 0
      }
    }
  },
  methods: {
    moveToIndex (index) {
      this.sliderIndex = index
    }
  }
}
</script>

<style scoped>
  h2 {
    margin: 0 0 .8em 0;
    padding-right: 4em;
    color: #272A40;
    font-size: 50px;
    font-weight: 900;
    letter-spacing: 1px;
    text-align: left;
    line-height: 60px;
  }

  h5 {
    margin: 1.8em 0 .5em 0;
    font-size: 22px;
    font-weight: 900;
    letter-spacing: 0.44px;
    line-height: 27px;
    color: #272A40;
  }

  p {
    margin-top: 0;
    margin-bottom: 2em;
    padding-right: 2.1em;
    color: #A7AFC3;
    font-size: 18px;
    letter-spacing: 0.6px;
    text-align: left;
    line-height: 34px;
  }

  .clients {
    display: flex;
    margin-top: 8.5em;
    padding: 0 10em;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
  }

  .slider-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .testimonies {
    padding-left: 4em;
  }

  .clutch-badge {
    height: 95px;
    width: 95px;
  }

  .action-button {
    width: 70%;
    padding: 1em 0;
    color: #8224E3;
    border: 1px solid #8224E3;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.36px;
    text-transform: uppercase;
    text-decoration: none;
  }

  .position {
    margin-bottom: 1em;
    font-size: 16px;
    letter-spacing: 0.56px;
    line-height: 34px;
  }

  .testimony {
    margin-bottom: 1em;
    padding: 0;
    color: #272A40;
    font-size: 20px;
    letter-spacing: 0.7px;
    line-height: 34px;
  }

  .read-more {
    align-self: flex-end;
    margin-bottom: 2.2em;
    color: #8224E3;
    font-weight: 700;
    font-size: 18px;
    line-height: 34px;
    letter-spacing: 0.64px;
    text-decoration: none;
  }

  .client-logo-section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding-top: 3.8em;
    border-top: 2px solid #F0F1F5;
  }

  .client-logo {
    filter: grayscale(1);
    cursor: pointer;
    height: fit-content;
    transition: filter 0.5s ease-in-out;
  }

  .client-logo-active {
    filter: grayscale(0);
    cursor: initial;
  }

  @media (max-width: 1200px) {
    h2 {
      font-size: 40px;
    }

    .clients {
      padding: 0 6em;
    }

    .clutch-badge {
      width: 75px;
      height: 75px;
    }
  }

  @media (max-width: 576px) {
    h2 {
      padding-right: 0;
      margin: 0 0 1em 0;
      text-align: center;
      font-size: 30px;
      line-height: 0.6px;
    }

    h5 {
      margin: 1.6em 0 .5em 0;
      font-size: 20px;
      letter-spacing: 0.4px;
    }

    p {
      padding-right: 0;
      text-align: center;
      font-size: 16px;
      letter-spacing: 0.56px;
      line-height: 28px;
    }

    .clients {
      flex-direction: column;
      margin-top: 5em;
      padding: 0 1.5em;
    }

    .content {
      align-items: center;
      width: 100%;
    }

    .action-button {
      width: 74%;
      font-size: 14px;
    }

    .testimonies {
      margin-top: 6em;
      padding-left: 0;
    }

    .clutch-badge {
      width: 95px;
      height: 95px;
    }

    .slider {
      height: 250px!important;
    }
    .slider-item {
      align-items: center;
    }

    .position {
      font-size: 14px;
    }

    .testimony {
      font-size: 16px;
      letter-spacing: 0.56px;
      line-height: 28px;
      margin-bottom: 0;
    }

    .read-more {
      display: none;
      margin: 0;
    }

    .client-logo-section {
      padding-top: 2em;
    }
  }
</style>
