<template>
  <div class="wrapper-contact-us fade-in">
    <div class="background-contact-us"></div>
    <div class="eclipse-contact-us"></div>
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
    <div class="section-1-contact-us">
      <div class="title">
        <div class="title-seg-1">Talk to</div>
        <div class="title-seg-2">a Kitesense expert</div>
      </div>
      <div class="caption">
        Powered by Mastery.AI, we have solutions available that will fit your
        organisation.
      </div>
    </div>
    <div class="section-2-contact-us">
      <div class="desc">
        <div class="desc-title">Improve Learning Outcomes</div>
        <div class="desc-caption">
          Improve learning outcomes quickly with KiteSense optimising learning
          pathways.
        </div>
        <div class="desc-title">Higher Learners' Engagement & Enjoyment</div>
        <div class="desc-caption">
          Learners feel more supported in the learning process with curated
          content customised to their ability levels.
        </div>
        <div class="desc-title">Cost-Effectiveness</div>
        <div class="desc-caption">
          Save time and cost with smarter learning that automate differentiated
          instructions for each learner.
        </div>
        <div class="desc-title">Data Trust</div>
        <div class="desc-caption">
          KiteSense has robust administrative, physical, managerial, technical
          and cyber defence safeguards in place to secure its facilities and
          systems from unauthorised access and to secure your company's data.
        </div>
      </div>
      <div class="form">
        <div class="form-bg"></div>
        <div class="form-wrapper">
          <div class="form-title">Enquire now !</div>
          <form ref="form" @submit.prevent="sendMail">
            <div class="input">
              <input
                type="text"
                class="input-form"
                name="first_name"
                placeholder="First Name"
                autocomplete="off"
                required
              />
              <input
                type="text"
                class="input-form"
                name="last_name"
                placeholder="Last Name"
                autocomplete="off"
                required
              />
              <input
                type="email"
                class="input-form"
                name="email"
                placeholder="Email"
                autocomplete="off"
                required
              />
              <input
                type="text"
                class="input-form"
                name="organization_company"
                placeholder="Organisation / Company"
                autocomplete="off"
                required
              />
              <input
                type="text"
                class="input-form"
                name="industry"
                placeholder="Industry"
                autocomplete="off"
                required
              />
              <input
                type="text"
                class="input-form"
                name="job_function"
                placeholder="Job Function"
                autocomplete="off"
                required
              />
              <textarea
                name="message"
                value=""
                placeholder="Message"
              ></textarea>
            </div>
            <div class="form-agreement">
              By registering, you confirm that you agree to the storing and
              processing of your personal data by KiteSense as described in the
              <DynamicLink to="/terms-policies-master" id="form-agreement-link"
                >Terms & Conditions.</DynamicLink
              >
            </div>
            <div class="contact-us-form-submit-field">
              <input type="submit" value="Send" id="submit-field" />
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="section-3-contact-us">
      <div class="vector-4"></div>
      <div class="section-3-title">What's next?</div>
      <div class="container">
        <div class="sub-wrapper">
          <div class="sub-title">We'll start the conversation</div>
          <div class="caption">
            Our expert will contact you shortly to confirm your request.
          </div>
        </div>
        <div class="sub-wrapper">
          <div class="sub-title">Let's discuss your solution</div>
          <div class="caption">
            Let's unlock possibilities to achieve your goals.
          </div>
        </div>
        <div class="sub-wrapper">
          <div class="sub-title">Let’s start building</div>
          <div class="caption">
            Design, build and optimise a solution that fits your needs
            perfectly.
          </div>
        </div>
      </div>
    </div>
    <div v-show="showPopUp" class="pop-up-after-send fade-in">
      <LandingPageNewsLetter />
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import LandingPageNewsLetter from "@/components/piece/LandingPageNewsLetter.vue";
import DynamicLink from "@/components/piece/DynamicLink.vue";

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
          "template_1xu8h5d",
          this.$refs.form,
          "yB0WPLSEW_5syCQG2"
        )
        .then(
          () => {
            this.loading = false;
            this.showPopUp = true;
            this.showPopup();
            // clear input field
            this.$refs.form.reset();
            sessionStorage.setItem("user_filled_form_state", true);
            setTimeout(() => {
              this.$router.push("/contact-us");
            }, 5000);
          },
          (error) => {
            alert("Failed to sent! Please refresh the page.", error);
          }
        );
    },
  },
  components: { DynamicLink, LandingPageNewsLetter },
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

/* Button Config */
.button-style-primary-contact-us {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: var(--natural);
  font-size: 1.497vw;
  position: relative;
  z-index: 1;
  width: 4vw;
  height: 1vw;
  border: 0.25vw solid var(--primary);
  border-radius: 0.68vw;
  padding: 1.224vw;
  font-family: Proxima Nova Alt Rg;
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
  margin-left: 28vw;
  top: 15%;
  z-index: 10001;
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
  position: absolute;
  width: 100vw;
  height: 217.5vw;
  margin-top: -30vw;
  z-index: 10000;
}

.section-2-contact-us .form-wrapper a {
  display: flex;
  text-decoration: none;
  font-size: 1.4vw;
  color: var(--primary);
}

.button-style-primary-contact-us:active {
  transform: scale(0.8);
  transition: 0.1s;
}

/* Wrapper */

.background-contact-us {
  background-image: url(@/assets/svg/contactUs/wrapper-background.svg);
  background-repeat: no-repeat;
  background-size: contain;
  width: 183.5vw;
  height: 183vw;
  margin-top: -30vw;
  padding-top: 20vw;
  position: absolute;
  z-index: -2;
}

.eclipse-contact-us {
  background-image: url(@/assets/svg/misc/eclipse/eclipse3.svg);
  background-repeat: no-repeat;
  background-size: contain;
  width: 100vw;
  height: 90vw;
  position: absolute;
  z-index: -2;
}

/*** Section - 1 ***/
.section-1-contact-us {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--natural);
  text-align: center;
}

/* Title  */
.section-1-contact-us .title {
  font-family: Proxima Nova Alt Bld;
  font-size: 7.5vw;
  line-height: 6.122vw;
  font-weight: 700;
  letter-spacing: -0.008em;
}

/* Caption */
.section-1-contact-us .caption {
  padding-top: 5vw;
  width: 60vw;
  font-size: 2.5vw;
}

/* Section - 2 */
.section-2-contact-us {
  margin-top: 10vw;
  color: var(--natural);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5vw;
}

.section-2-contact-us .desc {
  width: 35vw;
}
/* Desc Title */
.section-2-contact-us .desc .desc-title {
  font-family: Proxima Nova Alt Bld;
  font-weight: 700;
  font-size: 2.5vw;
  line-height: 2.721vw;
}
/* Desc Caption */
.section-2-contact-us .desc .desc-caption {
  padding-top: 2vw;
  padding-bottom: 7vw;
  font-size: 1.8vw;
  line-height: 2.2vw;
}

/* Form */
/* Background */
.section-2-contact-us .form-bg {
  width: 50vw;
  height: 75vw;
  margin-left: 2vw;
  margin-top: -5vw;
  filter: blur(1.25vw);
  -webkit-filter: blur(1.25vw);
  background-color: rgba(207, 236, 255, 0.5);
  position: absolute;
  z-index: -2;
  border-radius: 1.7vw;
}

.section-2-contact-us .form {
  width: 50vw;
}

.section-2-contact-us .form-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 6vw;
}

.section-2-contact-us .form-title {
  font-weight: 900;
  font-size: 3.5vw;
  line-height: 2.721vw;
  text-align: center;
  font-family: Proxima Nova Alt Bld;
  color: var(--base);
  padding-bottom: 5vw;
}

.section-2-contact-us .form-wrapper input {
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

.section-2-contact-us .form-wrapper textarea {
  padding-top: 1vw;
  resize: none;
  width: 40vw;
  height: 13vw;
  font-size: 1.5vw;
}

.section-2-contact-us .form-wrapper input::placeholder {
  color: var(--natural);
}

.section-2-contact-us .form-wrapper input:focus,
textarea:focus {
  outline: none;
}

.section-2-contact-us .form-agreement {
  margin-top: -1.5vw;
  width: 42vw;
  padding-bottom: 2vw;
  color: var(--base);
  font-size: 1.25vw;
  line-height: 1.361vw;
  font-family: Proxima Nova Alt Rg;
  text-align: left;
}

.form-agreement #form-agreement-link {
  color: var(--base);
  font-size: 1.25vw;
  line-height: 1.361vw;
  font-weight: 700;
  display: inline;
  border-bottom: solid 0.1vw var(--base);
  font-family: Proxima Nova Alt Bld;
}

.contact-us-form-submit-field {
  display: flex;
}

.contact-us-form-submit-field #submit-field {
  margin-left: 17vw;
  margin-top: 2vw;
}

.form-wrapper #submit-field {
  background-color: var(--natural);
  width: 8vw;
  border: 0.25vw solid var(--primary);
  border-radius: 0.68vw;
  padding: 1vw;
  font-family: Proxima Nova Alt Rg;
  font-size: 1.4vw;
  color: var(--primary);
  cursor: pointer;
}

.form-wrapper #submit-field::placeholder {
  color: var(--primary);
}

.form-wrapper #submit-field:active {
  transform: scale(0.8);
  transition: 0.1s;
}

/* Section - 3 */
.section-3-contact-us {
  margin-top: 10vw;
  padding-bottom: 5vw;
  margin-left: 5vw;
}
.vector-4 {
  background: url(@/assets/svg/misc/vector/vector4.svg);
  background-repeat: no-repeat;
  background-size: contain;
  width: 110vw;
  height: 60vw;
  margin-left: -6vw;
  margin-top: 2vw;
  position: absolute;
  z-index: -1;
}

.section-3-contact-us .section-3-title {
  padding-top: 12vw;
  margin-left: 5vw;
  color: var(--accent);
  font-family: Proxima Nova Alt Bld;
  font-size: 5vw;
  line-height: 6.122vw;
  font-weight: 900;
  letter-spacing: 0.01em;
}

.section-3-contact-us .container {
  display: flex;
  margin-left: 5vw;
  padding-top: 5vw;
}

.section-3-contact-us .sub-wrapper {
  width: 30vw;
  padding-right: 9vw;
}

.section-3-contact-us .sub-wrapper .sub-title {
  color: var(--menu-active);
  font-family: Proxima Nova Alt Bld;
  font-size: 2.5vw;
  font-weight: 900;
  line-height: 2.721vw;
}

.section-3-contact-us .sub-wrapper .caption {
  padding-top: 1vw;
  font-size: 1.7vw;
  line-height: 2.2vw;
  color: var(--base);
}

@media (max-width: 1000px) {
  .section-2-contact-us .form-bg {
    height: 85vw;
  }
  .contact-us-form-submit-field #submit-field {
    margin-left: 17vw;
    margin-top: 1vw;
    width: 8vw;
    font-size: 1.8vw;
  }
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
