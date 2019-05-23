<template>
  <div class="methodologies" id="how">
    <div class="content">
      <h2>We use agile methodologies</h2>
      <p>We understand the meaning of “Agile”, and we love it. SCRUM sets the way and we set the pace by generating <span class="highlight-paragraph">small and efficient iterations.</span></p>
      <p><span class="highlight-paragraph">Clean code</span> is our distinctive mark. We know code may change and will change through your project’s lifetime, so we help you to have it adjusted and improved to meet new requirements over time.</p>
    </div>
    <img src="../assets/img/agile.png" alt="Agile methodology">
  </div>
</template>

<script>
export default {
  name: 'Introduction'
}
</script>

<style scoped>
  h2 {
    margin: 0 0 1em 0;
    color: #272A40;
    font-size: 40px;
    font-weight: 900;
    letter-spacing: 0.8px;
    text-align: left;
    line-height: 60px;
  }

  p {
    margin-top: 0;
    margin-bottom: 1.5em;
    padding-right: 2.1em;
    color: #A7AFC3;
    font-size: 18px;
    letter-spacing: 0.6px;
    text-align: left;
    line-height: 34px;
  }

  .methodologies {
    display: flex;
    align-items: center;
    margin-top: 4.5em;
    padding: 0 14em 0 10em;
  }

  .content {
    display: flex;
    flex-direction: column;
    padding-right: 10em;
  }

  .highlight {
    color: #8224E3;
  }
</style>
