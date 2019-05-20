<template>
  <div class="clients">
    <div class="content">
      <h2>Where work happens</h2>
      <p>We’ve worked on a <span class="highlight-paragraph">variety of projects with a wide range of clients</span>, each one with a unique problem set and perspective. We continually improve our process and do our best work in strong partnerships with them.</p>
      <a href="#" class="action-button">See more on Clutch</a>
    </div>
    <div class="content testimonies">
      <img src="../assets/img/clutch-badge.svg" alt="Clients say we deliver on Clutch">
      <h5>Darren Liu</h5>
      <p class="position">Founder - Ballwiz</p>
      <p class="testimony">“They’re willing to engage with a problem to figure it out rather than waiting to be told what to do”.</p>
      <a href="#" class="read-more">Read more</a>
      <div class="logo-clients">
        <img src="../assets/img/ballwiz.svg" alt="Ballwiz">
        <img src="../assets/img/copa.png" alt="Copa">
        <img src="../assets/img/moneda.png" alt="Moneda">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Clients'
}
</script>

<style scoped>
  h2 {
    margin: 0 0 .8em 0;
    color: #272A40;
    font-size: 50px;
    font-weight: 900;
    letter-spacing: 1px;
    text-align: left;
    line-height: 60px;
  }

  h5 {
    margin: 1.8em 0 .5em 0;
    font-size: 22px;
    font-weight: 900;
    letter-spacing: 0.44px;
    line-height: 27px;
    color: #272A40;
  }

  p {
    margin-top: 0;
    margin-bottom: 2em;
    padding-right: 2.1em;
    color: #A7AFC3;
    font-size: 18px;
    letter-spacing: 0.6px;
    text-align: left;
    line-height: 34px;
  }

  .clients {
    display: flex;
    align-items: center;
    margin-top: 4.5em;
    padding: 0 10em;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
  }

  .testimonies {
    padding-left: 4em;
  }

  .action-button {
    width: 70%;
    padding: 1em 0;
    color: #8224E3;
    border: 1px solid #8224E3;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.36px;
    text-transform: uppercase;
    text-decoration: none;
  }

  .position {
    margin-bottom: 1em;
    font-size: 16px;
    letter-spacing: 0.56px;
    line-height: 34px;
  }

  .testimony {
    margin-bottom: 1em;
    padding: 0;
    color: #272A40;
    font-size: 20px;
    letter-spacing: 0.7px;
    line-height: 24px;
  }

  .read-more {
    align-self: flex-end;
    margin-bottom: 2.2em;
    color: #8224E3;
    font-weight: 700;
    font-size: 18px;
    line-height: 34px;
    letter-spacing: 0.64px;
    text-decoration: none;
  }

  .logo-clients {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-top: 3.8em;
    border-top: 3px solid #F0F1F5;
  }
</style>
