<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/MainPage-1.vue";
</script>

<template>
  <!-- For header & footer -->
  <header>
    <div class="wrapper">
      <nav>
        <div class="nav-wrapper">
        <div class="logo-wrapper">
        <img
        alt="KiteSense logo"
        class="logo"
        src="@/assets/svg/kitesense_logo.svg"
        />
        </div>
        <div class="nav-menu-wrapper">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/">Solution</RouterLink>
        <RouterLink to="/">Product</RouterLink>
        <RouterLink to="/">Company</RouterLink>
        <RouterLink to="/">Resources</RouterLink>
        <RouterLink to="/about"><span>Get Started</span></RouterLink>
        </div>
      </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style src="./assets/css/app.css" scoped>
</style>
