<template>
  <div class="testimony" id="testimony">
    <div class='text'>
      <div class='title'>Making products evolve</div>
      <div class='quote'>“We didn’t want to design our business model around the scheduling and check-in platforms. We wanted the scheduling and check-in platform to evolve around our business”</div>
      <div class='quoter'>Charles Campbell</div>
      <div class='quoter-info'>General Manager - COPA Soccer Training Center</div>
    </div>
    <div class='video'>
      <iframe src="https://player.vimeo.com/video/381534821" :width="getVideoWidth()" :height="getVideoHeight()" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
const MOBILE_BREAKPOINT = 576

export default {
  name: 'Testimony',
  methods: {
    getVideoWidth: function () {
      return (innerWidth < MOBILE_BREAKPOINT) ? 360 : 551
    },

    getVideoHeight: function () {
      return (innerWidth < MOBILE_BREAKPOINT) ? 202.50 : 320
    }
  }
}
</script>

<style scoped>
.testimony {
  display: flex;
  padding-top: 228px;
  margin: 0 auto 0 auto;
  width: 80%;
  justify-content: space-around;
}

.text{
  text-align: start;
  width: 504px
}

.title {
  color: #272A40;
  font-size: 40px;
  font-weight: 900;
  letter-spacing: 0.8px;
  line-height: 48px;
  margin-bottom: 40px;
}

.quote {
  color: #A7AFC3;
  font-size: 18px;
  letter-spacing: 0.63px;
  line-height: 34px;
  margin-bottom: 30px;
}

.quoter {
  color: #272A40;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 0.44px;
  line-height: 27px;
  margin-bottom: 10px;
}

.quoter-info {
  color: #A7AFC3;
  font-size: 16px;
  letter-spacing: 0.56px;
  line-height: 34px;
}

@media (max-width: 1280px) {
  .testimony {
    width: 90%;
  }
}

  @media (max-width: 1024px) {
  .testimony {
    flex-direction: column;
    align-items: center;
  }

  .text {
    margin-bottom: 40px;
    width: 80%;
  }
}

@media (max-width: 576px){
  .testimony {
    padding-top: 100px;
  }
}
</style>
