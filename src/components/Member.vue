<template>
  <li class="member">
    <img :src="member.photo" :alt="member.name" />
    <h5>{{ member.name }}</h5>
    <p class="position">{{ member.position }}</p>
    <a 
      :href="member.linkedin"
      @mouseover="linkedinIcon = require('../assets/img/linkedin-hover.svg')"
      @mouseleave="linkedinIcon = require('../assets/img/linkedin.svg')"
    >
      <img :src="linkedinIcon" :alt="member.name + ' linkedin'">
    </a>
  </li>
</template>

<script>
export default {
  name: 'Member',
  props: {
    member: Object
  },
  data () {
    return {
      isHoveredOn: false,
      linkedinIcon: require('../assets/img/linkedin.svg')
    }
  }
}
</script>

<style scoped>
  h5 {
    margin: 1.3em 0 .4em 0;
    color: #272A40;
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 1.2px;
  }

  .member {
    width: 33%;
    margin-bottom: 4.5em;
  }

  .position {
    margin: 0 0 .6em 0;
    color: #A7AFC3;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.5px;
  }
</style>
