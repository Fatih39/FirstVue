<!-- About Us Page -->
<template>
<div class="wrapper-about-us">
    <!-- Eclipse_5 here -->
    <div class="section-1-about-us">
        Empowering Learners to Learn Independently at Their Own Pace.
    </div>
    <div class="about-us-background background-no-repeat-size-contain"></div>
    <div class="about-us-dummy"></div>
    <div class="vector-5  background-no-repeat-size-contain"></div>
    <div class="stars-1"></div>
    <div class="stars-2"></div>
    <!-- Section 2 -->
    <div class="stars-3"></div>
    <div class="section-2-about-us">
        <div class="about-us-caption">
            KiteSense™ is a cloud-based recommender that guides every learner towards mastery of a chosen subject. The AI engine scaffolds learning tasks for each subject and optimize learning paths for each learner based on pedagogical research and individual learner profile. Using data collected from formative assessments, KiteSense™ personalises the learning speed and content to every learner,  providing the right tools and support to meet their individual needs. 
        </div>
        <div class="about-us-container">
            <div class="about-us-profile-container">
                <div class="about-us-profile-wrapper">
                    <DynamicLink to="https://www.linkedin.com/in/yuehphern/">
                    <div class="about-us-profile-photo-desc-1 background-no-repeat-size-contain">
                        <!-- Photo here ! -->
                    </div>
                    </DynamicLink>
                    <div class="about-us-profile-desc">
                        <div class="about-us-name-1">Yueh Phern</div>
                        <div class="about-us-position-1">Founder/CEO</div>
                    </div>
                </div>
                <div class="about-us-story-1">
                    After catching the startup bug from Stanford GSB, Yueh Phern with his partner Wee Koon started KiteSense with a vision to harness the potential of data to change teaching and learning, and change lives. We are dedicated to making the best learning analytics system for educators
                </div>
            </div>

            <div class="about-us-profile-container">
                <div class="about-us-story-2">
                    After catching the startup bug from Stanford GSB, Yueh Phern with his partner Wee Koon started KiteSense with a vision to harness the potential of data to change teaching and learning, and change lives. We are dedicated to making the best learning analytics system for educators
                </div>
                <div class="about-us-profile-wrapper">
                    <DynamicLink to="https://www.linkedin.com/in/yan-wee-koon/">
                    <div class="about-us-profile-photo-desc-2 background-no-repeat-size-contain">
                        <!-- Photo here ! -->
                    </div>
                    </DynamicLink>
                    <div class="about-us-profile-desc">
                        <div class="about-us-name-2">Yan Wee Koon</div>
                        <div class="about-us-position-2">Co-Founder/CTO</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Section 3 -->
    <div class="vector-6 background-no-repeat-size-contain"></div>
    <div class="vector-7 background-no-repeat-size-contain"></div>
    <div class="section-3-about-us">
        <div class="section-3-about-us-title">
            Meet Our Advisor Who Helped Us Get Here
        </div>
        <div class="section-3-about-us-content">
            <div>
            Professor Alex Siow is a renowned author, professor, board chairman, managing director, independent director, consultant, and advisor. Prior to joining NUS, Prof Alex was the Managing Director, Health & Public Service, Accenture, SVP/CIO, Starhub and CIO, HDB 
            </div>
            <div>
            He is also an experienced independent advisory professional, with more than a decade in the industry. He regularly advises on business strategy for companies that are using or developing new ways of moving and managing technology roadmap across borders.
            </div> 
            <div>
            We are very happy to have Professor Alex Siow as our advisor. He is helping us to get KiteSense better, so you can access our high-quality services and data for your personalised teaching effectively and easily.
            </div>
        </div>
        <div class="section-3-about-us-profile-wrapper">
            <div class="section-3-profile-photo-desc">
                <DynamicLink to="https://www.linkedin.com/in/prof-alex-siow-5213b4/">
                <div class="profile-photo background-no-repeat-size-contain">
                    <!-- Photo here -->
                </div> 
                </DynamicLink>
                <div class="section-3-about-us-name">Prof Alex Siow</div>
                <div class="section-3-about-us-position">KiteSense’s Advisor</div>
            </div>
            <div class="section-3-profile-caption">Professor (Practice) at the Department of Information Systems and Analytics of the School of Computing, National University of Singapore.</div>
        </div>
    </div>

    <div class="about-us-form">
        <div class="about-us-form-bg"></div>
        <div class="about-us-form-title">
            One-Stop Solution for All Need
        </div>
        <div class="about-us-form-caption">
            Don’t miss out on our future updates, stay tuned to get the latest updates.
        </div>
        <form action="https://kitesense.us21.list-manage.com/subscribe/post?u=0b07771d977c2dbf9936e0d63&amp;id=f7033870e4&amp;f_id=00c9c3e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div class="about-us-input">
            <input type="email" placeholder="Your Email" name="EMAIL" value="" id="mce-EMAIL" required autocomplete="off" />
        </div>
        <div class="about-us-submit"><input type="submit" name="subscribe" id="mc-embedded-subscribe" value="Forge Mastery Now"></div>
        </form>
        <div class="about-us-agreement">By registering, you confirm that you agree to the storing and processing of your personal data by KiteSense as described in the <b>Terms & Policies.</b></div>
    </div>
</div>
</template>
<style src="../assets/css/About_Us.css">

</style>

<script setup>
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