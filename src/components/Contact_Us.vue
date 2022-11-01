<!-- Contact Us Page -->
<template>
    <div class="wrapper-contact-us">
    <div class="background-contact-us"></div>
    <div class="eclipse-contact-us"></div>
    <div v-if="coverActive" id="pop-up-cover" class="fade-in">
        <div v-if="loading" class="loading-wrapper fade-in">
            <div class="lds-ellipsis fade-in"><div></div><div></div><div></div><div></div></div>
        </div>
    </div>
    <div class="section-1-contact-us">
        <div class="title">
            <div class="title-seg-1">Talk to</div>
            <div class="title-seg-2">a Kitesense expert</div>
        </div>
        <div class="caption">
            Powered by Mastery.AI, we have solutions available that will fit your organisation.
        </div>
    </div>
    <div class="section-2-contact-us">
        <div class="desc">
            <div class="desc-title">
                Improve Learning Outcomes
            </div>
            <div class="desc-caption">
                Improve learning outcomes quickly with KiteSense optimising learning pathways.
            </div>
            <div class="desc-title">
                Higher Learners' Engagement & Enjoyment
            </div>
            <div class="desc-caption">
                Learners feel more supported in the learning process with curated content customised to their ability levels.
            </div>
            <div class="desc-title">
                Cost-Effectiveness
            </div>
            <div class="desc-caption">
                Save time and cost with smarter learning that automate differentiated instructions for each learner.  
            </div>
            <div class="desc-title">
                Data Trust
            </div>
            <div class="desc-caption">
                KiteSense™ has robust administrative, physical, managerial, technical and cyber defence safeguards in place to secure its facilities and systems from unauthorised access and to secure your company's data. 
            </div>
            <!-- <div class="desc-title">
                Easy to Use
            </div>
            <div class="desc-caption">
                Easy implementation, intuitive design interface, supports existing workflow seamlessly. 
            </div> -->
        </div>
        <div class="form">
            <div class="form-bg"></div>
            <div class="form-wrapper">
                <div class="form-title">Enquire now !</div>
                <form ref="form" @submit.prevent = "sendMail">
                <div class="input">
                        <input type="text" class="input-form" name="first_name" placeholder="First Name" autocomplete="off" required>
                        <input type="text" class="input-form" name="last_name" placeholder="Last Name" autocomplete="off" required>
                        <input type="email" class="input-form" name="email" placeholder="Email" autocomplete="off" required>
                        <input type="text" class="input-form" name="organization_company" placeholder="Organization / Company" autocomplete="off" required>
                        <input type="text" class="input-form" name="industry" placeholder="Industry" autocomplete="off" required>
                        <input type="text" class="input-form"  name="job_function" placeholder="Job Function" autocomplete="off" required>
                        <textarea name="message" value="" placeholder="Message"></textarea>
                    </div>
                    <div class="form-agreement">By registering, you confirm that you agree to the storing and processing of your personal data by KiteSense as described in the <DynamicLink to="" id="form-agreement-link">Terms & Policies.</DynamicLink>
                    </div>
                    <div class="contact-us-form-submit-field"><input type="submit" value="Send" id="submit-field"></div>
                </form>
            </div>
        </div>
    </div>
    <div class="section-3-contact-us">
        <div class="vector-4"></div>
        <div class="section-3-title">What's next?</div>
        <div class="container">
            <div class="sub-wrapper">
            <div class="sub-title">We'll start the conversation</div>
            <div class="caption">Our expert will contact you shortly to confirm your request.</div>
            </div>
            <div class="sub-wrapper">
            <div class="sub-title">Let's discuss your solution</div>
            <div class="caption">Let's unlock possibilities to achieve your goals.</div>
            </div>
            <div class="sub-wrapper">
            <div class="sub-title">Let’s start building</div>
            <div class="caption">Design, build and optimise a solution that fits your needs perfectly.</div>
            </div>
        </div>
    </div>
    <div v-show="showPopUp" class="pop-up-after-send fade-in">
        <div class="pop-up-after-send-background background-no-repeat-size-contain"></div>
        <div class="pop-up-after-send-title">
            Thank You !
        </div>
        <div class="pop-up-after-send-desc">
            <div class="pop-up-after-send-caption">In this report, learn in detail about how KiteSense is using AI in the primary areas they are focusing on today</div>
            <div class="pop-up-after-send-dummy background-no-repeat-size-contain"></div>
        </div>
    </div>
    </div>
</template>
<style src="../assets/css/Contact_Us.css"></style>
<script>
import emailjs from "emailjs-com";
import DynamicLink from "./logic/DynamicLink.vue";

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
            }, 3000);
        },
        sendMail() {
            this.coverActive = true;
            this.loading = true;
            emailjs.sendForm("service_g76yx9n", "template_5h9hx8i", this.$refs.form, "e5dLPmoZPvHz0ycRM").then(() => {
                // alert("Succesfully sent!")
                this.loading = false;
                this.showPopUp = true;
                this.showPopup();
                // clear input field
                this.$refs.form.reset();
                sessionStorage.setItem("user_filled_form_state", true);
                setTimeout(() => {
                    this.$router.push("/contact-us");
                }, 3000);
            }, (error) => {
                alert("Failed to sent! Please refresh the page.", error);
            });
        },
    },
    components: { DynamicLink }
}
</script>