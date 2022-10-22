<script setup>
import MainPage1 from "../components/MainPage-1.vue";
import MainPage2 from "../components/MainPage-2.vue";
import { onBeforeRouteUpdate, useRoute } from 'vue-router'

sessionStorage.setItem("user_filled_form_state", false);

</script>

<template>
  <main>
    <MainPage1 />
    <MainPage2 />
  </main>
</template>

