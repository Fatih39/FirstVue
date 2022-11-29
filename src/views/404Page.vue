<script setup>
import DynamicLink from "@/components/piece/DynamicLink.vue";
</script>
<template>
  <div class="wrapper-404">
    <div class="not-found-bg"></div>
    <div class="not-found-msg">Oops, looks like you're lost!</div>
    <div class="not-found-dummy"></div>
    <div class="not-found-links">
      <DynamicLink to="/">Back to Homepage!</DynamicLink>
    </div>
  </div>
</template>
<style scoped>
.not-found-msg {
  width: 100vw;
  font-size: 4vw;
  font-weight: 700;
  display: flex;
  justify-content: center;
  padding-bottom: 2vw;
}

.not-found-dummy {
  background-image: url(@/assets/svg/notFound/notFound.svg);
  background-repeat: no-repeat;
  background-size: contain;
  width: 50vw;
  height: 25vw;
  margin-left: 30vw;
}

.not-found-links {
  margin-top: 5vw;
  text-align: center;
  padding-bottom: 10vw;
}

.not-found-bg {
  background-image: url(@/assets/svg/landingPage/bg2.svg);
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  z-index: -1;
  width: 70vw;
  height: 70vw;
  margin-left: 15vw;
  margin-top: -5vw;
}

@media (max-width: 1000px) {
  .wrapper-404 {
    margin-top: 30vw;
    height: 150vw;
  }
  .not-found-msg {
    margin-top: 15vw;
    font-size: 5vw;
  }
  .not-found-bg {
    width: 170vw;
    height: 170vw;
    position: absolute;
    z-index: -1;
    margin-top: -15vw;
    margin-left: -15vw;
  }
  .not-found-dummy {
    margin-top: 15vw;
    width: 70vw;
    height: 70vw;
    margin-left: 15vw;
  }
  .not-found-links {
    margin-top: -15vw;
    padding-bottom: 31.5vw;
    font-size: 4vw;
  }
}
</style>
