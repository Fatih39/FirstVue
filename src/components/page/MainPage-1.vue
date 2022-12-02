<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="greetings wrapper fade-in">
    <div class="main-page-1-bg"></div>
    <!-- "Augmenting Learning with AI" Section -->
    <div class="stars-1"></div>
    <div class="signal-left"></div>
    <div class="signal-right"></div>
    <div class="stars-2"></div>
    <h3 class="h3-1">Augmenting Learning</h3>
    <h3 class="h3-2">with Mastery.AI</h3>
    <h4>
      Kitesense’s Mastery.AI engine recommends the right learning content at the
      right time so learners can achieve proficiency in skills and knowledge
      faster.
    </h4>

    <div class="vector-1"></div>
    <div class="button-style-primary ml-2">
      <RouterLink to="/contact-us">Request Demo</RouterLink>
    </div>
    <!-- "7 Billion Learners" Section -->
    <div class="eclipse"></div>
    <div class="section-2">
      <div class="title-wrapper">
        <div class="title">Cloud-Based Recommender for All Learners</div>
        <div class="caption">
          An online adaptive learning recommender to guide every learner towards
          mastery. KiteSense empowers learners to learn independently at their
          own pace so organisations can save time, resources, and achieve better
          outcomes.
        </div>
      </div>
      <div class="gif"></div>
    </div>
    <!-- "Best In Class Performance" Section -->
    <div class="vector-2"></div>
    <div class="section-3">
      <div class="title">Best in Class Performance*</div>
      <div class="content">
        <div class="statistics">
          <div class="first-stats">
            <div class="number">
              <div class="arrow-stats"></div>
              <div class="number-content">18%</div>
            </div>
            <div class="stats-title">Learning Outcomes</div>
            <div class="caption">
              4 hours of learning on KiteSense improve learning outcomes.
            </div>
          </div>
          <div class="second-stats">
            <div class="number">
              <div class="arrow-stats"></div>
              <div class="number-content">30%</div>
            </div>
            <div class="stats-title">Enjoyment</div>
            <div class="caption">
              Students enjoyed the learning experience on KiteSense.
            </div>
          </div>
          <div class="third-stats">
            <div class="number">
              <div class="arrow-stats"></div>
              <div class="number-content">18%</div>
            </div>
            <div class="stats-title">Engagement</div>
            <div class="caption">
              Students are more engaged at an appropriate level of challenge
              based on their ability levels.
            </div>
          </div>
          <div class="fourth-stats">
            <div class="number">
              <div class="arrow-stats"></div>
              <div class="number-content">16%</div>
            </div>
            <div class="stats-title">Confidence</div>
            <div class="caption">
              Students felt more confident during the learning process.
            </div>
          </div>
        </div>
        <div class="disclaimer">
          *Based on a research study with Temasek Polytechnic, Singapore
        </div>
      </div>
    </div>

    <!-- "AI Enabled Learning Analytics" Section -->

    <div class="vector-3"></div>
    <div class="section-4">
      <div class="section-4-background"></div>
      <div class="section-4-content-1">
        <div class="eclipse"></div>
        <div class="picture-1"></div>
        <div class="text-content">
          <div class="title">
            Ontology-Driven Mapping of Bodies of Knowledge
          </div>
          <div class="content">
            We build the Mastery.AI engine to optimise learning pathways through
            ontology-driven knowledge maps. Enabling learners to take control of
            their learning, and gain mastery in less time.
          </div>
          <div class="button-style-primary">
            <RouterLink to="/references">Discover More Here</RouterLink>
          </div>
        </div>
      </div>
      <div class="section-4-content-2">
        <div class="picture-2"></div>
        <div class="text-content">
          <div class="title">Exceptional Education For Every Learner</div>
          <div class="content">
            KiteSense Mastery.AI powers multiple subjects and learning
            modalities. Easy to set up and configure across ages and countries.
          </div>
          <div class="button-style-primary">
            <RouterLink to="/solution/education">Read More</RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="vector-4"></div>
  </div>
</template>

<style scoped>
/* Typography */
* {
  --natural: #ffffff;
  --primary: #024f94;
  --accent: #132f66;
  --base: #000000;
  --test: #ff0000;
  font-family: Proxima Nova Alt Rg;
  font-family: Proxima Nova Alt Bld;
}
@font-face {
  font-family: Proxima Nova Alt Bld;
  src: url(@/assets/fonts/ProximaNovaA-Bold.woff) format("woff");
}

@font-face {
  font-family: Proxima Nova Alt Rg;
  src: url(@/assets/fonts/ProximaNovaA-Regular.ttf);
}

@font-face {
  font-family: Sharp Sans;
  src: url(@/assets/fonts/SharpSansNo1-Book.ttf) format("truetype");
  src: url(@/assets/fonts/SharpSansDispNo1-Semibold.ttf) format("truetype");
  src: url(@/assets/fonts/SharpSansDispNo1-SemiboldIt.ttf) format("truetype");
}

/* Custom class */
/* Animations */
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.fade-in {
  animation-name: fade-in;
  animation-duration: 0.5s;
}

/* Wrapper */
.main-page-1-bg {
  background: linear-gradient(
    180deg,
    rgba(13, 111, 202, 0.9) 0%,
    rgba(38, 0, 111, 0.621) 50%,
    rgba(24, 24, 28, 0) 100%
  );
  position: absolute;
  width: 105vw;
  height: 80vw;
  margin-top: -15vw;
  z-index: -3;
}

.wrapper {
  width: 102vw;
  padding-top: 17vw;
  margin-top: -32vw;
  margin-left: -2vw;
  height: auto;
  padding-bottom: 10vw;
}

.h3-1,
.h3-2 {
  font-size: 7.5vw;
  font-family: Proxima Nova Alt Bld;
  margin-left: 12vw;
  color: var(--natural);
  font-weight: 3900;
}

.h3-2 {
  margin-top: -9.5vw;
}

h4 {
  font-family: Proxima Nova Alt Rg;
  margin-left: 12vw;
  margin-top: -4vw;
  font-weight: 400;
  font-size: 2.5vw;
  color: var(--natural);
  width: 70vw;
}

.stars-1 {
  background-image: url(@/assets/svg/misc/eclipse/eclipse.svg);
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 1;
  margin-left: 50vw;
  width: 100vw;
  height: 60vw;
  position: absolute;
}

.eclipse {
  background-image: url(@/assets/svg/misc/eclipse/eclipse.svg);
  background-repeat: no-repeat;
  background-size: contain;
  z-index: -0.5;
  width: 100vw;
  height: 100vw;
  position: absolute;
}

.vector-1 {
  background-image: url(@/assets/svg/misc/vector/vector1.svg);
  position: absolute;
  margin-top: -2vw;
  margin-left: -5vw;
  z-index: 1;
  width: 110vw;
  height: 100vw;
  background-repeat: no-repeat;
  background-size: contain;
}

.signal-left {
  background-image: url(@/assets/svg/misc/signal/signalLeft.svg);
  background-size: contain;
  background-repeat: no-repeat;
  width: 60vw;
  height: 60vw;
  position: absolute;
  z-index: 1;
  margin-top: -10vw;
  margin-left: -15vw;
  transform: rotate(15deg);
  opacity: 0.4;
}

.signal-right {
  background-image: url(@/assets/svg/misc/signal/signalRight.svg);
  background-size: contain;
  background-repeat: no-repeat;
  width: 47vw;
  height: 47vw;
  position: absolute;
  z-index: 1;
  margin-top: 2vw;
  margin-left: 72vw;
}

.stars-2 {
  background-image: url(@/assets/svg/misc/stars/stars.svg);
  background-repeat: no-repeat;
  background-size: contain;
  z-index: -2;
  margin-top: 40vw;
  width: 40vw;
  height: 40vw;
  position: absolute;
}

.button-style-primary {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: var(--natural);
  font-size: 1.1vw;
  margin-left: 12vw;
  position: relative;
  z-index: 1;
  width: 12vw;
  height: 2vw;
  border: 0.25vw solid var(--primary);
  border-radius: 0.68vw;
  padding: 1.224vw;
  font-family: Proxima Nova Alt Rg;
  cursor: pointer;
}

.button-style-primary a {
  display: flex;
  font-family: Proxima Nova Alt Rg;
  text-decoration: none;
  font-size: 1.7vw;
  font-weight: normal;
  color: var(--primary);
}

.button-style-primary:active {
  transform: scale(0.8);
  transition: 0.1s;
}

.greetings > .button-style-primary {
  position: absolute;
  z-index: 2;
}

/* Section - 2 */
.section-2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  margin-top: -47vw;
  padding-top: 60vw;
  padding-left: 4vw;
}

.title-wrapper {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Proxima Nova Alt Rg;
  letter-spacing: -0.008em;
  color: var(--natural);
}

.title-wrapper .title {
  font-weight: 900;
  font-size: 5.5vw;
  line-height: 6.082vw;
  letter-spacing: -0.008em;
  text-align: center;
  width: 70vw;
}

.title-wrapper .caption {
  font-size: 2.5vw;
  font-weight: 400;
  font-family: Proxima Nova Alt Rg;
  text-align: center;
  width: 90vw;
  /* margin-top: 7vw; */
}

.gif {
  margin-top: 2vw;
  background-image: url(@/assets/svg/misc/dummy_gif.svg);
  background-repeat: no-repeat;
  background-size: contain;
  width: 70vw;
  height: 45vw;
}

.section-2 .content {
  width: 80vw;
  padding: 1.5vw;
  background: rgba(255, 255, 255, 0.1);
  margin-top: 3vw;
  border-radius: 1.4vw;
  font-family: Proxima Nova Alt Rg;
  color: var(--natural);
  font-weight: 700;
  font-size: 1.6vw;
  line-height: 2.721vw;
  text-align: center;
}

.vector-2 {
  background-image: url(@/assets/svg/misc/cropped/2.svg);
  position: absolute;
  margin-top: -9vw;
  z-index: 0;
  width: 120vw;
  height: 55vw;
  padding-left: 2vw;
  background-repeat: no-repeat;
  background-size: contain;
}

/* Section - 3 */
.section-3 {
  font-family: Proxima Nova Alt Rg;
  margin-left: 10vw;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
}

.section-3 .content {
  padding-top: 5vw;
}

.section-3 .statistics {
  display: flex;
  margin-left: -2vw;
}

.section-3 .title {
  letter-spacing: -0.008em;
  font-weight: 900;
  font-size: 5vw;
  color: var(--accent);
}

.first-stats,
.second-stats,
.third-stats,
.fourth-stats {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 23vw;
}

.section-3 .number {
  font-size: 7.483vw;
  font-weight: 700;
  font-family: Proxima Nova Alt Rg;
  display: flex;
}

.arrow-stats {
  background-image: url(@/assets/svg/misc/arrow.svg);
  background-repeat: no-repeat;
  background-size: contain;
  width: 5.5vw;
  height: 5.5vw;
  margin-top: 1.5vw;
}

.section-3 .number .number-content {
  margin-left: -2vw;
}

.section-3 .stats-title {
  font-size: 2.5vw;
  font-family: Proxima Nova Alt Bld;
  color: var(--base);
}

.section-3 .caption {
  padding-top: 1vw;
  font-size: 1.6vw;
  font-family: Proxima Nova Alt Rg;
  color: var(--base);
  line-height: 2.381vw;
  width: 22vw;
}

.section-3 .disclaimer {
  margin-top: 2vw;
  font-weight: 400;
  font-size: 1.288vw;
  line-height: 2.721vw;
  font-family: Proxima Nova Alt Rg;
}

.vector-3 {
  background-image: url(@/assets/svg/misc/signal/signal.svg);
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  z-index: 0;
  width: 110vw;
  height: 110vw;
  margin-top: 31vw;
  margin-left: 43vw;
}

/* Section - 4 */
.section-4-background {
  background-image: url(@/assets/svg/misc/mainpag_1_sec_4_bg.svg);
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  z-index: -1;
  width: 130vw;
  height: 160vw;
  margin-top: -38vw;
}

.section-4 {
  padding-top: 50vw;
  font-family: Proxima Nova Alt Rg;
  color: var(--natural);
  display: flex;
}

.section-4 .picture-1 {
  background-image: url(@/assets/svg/misc/interface/interface1.svg);
  background-repeat: no-repeat;
  background-size: contain;
  width: 45vw;
  height: 45vw;
  position: absolute;
  margin-left: 5vw;
}

.section-4 .picture-2 {
  background-image: url(@/assets/svg/misc/interface/interface2.svg);
  background-repeat: no-repeat;
  background-size: contain;
  width: 45vw;
  height: 45vw;
  position: absolute;
  margin-left: 47vw;
}

.section-4 .text-content {
  margin-left: 50vw;
  width: 48vw;
}

.section-4 .section-4-content-2 {
  margin-left: -90vw;
  margin-top: 50vw;
}

.section-4 .title {
  font-weight: 700;
  font-size: 5vw;
  line-height: 5vw;
  width: 45vw;
}

.section-4 .content {
  font-family: Proxima Nova Alt Rg;
  margin-top: 4vw;
  font-size: 2.5vw;
  font-weight: 300;
  line-height: 3vw;
}

.section-4-content-2 {
  padding-bottom: 10vw;
}

.section-4-content-2 .text-content {
  margin-left: -1vw;
  width: 48vw;
  text-align: right;
}

.section-4-content-2 .title {
  width: 35vw;
  margin-left: 10vw;
}

.section-4-content-2 .content {
  margin-right: 3.5vw;
}

.section-4-content-2 .button-style-primary {
  width: 8vw;
  margin-top: 3vw;
  margin-left: 34vw;
}

.section-4-content-1 .button-style-primary {
  margin-top: 4vw;
  margin-left: 0;
  width: 15vw;
}

.section-4 .button-style-primary a {
  font-size: 1.6vw;
}

.vector-4 {
  background-image: url(@/assets/svg/misc/vector/vector10.svg);
  background-size: contain;
  background-repeat: no-repeat;
  width: 110vw;
  height: 20vw;
  position: absolute;
  z-index: 0;
  margin-top: 5vw;
}

@media (min-width: 760px) {
}
</style>
