<template>
  <nav class="navbar">
    <a href="#" class="nav-brand">
      <img src="../assets/img/wedevelop-logo.svg" alt="WeDevelop">
    </a>
    <ul class="nav-link-list">
      <li>
        <a href="#who" class="nav-link">About us</a>
      </li>
      <li>
        <a href="#services" class="nav-link">Services</a>
      </li>
      <li>
        <a href="#how" class="nav-link">How we work</a>
      </li>
      <li>
        <a href="#tech" class="nav-link">Technologies</a>
      </li>
      <li>
        <a href="#reviews" class="nav-link">Reviews</a>
      </li>
      <li>
        <a href="#contact" class="nav-link">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
  .navbar {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 2.5em .6em 0 .6em;
  }

  .nav-brand {
    margin-left: 3.1em;
  }

  .nav-brand img {
    width: 200px;
  }

  .nav-link-list {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .nav-link {
    margin: 0 2.5em 0 0;
    color: #fff;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 1.45px;
    text-decoration: none;
  }
</style>
