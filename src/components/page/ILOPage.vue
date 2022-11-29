<script setup>
import LandingPageNewsLetter from "@/components/piece/LandingPageNewsLetter.vue";
const addScript = (src) => {
  return new Promise((resolve, reject) => {
    const myScript = document.createElement("script");

    myScript.setAttribute("src", src);
    myScript.addEventListener("load", resolve);
    myScript.addEventListener("error", reject);

    document.body.appendChild(myScript);
  });
};

addScript("https://code.jquery.com/jquery-3.6.1.min.js");
addScript("//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js");
</script>

<template>
  <div class="ilc-bg background-no-repeat-size-contain"></div>
  <div class="ilc-stars-1 background-no-repeat-size-contain"></div>
  <div class="ilc-wrapper fade-in">
    <div class="ilc-section-1">
      <div class="ilc-section-1-title">
        Empower Learners to Take Charge of Their Learning
      </div>
      <div class="ilc-section-1-caption">
        Deployed in Leading Educational Institutions
      </div>
      <div class="button-style-primary-ilc">
        <DynamicLink to="/solution/education">Read More</DynamicLink>
      </div>
      <div class="ilc-stars-2 background-no-repeat-size-contain"></div>
      <div class="ilc-section-1-dummy background-no-repeat-size-contain">
        <!-- Image here! -->
      </div>
      <div class="ilc-section-1-extra-caption">
        Demonstrated Positive Impact to Learning
      </div>
    </div>
    <div class="ilc-section-2">
      <div class="ilc-section-2-1">
        <div class="ilc-section-2-logo background-no-repeat-size-contain">
          <!-- Image here! -->
        </div>
        <div class="ilc-section-2-text-content-1">
          <div class="ilc-section-2-text-content-title">
            Smart Learning Program for Singapore Asia Publisher (SAP)
          </div>
          <div class="ilc-section-2-text-content-content">
            <ul>
              <li>
                Intelligent publishing by ingesting and tagging content based on
                topics, subtopics and difficulty levels.
              </li>
              <li>
                Enhance SAP’s capacity to publish smart digital books and
                provide differentiated learning pathways for learners across
                different learning abilities.
              </li>
            </ul>
          </div>
        </div>
        <div class="ilc-section-2-text-content-2">
          <div class="ilc-section-2-text-content-title">
            Graded Literacy Programme for Educational Company
          </div>
          <div class="ilc-section-2-text-content-content">
            <ul>
              <li>
                To accelerate literacy recovery due to Covid-19 learning loss.
              </li>
              <li>
                An asynchronous self-directed digital reading programme using AI
                to recommend books based on learners’ reading ability.
              </li>
              <li>
                Automatically streams learners into differentiated learning
                paths with effective learning recommendations to improve
                literacy level.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="ilc-signal background-no-repeat-size-contain"></div>
      <div class="ilc-section-2-2">
        <div class="ilc-section-2-logo background-no-repeat-size-contain">
          <!-- Image here! -->
        </div>
        <div class="ilc-section-2-text-content-1">
          <div class="ilc-section-2-text-content-title">
            IT Skills Development for Temasek Polytechnic
          </div>
          <div class="ilc-section-2-text-content-content">
            <ul>
              <li>
                Provide content for Python, Unity and other popular programming
                languages.
              </li>
              <li>Meet growing demand for a skilled IT workforce.</li>
              <li>
                Used by young adults at Temasek Polytechnic, a leading Institute
                of Higher Learning in Singapore.
              </li>
            </ul>
          </div>
        </div>
        <div class="ilc-section-2-text-content-2">
          <div class="ilc-section-2-text-content-title">
            Tutoring & Coaching for Leading Tutoring Center in Asia
          </div>
          <div class="ilc-section-2-text-content-content">
            <ul>
              <li>
                A learning recommender for asynchronous self-directed learning
                at scale.
              </li>
              <li>
                Automatically prescribes the "What's Next" with learning speed
                and content personalised to every learner.
              </li>
              <li>
                Effective learning recommendations to help learners stretch or
                catch up, Increasing capacity to learn independently.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="ilc-stars-3 background-no-repeat-size-contain"></div>
    <div class="ilc-rocket background-no-repeat-size-contain"></div>
    <div class="ilc-form">
      <div class="ilc-form-title">Stay Up to Date with KiteSense</div>
      <div class="ilc-form-caption">Don't miss out on the latest updates!</div>
      <form
        action="https://kitesense.us5.list-manage.com/subscribe/post?u=31a9a2a32ed707c2043c28f31&id=462b223dd7&f_id=00228ae9f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        ref="form"
        @submit="showPopup"
        novalidate
      >
        <div class="ilc-input">
          <input
            type="email"
            placeholder="Your Email"
            name="EMAIL"
            v-model="email"
            id="mce-EMAIL"
            required
            autocomplete="off"
          />
          <div style="position: absolute; left: -5000px" aria-hidden="true">
            <input
              type="text"
              name="b_31a9a2a32ed707c2043c28f31_462b223dd7"
              tabindex="-1"
              value=""
            />
          </div>
          <div class="invalid-email-msg" v-show="invalidEmail">
            Please input an valid email address
          </div>
        </div>
        <div class="ilc-submit">
          <input
            type="submit"
            name="subscribe"
            id="mc-embedded-subscribe"
            value="Register Now"
          />
        </div>
      </form>
      <div class="ilc-agreement">
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
    <div class="ilc-cloud background-no-repeat-size-contain"></div>
  </div>
</template>
<script>
export default {
  data: () => ({
    showPopUp: false,
    invalidEmail: false,
    email: "",
  }),
  methods: {
    validation(email) {
      var checker =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return checker.test(email);
    },
    showPopup() {
      if (this.validation(this.email)) {
        this.invalidEmail = false;
        this.showPopUp = true;
        setTimeout(() => {
          this.showPopUp = false;
        }, 5000);
      } else {
        this.invalidEmail = true;
      }
    },
  },
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

/* Button config */
.button-style-primary-ilc {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: var(--natural);
  font-size: 1.6vw;
  position: relative;
  z-index: 1;
  width: 8vw;
  height: 2vw;
  border: 0.25vw solid var(--primary);
  border-radius: 0.68vw;
  padding: 1.224vw;
  font-family: Proxima Nova Alt Rg;
  cursor: pointer;
}

/* Pop Up Config */
.pop-up-after-send {
  width: 45vw;
  height: 40vw;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 28vw;
  top: 15%;
  z-index: 2;
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
  background-image: url(@/assets/svg/landingPage/popupDummy2.svg);
  margin-top: 5vw;
  width: 10vw;
  height: 10vw;
}

.invalid-email-msg {
  font-size: 1vw;
  color: var(--danger);
  position: absolute;
  margin-top: -1.5vw;
  margin-left: 0.5vw;
}

/* Wrapper */
.ilc-bg {
  background-image: url(@/assets/image/ilc-bg.png);
  width: 115vw;
  height: 290vw;
  position: absolute;
  margin-top: -30vw;
  z-index: -2;
}

.ilc-stars-1 {
  background-image: url(@/assets/svg/ilo/stars1.svg);
  width: 100vw;
  height: 110vw;
  position: absolute;
  margin-top: -15vw;
  z-index: -1;
}

.ilc-stars-2 {
  background-image: url(@/assets/svg/ilo/stars2.svg);
  width: 100vw;
  height: 145vw;
  position: absolute;
  margin-top: 100vw;
  z-index: -1;
}

.ilc-stars-3 {
  background-image: url(@/assets/svg/ilo/stars3.svg);
  width: 100vw;
  height: 60vw;
  position: absolute;
  z-index: -1;
}

.ilc-wrapper {
  font-family: Proxima Nova Alt Rg;
}

.ilc-signal {
  background-image: url(@/assets/svg/ilo/signal.svg);
  position: absolute;
  width: 70vw;
  height: 70vw;
  z-index: -1;
  margin-top: 50vw;
  margin-left: -40vw;
}

.ilc-rocket {
  background-image: url(@/assets/svg/ilo/rocket.svg);
  position: absolute;
  width: 15vw;
  height: 15vw;
  z-index: -1;
  margin-left: 80vw;
  margin-top: 5vw;
}

.ilc-cloud {
  background-image: url(@/assets/svg/ilo/cloud.svg);
  width: 100vw;
  height: 30vw;
  margin-top: -23vw;
  position: absolute;
  z-index: -1;
}

/* Section - 1 */
.ilc-section-1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--natural);
}

.ilc-section-1-title {
  font-family: Proxima Nova Alt Bld;
  font-size: 7.3vw;
  line-height: 6.747vw;
  font-weight: 700;
  letter-spacing: -0.008em;
  text-align: center;
  width: 70vw;
}

.ilc-section-1-caption {
  font-size: 2.399vw;
  line-height: 2.999vw;
  text-align: center;
  margin-top: 7vw;
  width: 70vw;
}

.ilc-section-1 .button-style-primary-ilc {
  margin-top: 5vw;
}

.ilc-section-1-dummy {
  background-image: url(@/assets/svg/ilo/section1Dummy.svg);
  width: 80vw;
  height: 40vw;
  margin-top: 8vw;
}

.ilc-section-1-extra-caption {
  font-size: 4.798vw;
  line-height: 3.748vw;
  letter-spacing: -0.008em;
  font-weight: 700;
  text-align: center;
  width: 65vw;
  margin-top: 3vw;
}

/* Section - 2 */
.ilc-section-2 {
  color: var(--natural);
  display: flex;
  justify-content: center;
  margin-left: 5vw;
  margin-top: 13vw;
}

.ilc-section-2-1,
.ilc-section-2-2 {
  width: 40vw;
}

.ilc-section-2-2 {
  margin-left: 3vw;
}

.ilc-section-2-1 .ilc-section-2-logo {
  background-image: url(@/assets/svg/ilo/section2Logo1.svg);
  width: 30vw;
  height: 20vw;
}

.ilc-section-2 .ilc-section-2-text-content-title {
  font-size: 2.399vw;
  line-height: 3vw;
  font-weight: 700;
  width: 36vw;
  font-family: Proxima Nova Alt Bld;
}

.ilc-section-2 .ilc-section-2-text-content-content {
  font-size: 1.499vw;
  line-height: 2.624vw;
}

.ilc-section-2 .ilc-section-2-text-content-content li {
  margin-left: -1vw;
}

.ilc-section-2-2 .ilc-section-2-logo {
  background-image: url(@/assets/svg/ilo/section2Logo2.svg);
  width: 30vw;
  height: 20vw;
}

.ilc-section-2-text-content-2 {
  margin-top: 10vw;
}

/* Form section */
.ilc-form {
  margin-top: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 25vw;
}

.ilc-form .ilc-form-title {
  font-weight: 900;
  font-size: 3.8vw;
  color: var(--natural);
  font-family: Proxima Nova Alt Bld;
  line-height: 5.442vw;
}

.ilc-form .ilc-form-caption {
  font-size: 1.5vw;
  color: var(--natural);
  line-height: 2.721vw;
  padding-bottom: 2vw;
}

.ilc-input #mce-EMAIL {
  width: 40vw;
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

.ilc-input #mce-EMAIL::placeholder {
  color: var(--natural);
}

.ilc-input #mce-EMAIL:focus {
  outline: none;
}

.ilc-submit {
  display: flex;
  justify-content: center;
}

.ilc-form #mc-embedded-subscribe {
  background-color: var(--natural);
  font-size: 1.7vw;
  width: 15vw;
  height: 5vw;
  border: 0.25vw solid var(--primary);
  border-radius: 0.68vw;
  padding: 1.224vw;
  color: var(--menu-active);
  font-family: Proxima Nova Alt Rg;
  cursor: pointer;
}

.ilc-form #mc-embedded-subscribe:active {
  transform: scale(0.8);
  transition: 0.1s;
}

.ilc-agreement {
  margin-top: 1vw;
  width: 45vw;
  color: var(--base);
  font-weight: 400;
  font-size: 1.3vw;
  text-align: center;
  line-height: 1.361vw;
}

.ilc-agreement #agreement-link {
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
