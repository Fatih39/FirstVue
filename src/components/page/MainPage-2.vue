<script setup>
import Carousel from "@/components/piece/CarouselImage.vue";
</script>
<template>
  <div class="wrapper fade-in">
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
    <div class="main-page-2-signal-1 background-no-repeat-size-contain"></div>
    <Carousel></Carousel>
    <div class="section-2">
      <div class="main-page-2-vector-1 background-no-repeat-size-contain"></div>
      <div class="text-content">
        <div class="title">Connect with Our Experts</div>
        <div class="caption">
          Let us show you how you can help learners create their own path to
          mastery at their own pace.
        </div>
      </div>
      <div class="form">
        <form ref="form" @submit.prevent="sendMail">
          <div class="name">
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              autocomplete="off"
              id="name-field"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              autocomplete="off"
              id="email-field"
              required
            />
          </div>
          <div>
            <textarea placeholder="Message" name="message" required></textarea>
          </div>
          <div class="main-page-2-submit">
            <input type="submit" value="Connect Us" id="submit-field" />
          </div>
        </form>
      </div>
    </div>
    <div v-show="showPopUp" class="pop-up-after-send fade-in">
      <LandingPageNewsLetter />
    </div>
  </div>
</template>

<style scoped>
* {
  --natural: #ffffff;
  --sec_natural: #9e9e9e;
  --third_natural: #18181c;
  --primary: #024f94;
  --accent: #132f66;
  --base: #000000;
  --test: #ff0000;
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
    transform: translate(24px, 0);
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
  background-image: url(@/assets/svg/landingPage/popupDummy2.svg);
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
  height: 448.5vw;
  margin-top: -300vw;
  z-index: 10000;
}

/* Custom Class */
.background-no-repeat-size-contain {
  background-repeat: no-repeat;
  background-size: contain;
}

/* Wrapper */
.wrapper {
  font-family: Proxima Nova Alt Rg;
  width: 100vw;
  height: auto;
  padding-bottom: 10vw;
}

/* Content */
.main-page-2-signal-1 {
  background-image: url(@/assets/svg/misc/signal/signal1.svg);
  width: 85vw;
  height: 85vw;
  position: absolute;
  z-index: 0;
  margin-top: -8vw;
  margin-left: -20vw;
}

.main-page-2-vector-1 {
  background-image: url(@/assets/svg/misc/vector/vector11.svg);
  width: 110vw;
  height: 60vw;
  position: absolute;
  z-index: -1;
  margin-top: -22vw;
  margin-left: -5vw;
}

.carousel-bg {
  position: absolute;
  width: 70vw;
  height: 35vw;
  z-index: -1;
  margin-top: -5vw;
  background: linear-gradient(
    135.18deg,
    rgba(207, 236, 255, 0.81) 37.35%,
    rgba(255, 255, 255, 0) 75.08%
  );
  border-radius: 1.7vw;
  margin-left: -5vw;
}

.carousel-bg-2 {
  position: absolute;
  width: 70vw;
  height: 35vw;
  z-index: -2;
  margin-top: -5vw;
  background: var(--natural);
  border-radius: 1.7vw;
  margin-left: -5vw;
}

.about-us {
  padding-top: 15vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about-us .title {
  padding-bottom: 5vw;
  color: var(--natural);
  font-size: 4vw;
  font-weight: 900;
}

.about-us .carousel {
  padding: 5vw;
  width: 60vw;
  color: var(--base);
  position: absolute;
  margin-top: 12vw;
}

.about-us .carousel-title {
  font-family: Sharp Sans;
  font-style: italic;
  font-size: 2.5vw;
  font-weight: 900;
  width: 50vw;
}

.about-us .carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-container .content {
  font-family: Proxima Nova Alt Rg;
  font-size: 2vw;
  line-height: 2.381vw;
  margin-top: 3vw;
  font-weight: 500;
  width: 40vw;
  margin-right: 2vw;
}

.carousel-container img {
  width: 20vw;
  height: 20vw;
}

.button-style-primary {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: var(--natural);
  font-size: 1.1vw;
  width: 10vw;
  height: 1vw;
  position: absolute;
  border: 0.25vw solid var(--primary);
  border-radius: 0.68vw;
  padding: 1.224vw;
  font-family: Proxima Nova Alt Rg;
}

.button-style-primary a {
  display: flex;
  text-decoration: none;
  font-size: 1.7vw;
  color: var(--primary);
}

.button-style-primary:active {
  transform: scale(0.8);
  transition: 0.1s;
}

.about-us .button-style-primary {
  margin-top: 57vw;
}

.section-2 {
  padding-top: 60vw;
  padding-left: 4vw;
  display: flex;
}

.section-2 .text-content {
  width: 50vw;
}

.section-2 .text-content .title {
  font-size: 3.8vw;
  font-weight: 900;
  line-height: 5.442vw;
  color: var(--natural);
  margin-left: 5vw;
  margin-top: 2vw;
}

.section-2 .text-content .caption {
  width: 40vw;
  margin-left: 5vw;
  color: var(--natural);
  line-height: 2.2vw;
  font-size: 2.5vw;
}

.section-2 .form {
  margin-top: 1vw;
}

.section-2 .form #name-field,
#email-field,
textarea {
  width: 35vw;
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

.form #name-field {
  background-color: var(--third_natural);
}

.section-2 .form textarea {
  height: 10vw;
  padding-top: 1.5vw;
  resize: none;
}

.section-2 .form #name-field::placeholder,
#email-field::placeholder,
textarea::placeholder {
  color: var(--natural);
}

.section-2 .form input:focus,
textarea:focus {
  outline: none;
}

.form .main-page-2-submit {
  display: flex;
  justify-content: center;
}

.form #submit-field {
  background-color: var(--natural);
  width: 12vw;
  height: 4.5vw;
  border: 0.25vw solid var(--primary);
  border-radius: 0.68vw;
  padding: 1vw;
  font-family: Proxima Nova Alt Rg;
  font-size: 1.7vw;
  margin-left: -25.5vw;
  color: var(--primary);
  cursor: pointer;
}

.form #submit-field:active {
  transform: scale(0.8);
  transition: 0.1s;
}

.eclipse {
  background-image: url(@/assets/svg/misc/eclipse/eclipse2.svg);
  background-repeat: no-repeat;
  background-size: contain;
  z-index: -2;
  width: 100vw;
  height: 100vw;
  position: absolute;
}

@media (max-width: 1000px) {
  .section-2 .form #name-field {
    margin-bottom: 0vw;
  }
}
</style>

<script>
import emailjs from "emailjs-com";
import LandingPageNewsLetter from "@/components/piece/LandingPageNewsLetter.vue";

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
            // clear input field
            this.$refs.form.reset();
            setTimeout(() => {
              this.$router.push("/");
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
