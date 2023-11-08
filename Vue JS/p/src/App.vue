<script setup>
</script>
<template>
  <div class="content">
    <nav class="navbar">
      <div class="logo">
        <p>TechySky</p>
      </div>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.navbar {
  margin: 0;
  padding: 0;
  background-color: #151515;
  font-family: sans-serif;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px; 
  padding: 1px 20px; 
}

.navbar .logo p {
  font-size: 30px;
  margin-left: 10px;
}

.navbar ul {
  list-style: none;
  display: flex;
}

.navbar li {
  margin-right: 20px;
}

.navbar a {
  text-decoration: none;
  color: #fff;
  font-size: 22px;
  padding: 18px 20px;
}

.navbar a:hover {
  /* color: #333; */
 color: rgb(170, 187, 202);
}
</style>
