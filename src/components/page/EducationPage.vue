<script setup>
import LandingPageNewsLetter from "@/components/piece/LandingPageNewsLetter.vue";
import DynamicLink from "@/components/piece/DynamicLink.vue";
</script>

<template>
  <div class="education-bg-1 background-no-repeat-size-contain"></div>
  <div v-if="coverActive" id="pop-up-cover" class="fade-in">
    <div v-if="loading" class="loading-wrapper fade-in">
      <div class="lds-ellipsis fade-in">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
  <div class="education-stars-2 background-no-repeat-size-contain"></div>
  <div class="education-stars-1 background-no-repeat-size-contain"></div>
  <div class="education-wrapper fade-in">
    <div class="education-section-1">
      <div class="education-section-1-title">
        4 Hours of Learning on KiteSense Improved Students Learning Outcomes by
        18%.
      </div>
      <div class="education-section-1-desc">
        Improve student learning outcomes and boost confidence with AI-driven
        self-directed learning.
      </div>
    </div>
    <div class="education-section-2">
      <div class="education-section-2-container">
        <div class="education-stats-title pt-3-hf">
          Increase average scores by 18%*
        </div>
        <div class="education-stats-desc">
          Personalised learning helps students focus on areas they need to
          improve in and keep them along the learning path by prescribing
          “What’s Next”.
        </div>
      </div>
      <div class="education-section-2-container">
        <div class="education-stats-title">
          Boost student confidence by 18%*
        </div>
        <div class="education-stats-desc">
          Student performance is monitored in real-time and difficulty of
          questions is automatically adjusted to ensure a clear path to mastery
          of the subject.
        </div>
      </div>
      <div class="education-section-2-container">
        <div class="education-stats-title">Improve enjoyment by 30%*</div>
        <div class="education-stats-desc">
          Multiple levels of intervention provide relevant support and feedback
          when the student needs it on their learning journey.
        </div>
      </div>
    </div>
    <div class="education-section-2-disclaimer">
      *Based on a research study with Temasek Polytechnic, Singapore
    </div>
    <div class="button-style-primary-education">
      <DynamicLink :to="{ name: 'references', hash: '#research-section' }"
        >Download Our Research Here</DynamicLink
      >
    </div>
    <div class="education-vector-1 background-no-repeat-size-contain"></div>

    <div class="education-stars-3 background-no-repeat-size-contain"></div>
    <div class="education-signal background-no-repeat-size-contain"></div>
    <div class="education-section-3">
      <div class="education-section-3-title">
        3 Tiers of Services Powered by Mastery.AI
      </div>
      <div class="education-section-3-container">
        <div class="education-section-3-text-content">
          <div class="education-section-3-text-content-title">
            Smart Worksheet
          </div>
          <div class="education-section-3-text-content-desc">
            KiteSense systematically tags, organises content and delivers
            differentiated curriculum easily. Worksheets are automatically
            generated based on the curriculum.
          </div>
        </div>
        <div
          class="education-section-3-picture-1 background-no-repeat-size-contain"
        ></div>
      </div>
      <div class="education-section-3-container">
        <div
          class="education-section-3-picture-2 background-no-repeat-size-contain"
        ></div>
        <div class="education-section-3-text-content">
          <div class="education-section-3-text-content-title">
            Smart Learning Journey
          </div>
          <div class="education-section-3-text-content-desc">
            Smart Learning Journey allows teachers to automatically stream
            students into ability bands and assign tailored practice suited to
            students ability levels. Learning analytics helps teachers gain
            insights into students abillities and progress in real time.
          </div>
        </div>
      </div>
      <div class="education-section-3-container">
        <div class="education-section-3-text-content">
          <div class="education-section-3-text-content-title">Smart Tutor</div>
          <div class="education-section-3-text-content-desc">
            An online adaptive learning platform that automatically prescribes
            what students have to learn next and recommends the right content at
            the right time. As learning paths are optimised based on each
            students’ profile, students can achieve proficiency of skills and
            knowledge faster while feeling more supported and engaged.
          </div>
        </div>
        <div
          class="education-section-3-picture-3 background-no-repeat-size-contain"
        ></div>
      </div>
    </div>

    <div
      class="education-section-4-vector background-no-repeat-size-contain"
    ></div>
    <div class="education-section-4">
      <div class="education-section-4-title">
        Empowering Students to Create a Path to Mastery
      </div>
      <div class="education-section-4-container-1">
        <div class="education-section-4-desc">
          <div class="education-section-4-text-content">
            <div class="education-section-4-text-content-title">
              Higher Students' Engagement & Enjoyment
            </div>
            <div class="education-section-4-caption">
              Students feel more supported in the learning process with curated
              content customized to their ability levels. While increasing
              engagement, students also better enjoy the learning experience.
            </div>
          </div>
          <DynamicLink to="/contact-us"
            ><div class="button-style-primary-education">
              Request Demo
            </div></DynamicLink
          >
        </div>
        <div
          class="education-section-4-dummy-1 background-no-repeat-size-contain"
        ></div>
      </div>
      <div class="education-section-4-container-2">
        <div
          class="education-section-4-dummy-1 background-no-repeat-size-contain"
        ></div>
        <div class="education-section-4-desc">
          <div class="education-section-4-text-content">
            <div class="education-section-4-text-content-title">
              Improve Learning Outcomes
            </div>
            <div class="education-section-4-caption">
              By analysing students' learning data points, KiteSense can enable
              educators to create a customised learning journey for every
              student. It will empower and engage students to gain mastery in
              every subject.
            </div>
          </div>
          <DynamicLink to="/solution/improve-learning-outcomes"
            ><div class="button-style-primary-education">
              Impact Study
            </div></DynamicLink
          >
        </div>
      </div>
    </div>

    <div
      class="education-section-5-cloud background-no-repeat-size-contain"
    ></div>
    <div class="education-section-5">
      <div class="education-section-5-container-1">
        <div class="education-section-5-desc">
          <div class="education-section-5-desc-title">
            Achieve Greater Results
          </div>
          <div class="education-section-5-desc-content">
            Help students achieve better scores and improve knowledge retention
            by providing an appropriate level of challenge personalised to their
            abilities. Mastery.AI automatically scaffolds learning tasks,
            optimise learning paths, and provide the right materials at the
            right time for each student.
          </div>
        </div>
        <div class="education-section-5-desc">
          <div class="education-section-5-desc-title">
            Teach More with Less Resources
          </div>
          <div class="education-section-5-desc-content">
            Educators are able to provide a personalised learning experience
            through KiteSense with content automatically recommended to students
            based on their competency. Educators are able to see where students
            are in their learning journey, focus on weaker students and stretch
            advanced students during in-person instruction.
          </div>
        </div>
      </div>

      <div class="education-section-5-container-2">
        <div class="education-section-5-desc">
          <div class="education-section-5-desc-title">
            Easily Identify Cohort Performance Trends
          </div>
          <div class="education-section-5-desc-content">
            Management team can monitor metrics to evaluate instructional
            outcomes in real time via a comprehensive dashboard. They can easily
            monitor student progress, identify skill gaps in teaching staff and
            make adjustments to curriculum as needed.
          </div>
        </div>
        <div class="education-section-5-desc">
          <div class="education-section-5-desc-title pt-5">
            Strength Relationship with Stakeholders
          </div>
          <div class="education-section-5-desc-content">
            For younger learners, parents can gain access to their child's
            progress reports to see areas of strengths and improvements needed.
            This shared understanding allows them to support students learning
            at home.
          </div>
        </div>
      </div>
    </div>

    <!-- Education Form -->
    <div class="education-form">
      <div class="education-form-bg"></div>
      <div class="education-form-title">Connect with Our Experts</div>
      <div class="education-form-caption">
        Let us show you how you can help learners create their own path to
        mastery at their own pace.
      </div>
      <form ref="form" @submit.prevent="sendMail">
        <div class="education-input">
          <input
            type="email"
            class="input-form"
            name="email"
            placeholder="Your Email"
            id="mce-EMAIL"
            required
            autocomplete="off"
          />
          <textarea name="message" value="" placeholder="Message"></textarea>
        </div>
        <div class="education-submit">
          <input
            type="submit"
            name="subscribe"
            id="mc-embedded-subscribe"
            value="Submit"
          />
        </div>
      </form>
      <div class="education-agreement">
        By registering, you confirm that you agree to the storing and processing
        of your personal data by KiteSense as described in the
        <DynamicLink to="/terms-policies-master" id="agreement-link"
          >Terms & Conditions.</DynamicLink
        >
      </div>
    </div>
    <div v-show="showPopUp" class="pop-up-after-send fade-in">
      <LandingPageNewsLetter />
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      coverActive: false,
      showPopUp: false,
      loading: false,
    };
  },
  methods: {
    showPopup() {
      setTimeout(() => {
        this.showPopUp = false;
        this.coverActive = false;
      }, 5000);
    },
    sendMail() {
      this.coverActive = true;
      this.loading = true;
      emailjs
        .sendForm(
          "service_byvgb07",
          "template_gl1p7v4",
          this.$refs.form,
          "yB0WPLSEW_5syCQG2"
        )
        .then(
          () => {
            this.loading = false;
            this.showPopUp = true;
            this.showPopup();
            this.$refs.form.reset();
            setTimeout(() => {
              this.$router.push("/solution/education");
            }, 5000);
          },
          (error) => {
            alert("Failed to sent! Please refresh the page.", error);
          }
        );
    },
  },
  components: { LandingPageNewsLetter },
};
</script>

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
  --danger: #ff0000;
  --box-shadow: #cfecff;
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

/* Animation */
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

/* Loading & Pop Up Message */
.loading-wrapper {
  position: fixed;
  top: 50%;
  width: 30vw;
  height: 30vw;
  display: flex;
  justify-content: center;
}

.lds-ellipsis {
  display: inline-block;
  position: absolute;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 2.245vw;
  width: 0.884vw;
  height: 0.884vw;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 0.544vw;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 0.544vw;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 2.177vw;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 3.81vw;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(1.805vw, 0);
  }
}

.pop-up-after-send {
  width: 45vw;
  height: 40vw;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 18vw;
  z-index: 10000;
}

.pop-up-after-send-background {
  width: 45vw;
  height: 35vw;
  position: absolute;
  z-index: -1;
  background: rgba(207, 236, 255, 0.7);
  border-radius: 1.701vw;
  filter: blur(1.25vw);
  -webkit-filter: blur(1.25vw);
}

.pop-up-after-send-title {
  font-weight: 700;
  font-size: 3.354vw;
  line-height: 3.122vw;
  letter-spacing: -0.008em;
  color: var(--menu-active);
}

.pop-up-after-send-desc {
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pop-up-after-send-caption {
  margin-top: 5vw;
  font-weight: 400;
  font-size: 1.177vw;
  line-height: 2.721vw;
  text-align: center;
}

.pop-up-after-send-dummy {
  background-image: url(@/assets/svg/popupDummy2.svg);
  margin-top: 5vw;
  width: 10vw;
  height: 10vw;
}

/* Pop up Background Cover */
#pop-up-cover {
  background-color: var(--accent);
  display: flex;
  justify-content: center;
  opacity: 90%;
  position: fixed;
  width: 100vw;
  height: 217.5vw;
  margin-top: -30vw;
  z-index: 9999;
}

/* Custom Class */
.background-no-repeat-size-contain {
  background-repeat: no-repeat;
  background-size: contain;
}

.pt-5 {
  padding-bottom: 4vw;
}

.pt-3-hf {
  padding-bottom: 3.5vw;
}

.mt-3 {
  margin-top: 3vw;
}

/* Button config */
.button-style-primary-education {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: var(--natural);
  font-size: 1.1vw;
  position: relative;
  z-index: 1;
  width: 20vw;
  height: 1vw;
  border: 0.25vw solid var(--primary);
  border-radius: 0.68vw;
  padding: 1.224vw;
  font-family: Proxima Nova Alt Rg;
  margin-top: 3vw;
}

.button-style-primary-education a {
  display: flex;
  text-decoration: none;
  font-size: 1.5vw;
  color: var(--primary);
}

.button-style-primary-education:active {
  transform: scale(0.8);
  transition: 0.1s;
}

/* Wrapper */
.education-wrapper {
  margin-left: 10vw;
  font-family: Proxima Nova Alt Rg;
}

.education-bg-1 {
  background-image: url(@/assets/svg/education/section1Bg.svg);
  position: absolute;
  width: 121vw;
  height: 124.5vw;
  margin-top: -25vw;
  z-index: -2;
}

.education-stars-1 {
  background-image: url(@/assets/svg/education/section1Stars.svg);
  position: absolute;
  width: 110vw;
  height: 120vw;
  margin-top: -15vw;
  margin-left: 15vw;
  z-index: -2;
}

.education-stars-2 {
  background-image: url(@/assets/svg/education/stars1.svg);
  position: absolute;
  width: 110vw;
  height: 120vw;
  margin-left: -35vw;
  z-index: -2;
}

.education-stars-3 {
  background-image: url(@/assets/svg/education/stars2.svg);
  position: absolute;
  width: 110vw;
  height: 110vw;
  margin-left: -10vw;
  z-index: -2;
}

/* Section - 1 */
.education-section-1-title {
  color: var(--natural);
  font-size: 7vw;
  font-weight: 900;
  line-height: 7vw;
  letter-spacing: -0.008em;
  font-family: Proxima Nova Alt Bld;
}

.education-section-1-desc {
  color: var(--natural);
  font-family: Proxima Nova Alt Rg;
  font-size: 2.5vw;
  margin-top: 3vw;
  width: 65vw;
}

/* Section - 2 */
.education-section-2 {
  display: flex;
  margin-top: 5vw;
}

.education-section-2-container {
  background-color: var(--box-shadow);
  box-shadow: 0.75vw 0.75vw 0.3vw rgba(0, 0, 0, 0.15);
  margin-right: 5vw;
  width: 20vw;
  border-radius: 1.874vw;
  padding: 2vw;
}

.education-stats-title {
  font-family: Proxima Nova Alt Bld;
  font-size: 2.4vw;
  font-weight: 700;
  line-height: 3vw;
}

.education-stats-desc {
  font-size: 1.5vw;
  line-height: 2.624vw;
  margin-top: 1vw;
}

.education-section-2-disclaimer {
  color: var(--natural);
  font-size: 1.2vw;
  line-height: 3vw;
  margin-top: 2.5vw;
  padding-bottom: 2vw;
}

.education-vector-1 {
  margin-top: 3vw;
  background-image: url(@/assets/svg/education/endSectionVector.svg);
  width: 100vw;
  height: 30vw;
  margin-left: -10vw;
  z-index: -1;
}

/* Section - 3 */
.education-signal {
  background-image: url(@/assets/svg/education/signal.svg);
  width: 70vw;
  height: 70vw;
  position: absolute;
  margin-left: -10vw;
  margin-top: -36vw;
}

.education-section-3 {
  color: var(--natural);
  margin-top: -12vw;
  margin-left: -3vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.education-section-3-title {
  text-align: center;
  font-family: Proxima Nova Alt Bld;
  font-weight: 700;
  font-size: 4.8vw;
  line-height: 3.6vw;
  letter-spacing: 0.02em;
  margin-left: -5vw;
  width: 65vw;
}

.education-section-3-container {
  display: flex;
  align-items: center;
  margin-top: -5vw;
  padding-bottom: 5vw;
  margin-left: -10vw;
}

.education-section-3-picture-1 {
  background-image: url(@/assets/svg/education/3tiersDummy1.svg);
  width: 35vw;
  height: 35vw;
  margin-top: 10vw;
}

.education-section-3-picture-2 {
  background-image: url(@/assets/svg/education/3tiersDummy2.svg);
  width: 35vw;
  height: 35vw;
  margin-top: -15vw;
}

.education-section-3-picture-3 {
  background-image: url(@/assets/svg/education/3tiersDummy3.svg);
  width: 35vw;
  height: 35vw;
}

.education-section-3-text-content {
  width: 50vw;
  padding-left: 2vw;
  padding-right: 2vw;
}

.education-section-3-text-content-title {
  font-weight: 700;
  font-family: Proxima Nova Alt Bld;
  font-size: 2.249vw;
  line-height: 2.5vw;
  letter-spacing: 0.02em;
}

.education-section-3-text-content-desc {
  font-size: 1.5vw;
  line-height: 2.624vw;
  margin-top: 1vw;
  letter-spacing: 0.02em;
  font-family: Proxima Nova Alt Rg;
}

/* Section - 4 */
.education-section-4-vector {
  background-image: url(@/assets/svg/education/section4Vector.svg);
  position: absolute;
  z-index: -2;
  width: 120vw;
  height: 122vw;
  margin-left: -10vw;
  margin-top: -5vw;
}

.education-section-4 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15vw;
  color: var(--natural);
}

.education-section-4 .button-style-primary-education {
  color: var(--primary);
  font-size: 1.8vw;
  width: 12vw;
  height: 2vw;
}

.education-section-4 .education-section-4-title {
  font-size: 4.812vw;
  font-family: Proxima Nova Alt Bld;
  line-height: 4.511vw;
  letter-spacing: -0.008em;
  text-align: center;
  width: 60vw;
  font-weight: 700;
  margin-left: -5vw;
}

.education-section-4-container-1 {
  margin-top: 10vw;
  display: flex;
}

.education-section-4-container-2 {
  display: flex;
  margin-top: 5vw;
}

.education-section-4 .education-section-4-desc {
  width: 50vw;
}

.education-section-4 .education-section-4-text-content-title {
  font-size: 2.5vw;
  line-height: 5vw;
  font-weight: 700;
}

.education-section-4-dummy-1 {
  background-image: url(@/assets/svg/education/section4Dummy1.svg);
  width: 23vw;
  height: 23vw;
  margin-left: 8vw;
  margin-top: -3vw;
}

.education-section-4-desc {
  margin-left: -10vw;
}

.education-section-4-caption {
  font-size: 1.504vw;
  line-height: 2.632vw;
  font-weight: 400;
  width: 48vw;
}

.education-section-4-container-2 {
  margin-left: -5vw;
}

.education-section-4-container-2 .education-section-4-dummy-1 {
  background-image: url(@/assets/svg/education/section4Dummy2.svg);
  margin-right: 15vw;
  margin-top: 3vw;
}

/* Section - 5 */
.education-section-5-cloud {
  background-image: url(@/assets/svg/education/section5Vector.svg);
  width: 105vw;
  height: 35vw;
  position: absolute;
  margin-left: -10vw;
  margin-top: 3.5vw;
  z-index: -1;
}

.education-section-5 {
  display: flex;
  margin-top: 30vw;
  color: var(--natural);
  flex-direction: column;
}

.education-section-5-container-1,
.education-section-5-container-2 {
  display: flex;
}

.education-section-5-container-2 {
  margin-top: 8vw;
}

.education-section-5-desc {
  width: 50vw;
}

.education-section-5-desc-title {
  font-family: Proxima Nova Alt Bld;
  font-size: 4.812vw;
  line-height: 4.511vw;
  font-weight: 700;
  letter-spacing: -0.008em;
  width: 40vw;
}

.education-section-5-desc-content {
  font-size: 1.504vw;
  line-height: 2.632vw;
  width: 40vw;
  margin-top: 5vw;
}

/* Education Form */
.education-form-bg {
  width: 80vw;
  height: 30vw;
  filter: blur(1.25vw);
  -webkit-filter: blur(1.25vw);
  background-color: rgba(207, 236, 255, 0.3);
  position: absolute;
  z-index: -2;
  border-radius: 1.701vw;
}

.education-form {
  margin-top: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10vw;
  margin-left: -10vw;
}

.education-form .education-form-title {
  font-weight: 900;
  font-size: 3.8vw;
  color: var(--natural);
  line-height: 5.442vw;
}

.education-form .education-form-caption {
  font-size: 1.5vw;
  color: var(--natural);
  line-height: 2.721vw;
  padding-bottom: 2vw;
}

.education-input {
  display: flex;
}

.education-input #mce-EMAIL {
  width: 30vw;
  height: 2.5vw;
  margin-bottom: 2vw;
  background-color: var(--third_natural);
  border: none;
  padding: 0.5vw;
  padding-left: 2vw;
  color: var(--natural);
  font-family: Proxima Nova Alt Rg;
  font-size: 1.5vw;
  font-weight: 700;
  line-height: 1.4vw;
  border-radius: 0.4vw;
}

.education-input #mce-EMAIL::placeholder {
  color: var(--natural);
}

.education-input #mce-EMAIL:focus,
textarea:focus {
  outline: none;
}

.education-input textarea {
  resize: none;
  margin-left: 5vw;
  width: 30vw;
  line-height: 2.5vw;
}

.education-submit {
  display: flex;
  justify-content: center;
}

.education-form #mc-embedded-subscribe {
  background-color: var(--natural);
  font-size: 1.7vw;
  width: 8vw;
  height: 5vw;
  border: 0.25vw solid var(--primary);
  border-radius: 0.68vw;
  padding: 1.224vw;
  color: var(--menu-active);
  font-family: Proxima Nova Alt Rg;
  cursor: pointer;
}

.education-form #mc-embedded-subscribe:active {
  transform: scale(0.8);
  transition: 0.1s;
}

.education-agreement {
  margin-top: 1vw;
  width: 45vw;
  color: var(--base);
  font-weight: 400;
  font-size: 1.3vw;
  text-align: center;
  line-height: 1.361vw;
}

.education-agreement #agreement-link {
  color: var(--base);
  font-size: 1.3vw;
  line-height: 1.8vw;
  font-weight: 700;
  display: inline;
  border-bottom: solid 0.1vw var(--base);
  font-family: Proxima Nova Alt Bld;
}

@media (max-width: 1000px) {
  /* Pop Up loading & after */
  #pop-up-cover {
    width: 100vw;
    height: 200vw;
  }

  .loading-wrapper {
    margin-left: 14vw;
  }

  .pop-up-after-send {
    top: 40%;
    width: 40vw;
  }

  .pop-up-after-send-background {
    width: 60vw;
    height: 60vw;
  }

  .pop-up-after-send .pop-up-after-send-title {
    font-size: 5vw;
  }

  .pop-up-after-send .pop-up-after-send-desc {
    width: 45vw;
  }

  .pop-up-after-send .pop-up-after-send-caption {
    font-size: 1.7vw;
  }

  .pop-up-after-send-dummy {
    width: 20vw;
    height: 20vw;
  }
}
</style>
