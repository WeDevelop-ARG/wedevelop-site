<template>
  <li class="member">
    <img :src="member.photo" class="member-photo" :alt="member.name" />
    <h5>{{ member.name }}</h5>
    <p class="position">{{ member.position }}</p>
    <a :href="member.linkedin">
      <img class="linkedin-icon" src="../assets/img/linkedin.svg">
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

  .member-photo {
    width: 152px;
    border-radius: 50%;
  }

  .position {
    margin: 0 0 .6em 0;
    color: #A7AFC3;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.5px;
  }

  @media (max-width: 1200px) {
    h5 {
      font-size: 18px;
    }

    .position {
      font-size: 15px;
    }

    .member-photo {
      width: 120px;
    }
  }

  .linkedin-icon {
    filter: grayscale(1);
    transition: filter 0.3s ease-in-out;
  }

  .linkedin-icon:hover {
    filter: grayscale(0);
  }
</style>
