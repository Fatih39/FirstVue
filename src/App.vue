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
        src="@/assets/kitesense_logo.svg"
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

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

@font-face{
  font-family: Proxima Nova Alt Rg;
  src: url(./assets/fonts/ProximaNovaA-Regular.ttf);
}

.wrapper {
  font-family: Proxima Nova Alt Rg;
}

.logo-wrapper{
  width: 50%;
  display: flex;
  justify-content: left;
  margin-left: 4vw;
  /* background-color: blue; */
}

.logo-wrapper img {
  width: 15vw;
  height: 5vw;
}

.nav-menu-wrapper{
  width: 100%;
  /* background-color: yellow; */
  margin-right: 3vw;
  display: flex;
  justify-content: right;
  align-items: center;
}

.nav-menu-wrapper span {
  padding: 1vw;
  border: 3px solid #024F94;
  border-radius: 0.68vw;
  background-color: #FFFFFF;
  color: #024F94;
  font-weight: ;
}

/* nav .logo { */
  /* display: flex; */
  /* width: 100%; */
  /* margin-right: 75vw; */
  /* margin-inline: 20vw ; */
  /* justify-content: right; */
  /* background-color: blue; */
/* } */

.nav-wrapper{
  /* background-color: red; */
  width: 100vw;
  display: flex;
  flex-direction: row;

}

nav {
  width: 100vw;
  font-size: 1.36vw;
  font-weight: 700;
  text-align: center;
  margin-top: 2rem;
  /* background-color: red; */
  display: flex;
  justify-content: right;
}

/* nav a.router-link-exact-active {
  color: var(--color-text);
} */

/* nav a.router-link-exact-active:hover {
  background-color: transparent;
} */

nav a {
  color: #ffffff;
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  text-decoration: none;
}

/* nav a:first-of-type {
  border: 0;
} */

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  /* .logo {
    margin: 0 2rem 0 0;
  } */

  /* header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */

  /* nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  } */
}
</style>
