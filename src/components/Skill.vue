<template>
  <li class="skill">
    <img :src="skill.photo" :alt="skill.name" />
    <p>{{ skill.name }}</p>
  </li>
</template>

<script>
export default {
  name: 'Skill',
  props: {
    skill: Object
  }
}
</script>

<style scoped>
  .skill {
    width: 25%;
    margin-bottom: 6em;
    transition: filter 0.3s linear;
  }

  .skill:hover {
    filter: brightness(0) saturate(100%) invert(88%) sepia(56%) saturate(1435%) hue-rotate(56deg) brightness(96%) contrast(77%); 
  }

  img {
    margin-bottom: 2.2em;
    height: 95px;
  }

  p {
    margin: 0;
    color: #A7AFC3;
    font-size: 18px;
    letter-spacing: 0.6px;
    line-height: 35px;
  }
</style>
