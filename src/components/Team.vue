<template>
  <div class="team">
    <h2>Our Team</h2>
    <ul class="member-list">
      <Member v-for="member in members" v-bind:key="member.id" v-bind:member="member" />
    </ul>
    <h3>Want to join us?</h3>
    <p>We love to meet new people and have their ideas come alive in the projects we work.<br>If you share our <span class="highlight-paragraph">passion of working creatively and professionally</span>, please email us your resume or LinkedIn profile to</p>
    <h4>jobs@wedevelop.me</h4>
  </div>
</template>

<script>
import Member from './Member.vue'

export default {
  name: 'Team',
  components: {
    Member
  },
  data: function () {
    return {
      members: [
        {
          id: 1,
          name: 'Mauricio Pautasso',
          position: 'Co-Founder & CEO',
          photo: require('../assets/img/Mauricio-Pautasso.svg'),
          linkedin: 'https://www.linkedin.com/in/mauriciopautasso'
        },
        {
          id: 2,
          name: 'Abel Osorio',
          position: 'Co-Founder & CTO',
          photo: require('../assets/img/Abel-Osorio.svg'),
          linkedin: 'https://www.linkedin.com/in/abelosorio89'
        },
        {
          id: 3,
          name: 'Serguey Shevtsov',
          position: 'Full Stack Developer',
          photo: require('../assets/img/Sergio-Shevtsov.svg'),
          linkedin: 'https://www.linkedin.com/in/serguey-shevtsov'
        },
        {
          id: 4,
          name: 'Armando Graterol',
          position: 'Frontend Developer',
          photo: require('../assets/img/Armando-Graterol.svg'),
          linkedin: 'https://www.linkedin.com/in/armandograterol/'
        },
        {
          id: 5,
          name: 'Agostina Giordano',
          position: 'UX UI Designer',
          photo: require('../assets/img/Agostina-Giordano.svg'),
          linkedin: 'https://www.linkedin.com/in/agosgio/'
        },
        {
          id: 6,
          name: 'Ramiro Demasi',
          position: 'Full Stack Developer',
          photo: require('../assets/img/Ramiro-Demasi.svg'),
          linkedin: 'https://www.linkedin.com/in/ramiro-demasi-8013b256'
        }
      ]
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

  .team {
    margin-top: 10em;
    padding: 8em 0;
    background-color: #F7F9FC;
  }

  .member-list {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
</style>
