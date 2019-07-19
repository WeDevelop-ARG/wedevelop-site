<template>
  <li class="member">
    <img :src="member.photo" :alt="member.name" />
    <h5>{{ member.name }}</h5>
    <p class="position">{{ member.position }}</p>
    <a :href="member.linkedin">
      <div class="linkedin-icon">
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: 'Member',
  props: {
    member: Object
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
    display: flex;
    flex-direction: column;
    align-items: center;
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

  .linkedin-icon {
    width: 38px;
    height: 38px;
    background-image: url(../assets/img/linkedin.svg);
    transition: background-image 0.2s ease-in-out;
  }

  .linkedin-icon:hover {
    background-image: url(../assets/img/linkedin-hover.svg)
  }
</style>
