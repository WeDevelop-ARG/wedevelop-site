<template>
  <li class="service">
    <img :src="service.photo" :alt="service.name" />
    <h3>{{ service.name }}</h3>
    <p class="description" v-html="service.description"></p>
  </li>
</template>

<script>
export default {
  name: 'Service',
  props: {
    service: Object
  }
}
</script>

<style scoped>
  h3 {
    margin: 1em 0 .8em 0;
    padding-bottom: 1em;
    color: #272A40;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 0.6px;
    line-height: 40px;
    border-bottom: 1px solid #F0F1F5;
  }

  img {
    height: 40px;
  }

  .service {
    width: 33%;
    margin-bottom: 4.5em;
    padding: 0 3em;
    text-align: left;
  }

  @media (max-width: 1400px) {
    .service {
      padding: 0 2em;
    }
  }

  @media (max-width: 1200px) {
    h3 {
      font-size: 25px;
      padding-bottom: .5em;
    }

    img {
      height: 30px;
    }

    .service {
      padding: 1.5em;
    }
  }

  .description {
    margin: 0;
    color: #A7AFC3;
    font-size: 18px;
    letter-spacing: 0.6px;
    line-height: 35px;
  }
</style>
