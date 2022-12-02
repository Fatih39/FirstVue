<template>
  <div class="popup-wrapper fade-in">
    <div class="landing-page-bg background-no-repeat-size-contain"></div>
    <div class="landing-page-stars background-no-repeat-size-contain"></div>
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
    <div class="pop-up-content">
      <div class="pop-up-left-wrapper">
        <div class="pop-up-title">Augmenting Learning with Mastery.AI</div>
        <div class="pop-up-form-desc">
          Fill out this form to explore and get access to our full references.
        </div>
        <div class="character"></div>
      </div>
      <div class="pop-up-form-input">
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
          </div>
          <div class="form-agreement">
            By registering, you confirm that you agree to the storing and
            processing of your personal data by KiteSense as described in the
            Terms & Conditions.
          </div>
          <div class="landing-page-form-submit-field">
            <input type="submit" value="Download Report" id="submit-field" />
          </div>
        </form>
      </div>
    </div>

    <div v-show="showPopUp" class="pop-up-after-send fade-in">
      <div
        class="pop-up-after-send-background background-no-repeat-size-contain"
      ></div>
      <div class="pop-up-after-send-title">Thank You !</div>
      <div class="pop-up-after-send-desc">
        <div class="pop-up-after-send-caption">
          In this references, learn in detail about how KiteSense is using AI in
          the primary areas they are focusing on today
        </div>
        <div
          class="pop-up-after-send-dummy background-no-repeat-size-contain"
        ></div>
      </div>
    </div>
  </div>
</template>

<style src="@/assets/css/LandingPage.css"></style>
<script>
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      showPopUp: false,
      coverActive: false,
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
            // clear input field
            this.$refs.form.reset();
            sessionStorage.setItem("user_filled_form_state", true);
            this.showPopUp = true;
            this.showPopup();
            setTimeout(() => {
              this.$router.push("/references");
            }, 5000);
          },
          (error) => {
            alert("Failed to sent! Please refresh the page.", error);
          }
        );
    },
  },
};
</script>
