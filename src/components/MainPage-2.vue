<script setup>
import Carousel from "./Carousel.vue";
</script>
<!-- Main Page Section 2 -->
<template>
  <div class="wrapper">
    <Carousel></Carousel>
    <div class="section-2">
      <div class="text-content">
        <div class="title">Connect to Our Experts</div>
        <div class="caption">We help you to reach right leaners at the right time by enable students to take control of their learning set at their own pace to master learning objectives.</div>
      </div>
      <div class="form">
        <form action="https://kitesense.us21.list-manage.com/subscribe/post?u=0b07771d977c2dbf9936e0d63&amp;id=f7033870e4&amp;f_id=00c9c3e1f0">
          <div class="name"><input type="text" value="" name="FNAME" class="input-name" placeholder="Name" autocomplete="off" required></div>
          <div><input type="email" value="" name="EMAIL" placeholder="Your Email" autocomplete="off" required></div>
          <div><textarea placeholder="Message" value="" name="FMESSAGE" required></textarea></div>
          <div class="button-style-primary" name="subscribe"><RouterLink to="/">Connect Us</RouterLink></div>
        </form>
      </div>
    </div>

  </div>
</template>

<style src="../assets/css/MainPage-2.css" scoped>
</style>


<!-- Error : cannot use 2 script tag in vue components -->

<!-- <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
<script type='text/javascript'>
(function($) {window.fnames = new Array(); window.ftypes = new Array();
fnames[1]='FNAME';
ftypes[1]='text';
fnames[0]='EMAIL';
ftypes[0]='email';
fnames[2]='FMESSAGE';
ftypes[2]='text';}(jQuery));
var $mcj = jQuery.noConflict(true);
</script> -->