<script>
import emailjs from "emailjs-com";

export default {
  methods: {
    sendMail() {
      emailjs
        .sendForm(
          "service_g76yx9n",
          "template_3ljsqyd",
          this.$refs.form,
          "e5dLPmoZPvHz0ycRM"
        )
        .then(
          () => {
            alert("Succesfully sent!");
            // clear input field
            this.$refs.form.reset();
          },
          (error) => {
            alert("Failed to sent! Please refresh the page.", error);
          }
        );
    },
  },
};
</script>

<template>
  <div class="tp-wrapper">
    <div class="tp-stars background-no-repeat-size-contain"></div>
    <div class="tp-section-1">
      <div class="tp-title">Welcome !</div>
      <div class="tp-desc">
        This page contains KiteSense's subscription terms and related policies.
        <br />
        <br />
        If you have any questions or concerns please contact us here :
      </div>
      <div class="button-style-primary-tp">
        <DynamicLink to="/">Contact Us Now</DynamicLink>
      </div>

      <div class="tp-vector-1 background-no-repeat-size-contain"></div>
      <div class="tp-signal background-no-repeat-size-contain"></div>
      <div class="tp-dummy background-no-repeat-size-contain"></div>
      <div class="sub-terms-title">Subscription Terms (Customer)</div>
      <div class="button-style-primary-tp width-22-vw">
        <DynamicLink to="/terms-policies-master"
          >Master Terms & Conditions</DynamicLink
        >
      </div>

      <div class="privacy-security-title">Privacy and Security Resources</div>
      <div class="button-style-primary-tp width-18-vw">
        <DynamicLink
          to="https://drive.google.com/file/d/1a5M4pcGWPd7Q0IVPJpijBpox_Iyo8HfD/view?usp=sharing"
          >Acceptable Use Policy</DynamicLink
        >
      </div>
      <div class="button-style-primary-tp width-28-vw margin-top-2hf-vw">
        <DynamicLink
          to="https://drive.google.com/file/d/1Q7ZRVhe2nElLmlqJlsiQ6erm-Txx093v/view?usp=sharing"
          >Data Privacy and Protection Policy</DynamicLink
        >
      </div>
    </div>

    <!-- Contact Form -->
    <div class="section-2">
      <div class="text-content">
        <div class="title">Connect with Our Experts</div>
        <div class="caption">
          If you have any questions, feel free to email us at info@kitesense.sg
          <br />
          <br />
          If you are interested in learning more about our Enterprise
          engagements, get in touch with us through this form.
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
              :value="inputFieldReset"
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
              :value="inputFieldReset"
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              name="message"
              :value="inputFieldReset"
              required
            ></textarea>
          </div>
          <div class="tp-submit">
            <input type="submit" value="Connect Us" id="submit-field" />
          </div>
        </form>
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

/* Button Config */
.button-style-primary-tp {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: var(--natural);
  font-size: 1.497vw;
  position: relative;
  z-index: 1;
  width: 13vw;
  height: 2vw;
  border: 0.25vw solid var(--primary);
  border-radius: 0.68vw;
  padding: 1.224vw;
  font-family: Proxima Nova Alt Rg;
}

.button-style-primary-tp a {
  display: flex;
  text-decoration: none;
  font-size: 1.8vw;
  color: var(--menu-active);
}

.button-style-primary-tp:active {
  transform: scale(0.8);
  transition: 0.1s;
}

/* Custom class */
.width-18-vw {
  width: 18vw;
}

.width-22-vw {
  width: 22vw;
}

.width-28-vw {
  width: 28vw;
}

.margin-top-2hf-vw {
  margin-top: 2.5vw;
}

.background-no-repeat-size-contain {
  background-repeat: no-repeat;
  background-size: contain;
}

/* Section - 1 */

.tp-section-1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Proxima Nova Alt Rg;
}

.tp-section-1 .tp-title {
  font-weight: 900;
  font-size: 7.531vw;
  color: var(--natural);
  line-height: 6.122vw;
  letter-spacing: -0.008em;
}

.tp-section-1 .tp-desc {
  width: 90vw;
  margin-top: 6vw;
  font-weight: 400;
  font-size: 2.5vw;
  color: var(--natural);
  line-height: 2.721vw;
  text-align: center;
  padding-bottom: 5vw;
}

.tp-section-1 .sub-terms-title,
.privacy-security-title {
  margin-top: 8vw;
  padding-bottom: 2vw;
  font-weight: 700;
  font-size: 3.5vw;
  color: var(--natural);
  line-height: 4.354vw;
  text-align: center;
}

.tp-section-1 .sub-terms-title {
  margin-top: 20vw;
}

.tp-wrapper .section-2 {
  margin-top: -35vw;
  padding-bottom: 5vw;
}

.tp-stars {
  background-image: url(@/assets/svg/misc/stars/stars3.svg);
  width: 100vw;
  height: 150vw;
  position: absolute;
  z-index: -2;
}

.tp-vector-1 {
  background-image: url(@/assets/svg/misc/vector/vector8.svg);
  width: 100vw;
  height: 60vw;
  position: absolute;
  z-index: -2;
  margin-top: 40vw;
}

.tp-signal {
  background-image: url(@/assets/svg/tp/signal.svg);
  width: 70vw;
  height: 70vw;
  position: absolute;
  z-index: -2;
  margin-top: 70vw;
  margin-left: -30vw;
}

.tp-dummy {
  background-image: url(@/assets/svg/tp/rocket.svg);
  width: 15vw;
  height: 15vw;
  margin-left: 70vw;
  margin-top: 20vw;
  position: absolute;
}

.tp-wrapper .section-2 .title {
  font-size: 3.8vw;
  font-weight: 900;
}

.tp-wrapper .section-2 .caption {
  width: 40vw;
  margin-top: 1vw;
  font-size: 1.8vw;
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
  font-size: 1.1vw;
  font-weight: 700;
  line-height: 1.4vw;
  border-radius: 0.4vw;
}

.section-2 .form textarea {
  height: 15vw;
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

.form .tp-submit {
  display: flex;
  justify-content: center;
}

.form #submit-field {
  background-color: var(--natural);
  width: 12vw;
  height: 5vw;
  border: 0.25vw solid var(--primary);
  border-radius: 0.68vw;
  padding: 1vw;
  font-family: Proxima Nova Alt Rg;
  font-size: 1.8vw;
  color: var(--primary);
  cursor: pointer;
  margin-left: -26vw;
}

.form #submit-field:active {
  transform: scale(0.8);
  transition: 0.1s;
}
</style>
