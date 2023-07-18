<template>
  <header class="header">
    <div class="container">
      <h1 class="text-center">My Nuxt.js App</h1>
      <nav class="navbar">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Schedule appointment</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  background-color: #333;
  color: #fff;
  padding: 20px;
}

.navbar {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.nav {
  list-style: none;
  display: flex;
}

.nav-item:not(:last-child) {
  margin-right: 20px;
}

.nav-link {
  color: #fff;
  text-decoration: none;
}
</style>
