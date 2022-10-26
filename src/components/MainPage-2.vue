<!-- Main Page Section 2 -->
<script setup>
import Carousel from "./Carousel.vue";
</script>
<template>
  <div class="wrapper">
    <div class="main-page-2-signal-1 background-no-repeat-size-contain"></div>
    <Carousel></Carousel>
    <div class="section-2">
      <div class="main-page-2-vector-1 background-no-repeat-size-contain"></div>
      <div class="text-content">
        <div class="title">Connect to Our Experts</div>
        <div class="caption">We help you to reach right leaners at the right time by enable students to take control of their learning set at their own pace to master learning objectives.</div>
      </div>
      <div class="form">
        <form ref="form" @submit.prevent = "sendMail">
          <div class="name"><input type="text" name="from_name" placeholder="Name" autocomplete="off" id="name-field" :value="inputFieldReset" required></div>
          <div><input type="email" name="from_email" placeholder="Your Email" autocomplete="off" id="email-field" :value="inputFieldReset" required></div>
          <div><textarea placeholder="Message" name="message" :value="inputFieldReset" required></textarea></div>
          <div class="main-page-2-submit"><input type="submit" value="Connect Us" id="submit-field"></div>
        </form>
      </div>
    </div>

  </div>
</template>

<style src="../assets/css/MainPage-2.css" scoped>
</style>

<script>
import emailjs from "emailjs-com";

export default {
  methods : {
    sendMail () {
        emailjs.sendForm('service_g76yx9n', 'template_3ljsqyd', this.$refs.form, 'e5dLPmoZPvHz0ycRM').then(() => {
            alert("Succesfully sent!")
            // clear input field
            this.$refs.form.reset();
        }, (error) => {
            alert("Failed to sent! Please refresh the page.", error);
        }
        )
    },
  }
}
</script>