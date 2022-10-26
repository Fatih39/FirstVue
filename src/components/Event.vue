<script setup>
import DynamicLink from './logic/DynamicLink.vue';
</script>
<template>
    <div class="event-wrapper">
        <div class="event-stars background-no-repeat-size-contain"></div>
        <div class="event-page-title">
            Leverage AI with Us
        </div>
        <div class="event-section-2-wrapper">
            <div class="event-left-wrapper">
                <div class="event-left-desc">Come and experience how KiteSense can help you revolutionise your organisation to engage learners through tech-enabled learning experiences.</div>
                <div class="button-style-primary-event"><DynamicLink to="/">Be a part of a revolutionise movement</DynamicLink></div>
            </div>
            <div class="event-dummy background-no-repeat-size-contain">
                <!-- Dummy here -->
            </div>
            <div class="event-title-vector background-no-repeat-size-contain"></div>
        </div>
        <div class="event-section-3-wrapper">
            <div class="event-vector background-no-repeat-size-contain"></div>
            <div class="all-past-section fade-in">
                <div class="label">Past event :</div>
                <div class="all-past-events">
                    <div class="all-past-event-image background-no-repeat-size-contain">
                        <!-- Image here -->
                    </div>
                    <div class="event-desc">
                        <div class="event-details-1">
                            <div class="event-details-title">EDUtech_Asia 2022 Singapore</div>
                            <div class="event-details-date">9-10 August 2022</div>
                        </div>
                        <div class="event-details-2">
                            Sands Expo, Singapore (Booth #L29)
                        </div>
                        <div class="event-button">
                            <div class="button-style-primary-event">
                                Request Demo Now !
                            </div>
                            <div class="button-style-primary-event">
                                Register Your Visit
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Exhibitions -->
                <div class="past-event-label">Past Exhibitions :</div>
                <div class="event-vector-2 background-no-repeat-size-contain"></div>
                <div class="exhibitions-past-events">
                    <div class="past-event-1">
                        <div class="past-event-image-1 background-no-repeat-size-contain">

                        </div>
                        <div class="past-event-details-1">
                            EduTECH 2022 Australia 10-11 August 2022
                        </div>
                        <div class="past-event-details-2">
                            Melbourne Convention and Exhibition Centre, Melbourne, Australia (Booth #104)
                        </div>
                        <div class="button-style-primary-event">
                            Join the Community
                        </div>
                    </div>
                    <div class="past-event-2">
                        <div class="past-event-image-2 background-no-repeat-size-contain">

                        </div>
                        <div class="past-event-details-1">
                            Frankfurter Buchmesse Germany 19-23 October 2022
                        </div>
                        <div class="past-event-details-2">
                            Messe Frankfurt, Ludwig-Erhard-Anlage 1, Frankfurt, Germany (Hall 4.2-Booth B20)
                        </div>
                        <div class="button-style-primary-event">
                            Join the Community
                        </div>
                    </div>
                </div>

                <!-- Tech Talk -->
                <div class="past-event-label">Past Tech Talk :</div>
                <div class="tech-talk-past-events">
                    <div class="past-event-1">
                        <div class="past-event-image-1 background-no-repeat-size-contain">

                        </div>
                        <div class="past-event-details-1">
                            InnovLogue : Bridging Learning & Work Performance with Learning Analytics.<br>26 May 2022
                        </div>
                        <!-- <div class="past-event-details-2">
                            
                        </div> -->
                        <div class="button-style-primary-event">
                            Join the Community
                        </div>
                    </div>
                    <div class="past-event-2">
                        <div class="past-event-image-2 background-no-repeat-size-contain">

                        </div>
                        <div class="past-event-details-1">
                            Summit Singapore 6 October 2022
                        </div>
                        <div class="past-event-details-2">
                            Suntec Singapore Convention & Exhibition Centre
                        </div>
                        <div class="button-style-primary-event">
                            Join the Community
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mailchimp form -->
        <div class="event-mailchimp-vector background-no-repeat-size-contain"></div>
        <div class="event-mailchimp-wrapper">
            <div class="event-mailchimp-image background-no-repeat-size-contain"></div>
            <div class="event-mailchimp-form">
                <div class="event-mailchimp-form-title">We are preparing for the next events !<br><br>Stay tuned !</div>
                <form action="https://kitesense.us21.list-manage.com/subscribe/post?u=0b07771d977c2dbf9936e0d63&amp;id=f7033870e4&amp;f_id=00c9c3e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <div class="event-mailchimp-form-input">
                        <input type="email" placeholder="Your Email" name="EMAIL" value="" id="mce-EMAIL" required autocomplete="off" />
                    </div>
                    <div class="about-us-submit"><input type="submit" name="subscribe" id="mc-embedded-subscribe" value="Sign Up For Updates"></div>
                </form>


            </div>
        </div>

    </div>
</template>

<style src="../assets/css/Event.css"></style>
<script>
import { onMounted } from "vue";

const addScript = (src) => {
  return new Promise((resolve, reject) => {
    const myScript = document.createElement('script');

    myScript.setAttribute('src', src); 
    myScript.addEventListener('load', resolve);
    myScript.addEventListener('error', reject);

    document.body.appendChild(myScript);
  });
}

onMounted(() => {
  try {
    addScript('https://code.jquery.com/jquery-3.6.1.min.js');
    addScript('//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js');
    (function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[1]='FNAME';ftypes[1]='text';fnames[0]='EMAIL';ftypes[0]='email';fnames[2]='FMESSAGE';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);
  } catch (e) {
    console.log(e);
}
})

</script>