<template>
  <a v-if="isExternalLink" v-bind="$attrs" :href="to" target="_blank">
    <slot />
  </a>
  <router-link
    v-else
    v-bind="$props"
    custom
    v-slot="{ isActive, href, navigate }"
  >
    <a
      v-bind="$attrs"
      :href="href"
      @click="navigate"
      :class="isActive ? activeClass : inactiveClass"
    >
      <slot />
    </a>
  </router-link>
</template>

<style scoped>
a,
a:visited,
a:active {
  color: #024f94;
  text-decoration: none;
}
</style>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "AppLink",
  inheritAttrs: false,

  props: {
    ...RouterLink.props,
    inactiveClass: String,
  },

  computed: {
    isExternalLink() {
      return typeof this.to === "string" && this.to.startsWith("http");
    },
  },
};
</script>
