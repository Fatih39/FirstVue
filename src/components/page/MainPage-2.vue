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

<style src="@/assets/css/MainPage-2.css" scoped></style>

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
