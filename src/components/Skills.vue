<template>
  <div class="skills" id="tech">
    <h2>We have all the skills you need</h2>
    <ul class="skill-list">
      <Skill v-for="skill in skills" v-bind:key="skill.id" v-bind:skill="skill" />
    </ul>
  </div>
</template>

<script>
import Skill from './Skill.vue'

export default {
  name: 'Skills',
  components: {
    Skill
  },
  data: function () {
    return {
      skills: [
        {
          id: 1,
          name: 'React',
          photo: require('../assets/img/react.svg')
        },
        {
          id: 2,
          name: 'Node.js',
          photo: require('../assets/img/node.svg')
        },
        {
          id: 3,
          name: 'Python',
          photo: require('../assets/img/python.svg')
        },
        {
          id: 4,
          name: 'Amazon Web Services',
          photo: require('../assets/img/aws.svg')
        },
        {
          id: 5,
          name: 'Ruby on Rails',
          photo: require('../assets/img/ruby.svg')
        },
        {
          id: 6,
          name: 'PostgreSQL',
          photo: require('../assets/img/postgresql.svg')
        },
        {
          id: 7,
          name: 'GraphQL',
          photo: require('../assets/img/graphql.svg')
        },
        {
          id: 8,
          name: 'MongoDB',
          photo: require('../assets/img/mongodb.svg')
        }
      ]
    }
  }
}
</script>

<style scoped>
  h2 {
    margin: 0 0 2.4em 0;
    color: #272A40;
    font-size: 50px;
    font-weight: 900;
    letter-spacing: 1px;
    line-height: 60px;
  }

  .skills {
    margin-top: 16.2em;
  }

  .skill-list {
    display: flex;
    flex-wrap: wrap;
    padding: 0 8em;
    margin: 0;
    list-style-type: none;
  }
</style>
