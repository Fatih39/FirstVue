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
        <RouterLink to="/about"><div class="get-started">Get Started</div></RouterLink>
        </div>
      </div>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer>
    <div class="footer-wrapper">
      <div class="contact">
        <div class="logo-wrapper">
          <img
          alt="KiteSense logo"
          class="logo"
          src="@/assets/svg/kitesense_logo.svg"
          />
        </div>
        <div class="address">1 Pemimpin Dr, #02-03<br>Singapore 576151</div>
        <div class="socials">
          <RouterLink to="/"><img src="./assets/svg/msg_icon.svg" alt="msg_icon"></RouterLink>
          <RouterLink to="/"><img src="./assets/svg/call_icon.svg" alt="msg_icon"></RouterLink>
          <RouterLink to="/"><img src="./assets/svg/linkedin_icon.svg" alt="msg_icon"></RouterLink>
          <RouterLink to="/"><img src="./assets/svg/facebook_icon.svg" alt="msg_icon"></RouterLink>
        </div>
      </div>
      <div>
        <div class="company">
          <div class="title">Company:</div>
          <div class="footer-content"><RouterLink to="/">About Us</RouterLink></div>
          <div class="footer-content"><RouterLink to="/">Contact Us</RouterLink></div>
          <div class="footer-content"><RouterLink to="/">Solutions</RouterLink></div>
        </div>
      </div>
      <div>
        <div class="resources">
            <div class="title">Resources:</div>
            <div class="footer-content"><RouterLink to="/">Blog</RouterLink></div>
            <div class="footer-content"><RouterLink to="/">Events</RouterLink></div>
            <div class="footer-content"><RouterLink to="/">References</RouterLink></div>
        </div>
      </div>
      <div>
        <div class="legal">
            <div class="title">Legal:</div>
            <div class="footer-content"><RouterLink to="/">Privacy Policies</RouterLink></div>
            <div class="footer-content"><RouterLink to="/">Terms & Conditions</RouterLink></div>
        </div>
      </div>

    </div>
  </footer>
</template>

<style src="./assets/css/app.css" scoped>
</style>
