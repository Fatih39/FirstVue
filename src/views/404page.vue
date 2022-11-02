<script setup>
import DynamicLink from '../components/logic/DynamicLink.vue';


</script>
<template>
    <div class="not-found-bg"></div>
    <div class="not-found-msg">
        Oops, looks like you're lost!
    </div>
    <div class="not-found-dummy"></div>
    <div class="not-found-links">
        <DynamicLink to="/">Back to Homepage!</DynamicLink>
    </div>
</template>
<style src="../assets/css/not-found-page.css" scoped>
</style>