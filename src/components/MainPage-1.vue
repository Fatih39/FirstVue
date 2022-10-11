<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>
<!-- Main Page Section 1 -->
<template>
  <div class="greetings wrapper">
    <!-- <h1 class="green">{{ msg }}</h1> -->
    <h3 class="h3-1">
      Augmenting
    </h3>
    <h3 class="h3-2">
      Learning with AI.
    </h3>
    <h4>
      Kitesense’s Mastery.AI engine recommends the right learning content at the right time so learners can achieve proficiency of skills and knowledge faster.
    </h4>
  </div>
</template>

<style scoped>
@font-face{
  font-family: Proxima Nova Alt Rg;
  src: url(./assets/fonts/ProximaNovaA-Regular.ttf);
}

.wrapper {
  background-image: url("../assets/background_nav_to_headings.svg");
  background-repeat: no-repeat;
  /* background-color: blue; */
  padding-top: 18vw;
  margin-top: -15vw;
  margin-left: -0.5vw;
  width: 100vw;
  height: 100vh;
}

/* h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
} */

.h3-1 , .h3-2{
  font-size: 6.5vw;
  font-family: Proxima Nova Alt Rg;
  /* background-color: red; */
  margin-left: 4vw;
  color: #ffffff;
  font-weight: 700;
  /* height: 15vw;
  width: 8vw; */
}

.h3-2 {
  margin-top: -7vw;
}

h4 {
  margin-left: 4vw;
  margin-top: -6vw;
  font-weight: 400;
  font-size: 2.17vw;
  width: 60vw;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
