<script setup>
import DynamicLink from './logic/DynamicLink.vue';
import LandingPageNewsLetter from './LandingPageNewsLetter.vue';
const addScript = (src) => {
  return new Promise((resolve, reject) => {
    const myScript = document.createElement('script');

    myScript.setAttribute('src', src); 
    myScript.addEventListener('load', resolve);
    myScript.addEventListener('error', reject);

    document.body.appendChild(myScript);
  });
}
addScript('https://code.jquery.com/jquery-3.6.1.min.js');
addScript('//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js');
</script>
<template>
    <div class="event-wrapper">
        <div class="event-stars background-no-repeat-size-contain"></div>
        <div class="event-page-title">
            KiteSense Mastery.AI is Education 3.0
        </div>
        <div class="event-section-2-wrapper">
            <div class="event-left-wrapper">
                <div class="event-left-desc">Come and experience how KiteSense can help you revolutionise your organisation to engage learners through tech-enabled learning experiences.</div>
                <div class="button-style-primary-event"><DynamicLink to="/">Leverage AI with Us</DynamicLink></div>
            </div>
            <div class="event-dummy background-no-repeat-size-contain">
                <!-- Dummy here -->
            </div>
            <div class="event-title-vector background-no-repeat-size-contain"></div>
        </div>
        <div class="event-section-3-wrapper">
            <div class="event-vector background-no-repeat-size-contain"></div>
            <div class="all-past-section fade-in">
                <div class="label">Upcoming Event :</div>
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
                            Sands Expo, Singapore (Booth #L29)
                        </div>
                        <div class="event-button">
                            <div class="button-style-primary-event">
                                <DynamicLink to="/contact-us" >Request Demo Now !</DynamicLink>
                            </div>
                            <div class="button-style-primary-event">
                                <DynamicLink to="/" >Register Your Visit</DynamicLink>
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
                            <DynamicLink to="" >Join the Community</DynamicLink>
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
                            <DynamicLink to="" >Join the Community</DynamicLink>
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
                            <DynamicLink to="">Join the Community</DynamicLink>
                        </div>
                    </div>
                    <div class="past-event-2">
                        <div class="past-event-image-2 background-no-repeat-size-contain">

                        </div>
                        <div class="past-event-details-1">
                            AWS Summit Singapore 6 October 2022
                        </div>
                        <div class="past-event-details-2">
                            Suntec Singapore Convention & Exhibition Centre
                        </div>
                        <div class="button-style-primary-event">
                            <DynamicLink to="">Join the Community</DynamicLink>
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
                <div class="event-mailchimp-form-title">We are preparing for the next event !<br><br>Stay tuned !</div>
                <form action="https://kitesense.us5.list-manage.com/subscribe/post?u=31a9a2a32ed707c2043c28f31&id=462b223dd7&f_id=00228ae9f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" @submit="showPopup" ref="form">
                    <div class="event-mailchimp-form-input">
                        <input type="email" placeholder="Your Email" name="EMAIL" v-model="email" id="mce-EMAIL" required autocomplete="off" />
                        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_31a9a2a32ed707c2043c28f31_462b223dd7" tabindex="-1" value=""></div>
                        <div class="invalid-email-msg" v-show="invalidEmail">Please input an valid email address</div>
                    </div>
                    <div class="about-us-submit"><input type="submit" name="subscribe" id="mc-embedded-subscribe" value="Sign Up For Updates"></div>
                </form>
            </div>
        </div>
        <div v-show="showPopUp" class="pop-up-after-send fade-in">
            <LandingPageNewsLetter />
        </div>
    </div>
</template>

<style src="../assets/css/Event.css"></style>
<script>
// import { onMounted } from "vue";
export default {
    data () {
        return {
            showPopUp : false,
            invalidEmail : false,
            email : null,
        }
    },
    methods : {
        validation (email) {
            var checker = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return checker.test(email);
        },
        showPopup () {
            if (this.validation(this.email)) {
                // console.log(this.validation(this.email));
                this.invalidEmail = false;
                this.showPopUp = true;
                setTimeout(() => {
                    this.showPopUp = false;
                },3000);
                // this.email = null;
            } else {
                this.invalidEmail = true;
                // console.log(this.validation(this.email));
            }
        }
    }
}


</script>