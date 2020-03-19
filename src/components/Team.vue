<template>
  <div class="team alt-section" id="team">
    <h2>Our Team</h2>
    <swiper class="carousel" :options="swiperOption">
      <swiper-slide  v-for="(member, i) in members" v-bind:key="i">
        <Member v-bind:member="member" />
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <h3 id="join">Want to join us?</h3>
    <p>We love to meet new people and have their ideas come alive in the projects we work.<br>If you share our <span class="highlight-paragraph">passion of working creatively and professionally</span>, please email us your resume or LinkedIn profile to</p>
    <h4>jobs@wedevelop.me</h4>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Member from './Member.vue'
import { getMemberList } from '../mixins/members/getMemberList'

export default {
  name: 'Team',
  components: {
    Member,
    swiper,
    swiperSlide
  },
  data: function () {
    return {
      members: getMemberList(),
      swiperOption: {
        slidesPerView: 'auto',
        allowTouchMove: false,
        lazy: {
          loadPrevNext: true,
          loadPrevNextAmount: 6
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>

<style scoped>
  h2 {
    margin: 0 0 1.8em 0;
    color: #272A40;
    font-size: 50px;
    font-weight: 900;
    letter-spacing: 1px;
    line-height: 60px;
  }

  h3 {
    color: #272A40;
    font-size: 32px;
    font-weight: 900;
    letter-spacing: 0.6px;
    line-height: 40px;
  }

  h4 {
    color: #45DA60;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0.8px;
    line-height: 35px;
  }

  p {
    margin: 0;
    color: #A7AFC3;
    font-size: 18px;
    letter-spacing: 0.6px;
    line-height: 35px;
    text-align: center;
  }

  .carousel{
    position: relative;
    padding-bottom: 120px;
    margin-left: 73px;
    z-index: 0;
  }

   .swiper-button-prev {
    position: absolute;
    left: 0;
    margin-top: 62px;
    margin-left: 50px;
    top: 75%;
    outline:none;
    filter: brightness(0);
  }

  .swiper-button-next {
    position: absolute;
    margin-top: 62px;
    right: 0;
    margin-right: 157px;
    top: 75%;
    outline:none;
    filter: brightness(0);
  }

  .swiper-slide {
    width: 416px;
    height: 535px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 1200px) {
    h2 {
      font-size: 40px;
    }

    h3 {
      font-size: 25px;
    }

    h4 {
      font-size: 20px;
    }

    p {
      padding: 0 2em;
    }
  }

  .team {
    margin-top: 10em;
    padding: 8em 0;
  }

  .member-list {
    display: flex;
    overflow: scroll;
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  @media (max-width: 768px) {
  .swiper-slide {
        justify-content: flex-start;
      }

  .carousel {
      margin-left: auto;
    }

  .swiper-button-prev {
    margin-left: 30px;
  }

  .swiper-button-next {
      margin-right: 30px;
    }
  }

  @media (max-width: 576px) {
    h2 {
      font-size: 30px;
    }

    h3 {
      margin: 2.5em 0 1em 0;
    }

    h4 {
      margin: 1em 0 0 0;
    }

    .team {
      margin-top: 3.5em;
      padding: 3.8em 0;
    }

    .member-list {
      flex-wrap: nowrap;
      overflow-x: auto;
    }

    p {
      padding: 0 1.4em;
      font-size: 16px;
      line-height: 28px;
    }
  }
</style>
