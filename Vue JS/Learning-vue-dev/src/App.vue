<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div class="container-fluid p-0 m-0">
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">TechySky</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <RouterLink class="nav-link" to="/" exact-active-class="active"
                  >Home</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  class="nav-link"
                  to="/about"
                  exact-active-class="active"
                  >About</RouterLink
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
    <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 mt-5 border-top bg-dark">
      <div class="col mb-3">
        <a
          href="/"
          class="d-flex align-items-center mb-3 link-dark text-decoration-none"
        >
          <svg class="bi me-2" width="40" height="32">
            <use xlink:href="#bootstrap"></use>
          </svg>
        </a>
        <p class="text-muted">© 2022</p>
      </div>

      <div class="col mb-3"></div>

      <div class="col mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-muted">Home</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-muted">Features</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-muted">Pricing</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-muted">FAQs</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-muted">About</a>
          </li>
        </ul>
      </div>

      <div class="col mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-muted">Home</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-muted">Features</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-muted">Pricing</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-muted">FAQs</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-muted">About</a>
          </li>
        </ul>
      </div>

      <div class="col mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-muted">Home</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-muted">Features</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-muted">Pricing</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-muted">FAQs</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-muted">About</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<style scoped>
</style>
