<script setup>
import DynamicLink from "@/components/piece/DynamicLink.vue";
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
  <div class="event-wrapper fade-in">
    <div class="event-stars background-no-repeat-size-contain"></div>
    <div class="event-page-title">KiteSense Mastery.AI is Education 3.0</div>
    <div class="event-section-2-wrapper">
      <div class="event-left-wrapper">
        <div class="event-left-desc">
          Come and experience how KiteSense can help you revolutionise your
          organisation to engage learners through tech-enabled learning
          experiences.
        </div>
        <div class="button-style-primary-event">
          <DynamicLink to="/">Leverage AI with Us</DynamicLink>
        </div>
      </div>
      <div class="event-dummy background-no-repeat-size-contain">
        <!-- Dummy here -->
      </div>
      <div class="event-title-vector background-no-repeat-size-contain"></div>
    </div>
    <div class="event-section-3-wrapper">
      <div class="event-vector background-no-repeat-size-contain"></div>
      <div class="all-past-section fade-in">
        <div class="label">Upcoming event :</div>
        <div class="all-past-events">
          <div class="all-past-event-image background-no-repeat-size-contain">
            <!-- Image here -->
          </div>
          <div class="event-desc">
            <div class="event-details-1">
              <div class="event-details-title">EDUtech_Asia 2022 Singapore</div>
              <div class="event-details-date">9-10 November 2022</div>
            </div>
            <div class="event-details-2">
              Sands Expo, Singapore<br />(Booth #L29)
            </div>
            <div class="event-button">
              <div class="button-style-primary-event">
                <DynamicLink to="https://form.jotform.com/222612083853453"
                  >Request Demo Now</DynamicLink
                >
              </div>
              <div class="button-style-primary-event">
                <DynamicLink
                  to="https://www.terrapinn.com/exhibition/edutech-asia/index.stm"
                  >Register Your Visit</DynamicLink
                >
              </div>
            </div>
          </div>
        </div>
        <!-- Exhibitions -->
        <div class="event-stars-3 background-no-repeat-size-contain"></div>
        <div class="past-event-label">Past Exhibitions :</div>
        <div class="event-vector-2 background-no-repeat-size-contain"></div>
        <div class="exhibitions-past-events">
          <div class="past-event-1">
            <div
              class="past-event-image-1 background-no-repeat-size-contain"
            ></div>
            <div class="past-event-details-1">
              EduTECH 2022 Australia 10-11 August 2022
            </div>
            <div class="past-event-details-2">
              Melbourne Convention and Exhibition Centre, Melbourne, Australia
              (Booth #104)
            </div>
            <div class="button-style-primary-event">
              <DynamicLink
                to="https://www.terrapinn.com/exhibition/edutech-australia/index.stm"
                >Join the Community</DynamicLink
              >
            </div>
          </div>
          <div class="past-event-2">
            <div
              class="past-event-image-2 background-no-repeat-size-contain"
            ></div>
            <div class="past-event-details-1">
              Frankfurter Buchmesse Germany 19-23 October 2022
            </div>
            <div class="past-event-details-2">
              Messe Frankfurt, Ludwig-Erhard-Anlage 1, Frankfurt, Germany (Hall
              4.2-Booth B20)
            </div>
            <div class="button-style-primary-event">
              <DynamicLink to="https://www.buchmesse.de/en/visit"
                >Join the Community</DynamicLink
              >
            </div>
          </div>
        </div>

        <!-- Tech Talk -->
        <div class="past-event-label">Past Tech Talk :</div>
        <div class="tech-talk-past-events">
          <div class="past-event-1">
            <div
              class="past-event-image-1 background-no-repeat-size-contain"
            ></div>
            <div class="past-event-details-1">
              InnovLogue : Bridging Learning & Work Performance with Learning
              Analytics.<br />26 May 2022
            </div>
            <div class="button-style-primary-event">
              <DynamicLink to="https://www.ial.edu.sg/"
                >Join the Community</DynamicLink
              >
            </div>
          </div>
          <div class="event-stars-2 background-no-repeat-size-contain"></div>
          <div class="past-event-2">
            <div
              class="past-event-image-2 background-no-repeat-size-contain"
            ></div>
            <div class="past-event-details-1">
              AWS Summit Singapore 6 October 2022
            </div>
            <div class="past-event-details-2">
              Suntec Singapore Convention & Exhibition Centre
            </div>
            <div class="button-style-primary-event">
              <DynamicLink
                to="https://aws.amazon.com/events/summits/singapore/?trk=00ae094d-0f24-4c32-bb9a-08d232fe3001_jennkoon"
                >Join the Community</DynamicLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mailchimp form -->
    <div class="event-mailchimp-vector background-no-repeat-size-contain"></div>
    <div class="event-mailchimp-wrapper">
      <div
        class="event-mailchimp-image background-no-repeat-size-contain"
      ></div>
      <div class="event-mailchimp-form">
        <div class="event-mailchimp-form-title">
          We are preparing for the next event !<br /><br />Stay tuned !
        </div>
        <form
          action="https://kitesense.us5.list-manage.com/subscribe/post?u=31a9a2a32ed707c2043c28f31&id=462b223dd7&f_id=00228ae9f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
          @submit="showPopup"
          ref="form"
        >
          <div class="event-mailchimp-form-input">
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
          <div class="about-us-submit">
            <input
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              value="Sign Up For Updates"
            />
          </div>
        </form>
      </div>
    </div>
    <div v-show="showPopUp" class="pop-up-after-send fade-in">
      <LandingPageNewsLetter />
    </div>
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

.margin-left-10vw {
  margin-left: 10vw;
}

/* Button Config */
.button-style-primary-event {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: var(--natural);
  font-size: 1.1vw;
  margin-left: 5vw;
  position: relative;
  z-index: 1;
  width: 13vw;
  height: 1vw;
  border: 0.25vw solid var(--primary);
  border-radius: 0.68vw;
  padding: 1.224vw;
  font-family: Proxima Nova Alt Rg;
  margin-top: 3vw;
}

.button-style-primary-event a {
  display: flex;
  text-decoration: none;
  font-size: 1.5vw;
  color: var(--primary);
}

.button-style-primary-event:active {
  transform: scale(0.8);
  transition: 0.1s;
}

.display-none {
  display: none;
}

.display-flex {
  display: flex;
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
  margin-top: -1vw;
  margin-left: 0.5vw;
}

/* Wrapper */
.event-stars {
  background-image: url(@/assets/svg/misc/stars/stars7.svg);
  width: 200vw;
  height: 100vw;
  position: absolute;
  z-index: -2;
  margin-top: -10vw;
}

.event-stars-3 {
  background-image: url(@/assets/svg/misc/stars/stars8.svg);
  width: 200vw;
  height: 100vw;
  position: absolute;
  z-index: -2;
  margin-top: 30vw;
  margin-left: -10vw;
}

.event-wrapper {
  font-family: Proxima Nova Alt Rg;
  color: var(--natural);
  padding-bottom: 10vw;
  margin-top: -3vw;
}

.event-wrapper .event-page-title {
  font-weight: 900;
  font-size: 7.5vw;
  line-height: 7.5vw;
  letter-spacing: -0.008em;
  font-family: Proxima Nova Alt Bld;
  text-align: center;
  width: 75vw;
  margin-left: 15vw;
}

.event-section-2-wrapper {
  display: flex;
  margin-top: 10vw;
  margin-left: 10vw;
}

.event-left-wrapper {
  width: 45vw;
  margin-top: -5vw;
}

.event-left-wrapper .button-style-primary-event {
  width: 16vw;
  height: 2vw;
  margin-left: 13vw;
  margin-top: 5vw;
}

.event-left-wrapper .button-style-primary-event a {
  font-size: 1.8vw;
}

.event-left-wrapper .event-left-desc {
  font-weight: 400;
  font-size: 2.5vw;
  line-height: 3.2vw;
  text-align: center;
}

.event-wrapper .event-dummy {
  background-image: url(@/assets/svg/event/dummy.svg);
  width: 45vw;
  height: 45vw;
  margin-left: 43vw;
  margin-top: -8vw;
  position: absolute;
  z-index: -2;
}

/* Section - 3 */
.event-title-vector {
  background-image: url(@/assets/svg/misc/vector/vector9.svg);
  width: 100vw;
  height: 30vw;
  margin-left: -10vw;
  margin-top: 18vw;
  position: absolute;
  z-index: -1;
}

.event-section-3-wrapper {
  margin-top: 5vw;
  margin-left: 10vw;
}

.event-section-3-wrapper .event-title {
  display: flex;
  font-weight: 700;
  font-size: 3.265vw;
  cursor: pointer;
}

.event-section-3-wrapper .event-vector {
  background-image: url(@/assets/svg/event/signal.svg);
  width: 80vw;
  height: 80vw;
  position: absolute;
  z-index: -2;
  margin-top: 120vw;
  margin-left: 45vw;
}

.label {
  font-weight: 700;
  font-size: 5.5vw;
  line-height: 4.354vw;
  font-family: Proxima Nova Alt Bld;
}

/* Exhibitions Section */
.all-past-section {
  display: flex;
  flex-direction: column;
  margin-top: 10vw;
}

.all-past-events {
  display: flex;
  padding-top: 3vw;
  align-items: center;
  margin-left: -3vw;
  padding-bottom: 3vw;
}

.all-past-event-image {
  background-image: url(@/assets/svg/event/exhibitions1.svg);
  width: 40vw;
  height: 40vw;
}

.all-past-events .event-desc {
  font-weight: 900;
  font-size: 2.5vw;
  width: 50vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.all-past-events .event-desc .event-details-2 {
  margin-top: 3vw;
  width: 40vw;
}

.event-desc .event-button {
  display: flex;
  margin-left: -5vw;
  color: var(--primary);
  font-weight: normal;
  margin-top: 3vw;
}

.event-desc .event-button .button-style-primary-event {
  width: auto;
  height: 2vw;
}

.event-desc .event-button .button-style-primary-event a {
  font-size: 1.8vw;
}

.exhibitions-past-events,
.tech-talk-past-events {
  display: flex;
}

/* Exhibitions */
.event-vector-2 {
  background-image: url(@/assets/svg/misc/vector/vector12.svg);
  position: absolute;
  z-index: -1;
  width: 110vw;
  height: 40vw;
  margin-left: -10vw;
  margin-top: 70vw;
}

.exhibitions-past-events {
  padding-bottom: 5vw;
}
.exhibitions-past-events .past-event-image-1 {
  background-image: url(@/assets/svg/event/exhibitions2.svg);
  width: 35vw;
  height: 35vw;
}

.exhibitions-past-events .past-event-image-2 {
  background-image: url(@/assets/svg/event/exhibitions3.svg);
  width: 35vw;
  height: 35vw;
}

.exhibitions-past-events .past-event-1,
.past-event-2 {
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.exhibitions-past-events .past-event-2 {
  width: 26vw;
  margin-left: 5vw;
}

.exhibitions-past-events .past-event-1 {
  margin-left: 0;
}

.exhibitions-past-events .past-event-details-2 {
  margin-top: 5vw;
}

.past-event-2 .past-event-details-2 {
  margin-top: 2.2vw;
}

.past-event-details-1,
.past-event-details-2,
.past-event-label {
  font-weight: 400;
  font-size: 2.5vw;
  line-height: 3vw;
}

.past-event-label {
  margin-top: 1.5vw;
}

.exhibitions-past-events .button-style-primary-event {
  margin-top: 1.5vw;
  margin-left: 0vw;
  width: 14vw;
  color: var(--primary);
}

/* Tech Talk */
.tech-talk-past-events {
  margin-left: 3vw;
}

.tech-talk-past-events .past-event-image-1 {
  background-image: url(@/assets/svg/event/techTalk.svg);
  width: 35vw;
  height: 35vw;
}

.tech-talk-past-events .past-event-image-2 {
  background-image: url(@/assets/svg/event/techTalk2.svg);
  width: 35vw;
  height: 35vw;
}

.tech-talk-past-events .past-event-1,
.past-event-2 {
  width: 25vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-left: 8vw;
}

.tech-talk-past-events .past-event-1 {
  margin-left: 0;
}

.tech-talk-past-events .past-event-details-2 {
  margin-top: 3.5vw;
}

.tech-talk-past-events .button-style-primary-event {
  margin-top: 1.5vw;
  margin-left: 0vw;
  width: 14vw;
  color: var(--primary);
}

.tech-talk-past-events .past-event-1 .button-style-primary-event {
  margin-top: 11.5vw;
}

.tech-talk-past-events .past-event-2 .button-style-primary-event {
  margin-top: 5vw;
}

.all-past-section
  .exhibitions-past-events
  .past-event-1
  .button-style-primary-event {
  margin-top: 5vw;
}

.all-past-section
  .exhibitions-past-events
  .past-event-2
  .button-style-primary-event {
  margin-top: 5vw;
}

.event-stars-2 {
  background-image: url(@/assets/svg/event/stars.svg);
  width: 100vw;
  height: 105vw;
  position: absolute;
  z-index: -1;
  margin-left: -10vw;
}

/* Mailchimp form */
.event-mailchimp-vector {
  background-image: url(@/assets/svg/misc/vector/vector9.svg);
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: 30vw;
  margin-top: 5vw;
}

.event-mailchimp-wrapper {
  margin-top: 17vw;
  display: flex;
  justify-content: center;
}

.event-mailchimp-image {
  background-image: url(@/assets/svg/event/mailchimpDummy.svg);
  width: 15vw;
  height: 15vw;
  padding-right: 5vw;
}

.event-mailchimp-form-title {
  font-weight: 700;
  font-size: 2.449vw;
  line-height: 2.721vw;
  text-align: center;
  font-family: Proxima Nova Alt Bld;
}

.event-mailchimp-form form {
  display: flex;
  margin-top: 2.5vw;
}

.event-mailchimp-form form #mce-EMAIL {
  width: 22vw;
  height: 3vw;
  margin-bottom: 2vw;
  background-color: var(--third_natural);
  border: none;
  padding: 0.5vw;
  padding-left: 2vw;
  color: var(--natural);
  font-family: Proxima Nova Alt Rg;
  font-size: 1.1vw;
  font-weight: 700;
  line-height: 1.4vw;
  border-radius: 0.4vw;
}

.event-mailchimp-form form #mce-EMAIL:focus {
  outline: none;
}

.event-mailchimp-form form #mce-EMAIL::placeholder {
  color: var(--natural);
  font-size: 1.4vw;
}

.event-mailchimp-form #mc-embedded-subscribe {
  background-color: var(--natural);
  width: 18vw;
  height: 4vw;
  border: 0.25vw solid var(--primary);
  border-radius: 0.68vw;
  font-family: Proxima Nova Alt Rg;
  font-size: 1.497vw;
  letter-spacing: 0.008em;
  font-weight: 400;
  color: var(--primary);
  cursor: pointer;
}

.event-mailchimp-form #mc-embedded-subscribe:active {
  transform: scale(0.8);
  transition: 0.1s;
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
