<!-- About Us Page -->
<script setup>
import LandingPageNewsLetter from "./LandingPageNewsLetter.vue";
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
<div class="wrapper-about-us fade-in">
    <!-- Eclipse_5 here -->
    <div class="about-us-background background-no-repeat-size-contain"></div>
    <div class="stars-1"></div>
    <div class="stars-2"></div>
    <!-- Section 2 -->
    <div class="stars-3"></div>
    <div class="section-1-about-us">
        <div class="section-1-about-us-title">About Us</div>
        <div class="section-1-desc-1">
            KiteSense is a cloud-based recommender that guides every learner towards mastery of a chosen subject. The AI engine scaffolds learning tasks for each subject and optimises learning paths for each learner based on pedagogical research and individual learner profile.
        </div>
        <div class="section-1-desc-2">
            KiteSense is a team of engineers, data scientists, and designers passionate about using technology to provide the right tools and support for learners. We believe in teamwork, learning together, being creative, thoughtful, and helping every learner to succeed.
        </div>

        <div class="about-us-profile">
            <div class="about-us-person-profile-1">
                <DynamicLink to="https://www.linkedin.com/in/yuehphern/">
                    <div class="about-us-profile-image-1 background-no-repeat-size-contain">
                        <!-- Image here -->
                    </div>
                </DynamicLink>
                <div class="about-us-profile-1-name">Tan Yueh Phern</div>
                <div class="about-us-profile-1-position">Founder/CEO</div>
            </div>

            <div class="about-us-person-profile-2">
                <DynamicLink to="https://www.linkedin.com/in/yan-wee-koon/">
                    <div class="about-us-profile-image-2 background-no-repeat-size-contain">
                        <!-- Image here -->
                    </div>
                </DynamicLink>
                <div class="about-us-profile-2-name">Yan Wee Koon</div>
                <div class="about-us-profile-2-position">Co-Founder/CTO</div>
            </div>
        </div>

    </div>
    
    <!-- Section 3 -->
    <div class="about-us-stars-4 background-no-repeat-size-contain"></div>
    <div class="vector-6 background-no-repeat-size-contain"></div>
    <div class="vector-7 background-no-repeat-size-contain"></div>
    <!-- <div class="stars-4 background-no-repeat-size-contain"></div> -->
    <div class="section-3-about-us">
        <div class="section-3-about-us-title">
            Meet Our Advisor
        </div>
        <!-- <div class="section-3-about-us-content">
            <div>
                Professor Alex Siow is a renowned author, professor, board chairman, managing director, independent director, consultant, and advisor. Prior to joining NUS, Prof Alex was the Managing Director, Health & Public Service, Accenture, SVP/CIO, Starhub and CIO, HDB. He is also an experienced independent advisory professional, with more than a decade in the industry. 
            </div>
            <div>
                We are very happy to have Professor Alex Siow as our advisor. He is helping us to get KiteSense better, so you can access our high-quality services and data for your personalised teaching effectively and easily. 
            </div> 
        </div> -->
        
        <div class="section-3-about-us-profile-wrapper">
            <div class="section-3-profile-photo-desc">
                <DynamicLink to="https://www.linkedin.com/in/prof-alex-siow-5213b4/">
                <div class="profile-photo background-no-repeat-size-contain">
                    <!-- Photo here -->
                </div> 
                </DynamicLink>
            </div>
            <div class="section-3-about-us-desc">
                <div class="section-3-about-us-name">Prof Alex Siow</div>
                <!-- <div class="section-3-about-us-position">KiteSense’s Advisor</div> -->
                <div class="section-3-profile-caption">Professor (Practice) at the Department of Information Systems and Analytics of the School of Computing, National University of Singapore.</div>
            </div>
        </div>
    </div>

    <div class="about-us-form">
        <div class="about-us-form-bg"></div>
        <div class="about-us-form-title">
            Stay Up to Date with KiteSense
        </div>
        <div class="about-us-form-caption">
            Don't miss out on the latest updates!
        </div>
        <form action="https://kitesense.us5.list-manage.com/subscribe/post?u=31a9a2a32ed707c2043c28f31&id=462b223dd7&f_id=00228ae9f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" ref="form" @submit="showPopup" novalidate>
        <div class="about-us-input">
            <input type="email" placeholder="Your Email" name="EMAIL" v-model="email" id="mce-EMAIL" required autocomplete="off" />
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_31a9a2a32ed707c2043c28f31_462b223dd7" tabindex="-1" value=""></div>
            <div class="invalid-email-msg" v-show="invalidEmail">Please input an valid email address</div>
        </div>
        <div class="about-us-submit"><input type="submit" name="subscribe" id="mc-embedded-subscribe" value="Register Now"></div>
        </form>
        <div class="about-us-agreement">By registering, you confirm that you agree to the storing and processing of your personal data by KiteSense as described in the <DynamicLink to="" id="agreement-link">Terms & Condition.</DynamicLink></div>
    </div>
    <div v-show="showPopUp" class="pop-up-after-send fade-in">
        <LandingPageNewsLetter />
    </div>
</div>
</template>
<style src="../assets/css/About_Us.css">

</style>

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
                this.invalidEmail = false;
                this.showPopUp = true;
                setTimeout(() => {
                    this.showPopUp = false;
                },3000);
                // this.email = null;
            } else {
                this.invalidEmail = true;
            }
        }
    }
}

</script>