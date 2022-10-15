<script setup>
import { RouterLink } from "vue-router";
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
    <!-- "Augmenting Learning with AI" Section -->
    <div class="stars-1"></div>
    <div class="signal-left"></div>
    <div class="signal-right"></div>
    <div class="stars-2"></div>
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

    <div class="vector-1"></div>
    <div class="button-style-primary"><RouterLink to="/">Request Demo</RouterLink></div>
    <!-- "7 Billion Learners" Section -->
    <div class="eclipse"></div>
    <div class="section-2">
      <div class="title-wrapper"><div class="title">7 Billion Learners</div><div class="caption">Only 85 million teachers. Let us help accelerate your learning journey.</div></div>
      <div class="gif"></div>
      <div class="content">KiteSense cloud-based recommender guides every learner towards the mastery of a chosen subject by automatically prescribing “what’s next”. By serving the right content at the right stage of their learning journey, KiteSense enables learners to learn independently and accurately with better outcomes.</div>
    </div>
    <!-- "Best In Class Performance" Section -->
    <div class="vector-2"></div>
    <div class="section-3">
      <div class="title">Best in Class Performance</div>
      <div class="content">
        <div class="statistics">
          <div class="first-stats">
            <div class="number">18%</div>
            <div class="stats-title">Learning Outcomes</div>
            <div class="caption">Students achieve better grades within 4 hours using KiteSense.</div>
          </div>



        </div>
      </div>
    </div>

    <!-- "AI Enabled Learning Analytics" Section -->

    <div class="vector-3"></div>
    <div class="section-4">
      <div class="eclipse"></div>
      <div class="picture"></div>
      <div class="text-content">
        <div class="title">Powering the Future of Learning with Ontology-Driven Maps.
        </div>
        <div class="content">Applicable to schools, tutoring centres, learning platforms, vocational training, workforce development and more. </div>
        <div class="button-style-primary"><RouterLink to="/">Discover More Here</RouterLink></div>
      </div>
    </div>

  </div>
</template>

<style src="../assets/css/MainPage-1.css" scoped>
</style>
