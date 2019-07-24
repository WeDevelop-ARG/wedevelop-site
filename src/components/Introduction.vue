<template>
  <div class="introduction" id="who">
    <div class="content">
      <h2>We are <span class="highlight">Friendly and Professional</span> people</h2>
      <p>WeDevelop is a SDaaS company born in Argentina focused on <span class="highlight-paragraph">high-quality and long-term solutions.</span></p>
      <p>Clients’ satisfaction is our goal, so we strive to always provide excellent software following the <span class="highlight-paragraph">best practices</span> and pursuing <span class="highlight-paragraph">cutting-edge technologies.</span></p>
      <p>We are also friendly people with professionalism and good vibes and we want everyone to feel that <span class="highlight-paragraph">working with us is like working with friends.</span></p>
    </div>
    <img src="../assets/img/introduction-img.svg" alt="Astronaut with monkey astronaut in space">
  </div>
</template>

<script>
export default {
  name: 'Introduction'
}
</script>

<style scoped>
  h2 {
    margin: 0 0 .8em 0;
    color: #272A40;
    font-size: 40px;
    font-weight: 900;
    letter-spacing: 1px;
    text-align: left;
    line-height: 60px;
  }

  p {
    margin-top: 0;
    margin-bottom: 1.5em;
    padding-right: 2.1em;
    color: #A7AFC3;
    font-size: 20px;
    letter-spacing: 0.7px;
    text-align: left;
    line-height: 34px;
  }

  @media (max-width: 1200px) {
    img {
      width: 400px;
    }
  }

  .introduction {
    display: flex;
    align-items: center;
    margin-top: 8em;
    padding: 0 10.5em 0 9.5em;
  }

  @media (max-width: 1200px) {
    .introduction {
      align-items: flex-start;
      padding: 0 8.5em 0 7.5em;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
  }

  .highlight {
    color: #8224E3;
  }
</style>
