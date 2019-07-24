<template>
  <li class="skill">
    <img class="skill-logo" :src="skill.photo" :alt="skill.name" />
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
  }

  .skill-logo {
    transition: filter 0.3s ease-in-out;
    filter: grayscale(1);
  }

  .skill:hover .skill-logo {
    filter: grayscale(0);
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
    transition: color 0.3s ease-in-out;
  }

  .skill:hover p {
    color: #45DA60;
  }
</style>
