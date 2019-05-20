<template>
  <div class="footer">
    <div class="additional-info">
      <a href="#"><img src="../assets/img/wedevelop-logo.svg" alt="WeDevelop"></a>
      <p>© 2019. All rights reserved.</p>
      <a href="#"><img src="../assets/img/clutch-reviews.svg" alt="WeDevelop"></a>
    </div>
    <div class="nav">
      <div class="col">
        <h4>About us</h4>
        <a href="#who">Who we are</a>
        <a href="#team">Our Team</a>
        <a href="#join">Join Us</a>
      </div>
      <div class="col">
        <h4>Services</h4>
        <a href="#web">Web Development</a>
        <a href="#consulting">Consulting Services</a>
        <a href="#outsourcing">Outsourcing</a>
      </div>
      <div class="col col-last">
        <a href="#how"><h4>How we work</h4></a>
        <a href="#tech"><h4>Technologies</h4></a>
        <a href="#reviews"><h4>Reviews</h4></a>
        <a href="#contact"><h4>Contact</h4></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
  a {
    color: #A7AFC3;
    font-size: 16px;
    letter-spacing: 1.4px;
    text-align: left;
    text-decoration: none;
    margin-bottom: 1em;
  }

  h4 {
    margin: 0 0 1.5em 0;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 1.82px;
    text-align: left;
    color: #fff;
  }

  p {
    margin: 1em 0 2.5em 0;
    color: #A7AFC3;
    font-size: 14px;
    letter-spacing: 0.5px;
  }

  .footer {
    display: flex;
    padding: 22.5em 10.5em 9.5em 10.5em;
    background-color: #272A40;
  }

  .content {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    padding: 0 7em;
  }

  .additional-info {
    margin-right: 15em;
  }

  .nav {
    display: flex;
  }

  .col {
    display: flex;
    flex-direction: column;
    width: max-content;
    margin-right: 10em;
  }

  .col-last {
    margin-right: 0;
  }

  .col-last a {
    margin-bottom: 0;
  }
</style>
