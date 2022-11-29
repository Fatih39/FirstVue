<script>
export default {
  data() {
    return {
      path: null,
      validated: false,
    };
  },
  mounted() {
    let current_user_state = sessionStorage.getItem("user_filled_form_state");
    if (current_user_state == "true") {
      this.validated = true;
    }
  },
  methods: {
    downloadFile1() {
      window.open(
        "https://drive.google.com/file/d/14OHWO2xb8mBjWBQ24EWUVdQFrYj9dJrp/view?usp=sharing"
      );
    },
    downloadFile2() {
      window.open(
        "https://drive.google.com/file/d/17HzAhqiKniDHOVttiKoiZE73nHegn9vJ/view?usp=sharing"
      );
    },
    downloadFile3() {
      window.open(
        "https://drive.google.com/file/d/1SuXCZpzoXO15-nodClYidhEaHI4Xx9KL/view?usp=sharing"
      );
    },
    downloadFile4() {
      window.open(
        "https://drive.google.com/file/d/18gdbrISblymbPPdqhR6Ch9DpQjxxBABu/view?usp=sharing"
      );
    },
    downloadFile5() {
      window.open(
        "https://drive.google.com/file/d/1E5_qLLPhREzWQHPi1-bgsEY8VrVN4s_s/view?usp=sharing"
      );
    },
    validate() {
      let current_user_state = sessionStorage.getItem("user_filled_form_state");
      if (current_user_state == "true") {
        this.$router.push("/references");
        this.validated = true;
      } else {
        this.$router.push("/landing-page");
      }
    },
  },
};
</script>

<template>
  <div class="references-wrapper fade-in">
    <!-- Section - 1 -->
    <div class="references-stars-1 background-no-repeat-size-contain"></div>
    <div class="references-section-1">
      <div class="references-section-1-title">
        KiteSense Mastery.AI is Education 3.0
      </div>
      <div class="references-section-1-desc">
        At KiteSense, we believe that every learner deserves an excellent
        education.
      </div>
    </div>
    <!-- Section - 2 -->
    <div class="references-section-2-vector-1"></div>
    <div class="references-section-2">
      <div
        class="references-cloud-vector background-no-repeat-size-contain"
      ></div>
      <div class="references-section-2-title">Brochures</div>
      <div class="references-section-2-content">
        <div class="references-section-2-content-container">
          <div
            class="references-section-2-content-image-1 background-no-repeat-size-contain"
          >
            <!-- Image here -->
          </div>
          <div class="references-section-2-content-desc">
            Augmented Learning with Mastery.AI - An adaptive learning platform
            for self directed learning
          </div>
          <div
            class="button-style-primary"
            @click="validated ? downloadFile1() : validate()"
          >
            Download
          </div>
        </div>
        <div class="references-section-2-content-container">
          <div
            class="references-section-2-content-image-2 background-no-repeat-size-contain"
          >
            <!-- Image here -->
          </div>
          <div class="references-section-2-content-desc pb-5">
            Smart Tutor - The #1 tool for forging paths to mastery.
          </div>
          <div
            class="button-style-primary"
            @click="validated ? downloadFile2() : validate()"
          >
            Download
          </div>
        </div>
        <div class="references-section-2-content-container">
          <div
            class="references-section-2-content-image-3 background-no-repeat-size-contain"
          >
            <!-- Image here -->
          </div>
          <div class="references-section-2-content-desc pb-5">
            Smart Worksheets - Automated worksheet generation for differentiated
            curriculum
          </div>
          <div
            class="button-style-primary"
            @click="validated ? downloadFile3() : validate()"
          >
            Download
          </div>
        </div>
      </div>

      <div class="references-section-2-content">
        <div class="references-section-2-content-container">
          <div
            class="references-section-2-content-image-4 background-no-repeat-size-contain"
          >
            <!-- Image here -->
          </div>
          <div class="references-section-2-content-desc">
            Smart Learning Journey - Automatically stream learners into ability
            bands
          </div>
          <div
            class="button-style-primary mt-min-5"
            @click="validated ? downloadFile4() : validate()"
          >
            Download
          </div>
        </div>
      </div>

      <div class="references-vector background-no-repeat-size-contain"></div>
      <div class="references-stars-2 background-no-repeat-size-contain"></div>
      <div class="references-signal background-no-repeat-size-contain"></div>
      <div id="research-section"></div>
      <div class="references-section-2-title-2">Research</div>
      <div class="references-section-2-research-container">
        <div
          class="references-section-2-research-image background-no-repeat-size-contain"
        >
          <!-- Image here -->
        </div>
        <div class="references-section-2-research-desc">
          <div class="research-title">
            A research study done with Temasek Polytechnic, Singapore
          </div>
          <div class="research-caption">
            Bringing Out the Best in Every Learner - As a leading institution of
            higher education, this research is one of many undertaken by Temasek
            Polytechnic to improve and enhance faculty instruction.
          </div>
          <div
            class="button-style-primary"
            @click="validated ? downloadFile5() : validate()"
          >
            Download
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* Typography */
* {
  --natural: #ffffff;
  --sec_natural: #9e9e9e;
  --third_natural: #18181c;
  --primary: #024f94;
  --accent: #132f66;
  --base: #000000;
  --test: #ff0000;
  --menu-active: #005999;
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

/* Custom Class */
.background-no-repeat-size-contain {
  background-repeat: no-repeat;
  background-size: contain;
}

.pb-5 {
  padding-bottom: 5.5vw;
}

.mt-min-5 {
  margin-top: -5vw;
}

/* Wrapper */
.references-wrapper {
  color: var(--natural);
  font-family: Proxima Nova Alt Rg;
}

.references-wrapper .button-style-primary:hover {
  cursor: pointer;
}

/* Section - 1 */
.references-stars-1 {
  background-image: url(@/assets/svg/references/stars1.svg);
  position: absolute;
  width: 100vw;
  height: 150vw;
  z-index: -1;
}

.references-section-1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 15vw;
  margin-top: -3vw;
}

.references-section-1 .references-section-1-title {
  font-weight: 700;
  font-size: 7.5vw;
  line-height: 6.8vw;
  letter-spacing: -0.008em;
  text-align: center;
  width: 75vw;
  font-family: Proxima Nova Alt Bld;
}

.references-section-1 .references-section-1-desc {
  font-weight: 400;
  font-size: 2.5vw;
  line-height: 2.721vw;
  text-align: center;
  margin-top: 7vw;
}

/* Section - 2 */
.references-cloud-vector {
  background-image: url(@/assets/svg/references/vector1.svg);
  width: 100vw;
  height: 35vw;
  position: absolute;
  z-index: -1;
  margin-left: -7vw;
  margin-top: -14vw;
}

.references-vector {
  background-image: url(@/assets/svg/references/vector2.svg);
  width: 105vw;
  height: 100vw;
  position: absolute;
  z-index: -1;
  margin-top: -80vw;
  margin-left: -10vw;
}

.references-stars-2 {
  background-image: url(@/assets/svg/references/stars2.svg);
  position: absolute;
  width: 100vw;
  height: 70vw;
  z-index: -1;
  margin-left: -5vw;
}

.references-section-2 {
  margin-left: 7vw;
}

.references-section-2-title {
  font-weight: 700;
  font-size: 5vw;
  line-height: 4.354vw;
  margin-top: 2vw;
}

.references-section-2-content {
  display: flex;
  padding-bottom: 5vw;
  margin-top: 5vw;
}

.references-section-2-content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.references-section-2-content-image-1 {
  background-image: url(@/assets/svg/references/brochures1.svg);
  width: 30vw;
  height: 30vw;
}

.references-section-2-content-image-2 {
  background-image: url(@/assets/svg/references/brochures2.svg);
  width: 30vw;
  height: 30vw;
}

.references-section-2-content-image-3 {
  background-image: url(@/assets/svg/references/brochures3.svg);
  width: 30vw;
  height: 30vw;
}

.references-section-2-content-image-4 {
  background-image: url(@/assets/svg/references/brochures4.svg);
  width: 30vw;
  height: 30vw;
}

.references-section-2-content-desc {
  margin-top: 2vw;
  width: 28vw;
  text-align: center;
  font-size: 2.5vw;
  line-height: 3.2vw;
}

.references-section-2 .button-style-primary {
  margin-top: 50vw;
  color: var(--menu-active);
  font-size: 1.288vw;
  line-height: 1.361vw;
  letter-spacing: 0.014em;
  font-weight: 400;
  width: 6vw;
}

.references-signal {
  background-image: url(@/assets/svg/references/signal.svg);
  width: 105vw;
  height: 100vw;
  position: absolute;
  z-index: -1;
  margin-top: -20vw;
  margin-left: 30vw;
}

.references-section-2-research-container {
  display: flex;
}

.references-section-2-title-2 {
  font-weight: 700;
  font-size: 5vw;
  line-height: 4.354vw;
  margin-top: 15vw;
}

.references-section-2-research-desc {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.references-section-2-research-image {
  background-image: url(@/assets/svg/references/research1.svg);
  width: 35vw;
  height: 35vw;
}

.references-section-2-research-desc {
  margin-top: 5vw;
  padding-bottom: 20vw;
}

.references-section-2-research-desc .research-title {
  font-weight: 700;
  font-size: 2.8vw;
  line-height: 3vw;
  text-align: center;
  width: 50vw;
  font-family: Proxima Nova Alt Bld;
}

.references-section-2-research-desc .research-caption {
  font-weight: 400;
  font-size: 1.9vw;
  line-height: 2.9vw;
  text-align: center;
  width: 55vw;
  margin-top: 2vw;
}

.references-section-2-research-desc .button-style-primary {
  margin-top: 20vw;
}

#research-section {
  width: 10vw;
  height: 1vw;
  margin-left: -20vw;
  margin-top: 6vw;
  position: absolute;
  background-color: red;
}
</style>
