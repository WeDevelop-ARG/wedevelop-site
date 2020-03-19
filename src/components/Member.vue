<template>
<a :href="member.linkedin">
  <div class="member">
    <img :src="member.photo" class="photo" :alt="member.name" />
    <div class="data">
      <div class="name-postion-container">
        <div class="name">{{ member.name }}</div>
        <div class="position">{{ member.position }}</div>
      </div>
       <div v-if="member.linkedin" class='linkedin-badge'>
         <span class="linkedin-text">in</span>
       </div>
    </div>
  </div>
  </a>
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
.member {
  position: relative;
  height: 429px;
  width: 332px;
  display: flex;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.12);
  transition: all 0.3s ease-in-out;
}

.member:hover{
  transform: scale(1.25, 1.25);
}

.photo {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.data {
  display: flex;
  position: absolute;
  align-self: flex-end;
  height: 97px;
  width: 100%;
  background-color: #FFFFFF;
}

.name-postion-container {
  display: flex;
  width: calc(320px - 2em);
  flex-direction: column;
  flex-grow: 2;
  align-self: center;
  padding: 0 0 0 2em;
}

.name {
  color: #272A40;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 24px;
  text-align: left;
}

.position {
  color: #A7AFC3;
  font-size: 14px;
  letter-spacing: 0.4px;
  line-height: 17px;
  text-align: left;
  margin: 7px 0 0 0;
}

.linkedin-text {
  position: absolute;
  color: #FFFFFF;
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  top: 35%;
}

.linkedin-badge {
  position: relative;
  height: auto;
  width: 30px;
  background-color: #8224E3;
  transition: all 0.3s ease-in-out;
  opacity: 0;
}

.member:hover  .linkedin-badge {
  opacity: 1;
  width: 78px;
  margin-right: 0px;
}

.linkedin-badge:before {
 content: "";
 display: block;
 position: absolute;
 left: 0;
 right: 100%;
 border-top: 97px solid #FFFFFF;
 border-right: 38px solid transparent;
}
</style>
