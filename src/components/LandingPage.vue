<!-- Pop Up Landing Page -->
<template>
    <div class="popup-wrapper">
        <div class="landing-page-bg background-no-repeat-size-contain"></div>
        <div class="landing-page-stars background-no-repeat-size-contain"></div>
        <div class="pop-up-content">
            <div class="pop-up-left-wrapper">
            <div class="pop-up-title">
                Augmenting Learning with AI
            </div>
            <div class="pop-up-form-desc">
                Fill out this form to explore and get access to our full references.
            </div>
            <div class="character">

            </div>
            </div>
            <div class="pop-up-form-input">
                <form ref="form" @submit.prevent = "sendMail">
                <div class="input">
                        <input type="text" class="input-form" name="first_name" placeholder="First Name" autocomplete="off" required>
                        <input type="text" class="input-form" name="last_name" placeholder="Last Name" autocomplete="off" required>
                        <input type="email" class="input-form" name="email" placeholder="Email" autocomplete="off" required>
                        <input type="text" class="input-form" name="organization_company" placeholder="Organization / Company" autocomplete="off" required>
                        <input type="text" class="input-form" name="industry" placeholder="Industry" autocomplete="off" required>
                        <input type="text" class="input-form"  name="job_function" placeholder="Job Function" autocomplete="off" required>
                    </div>
                    <div class="form-agreement">By registering, you confirm that you agree to the storing and processing of your personal data by KiteSense as described in the Privacy Statement.</div>
                    <div class="form-submit-field"><input type="submit" value="Send" id="submit-field"></div>
                </form>

            </div>

            <!-- <button></button> -->
        </div>
    </div>
</template>

<style src="../assets/css/LandingPage.css"></style>

<script>
import emailjs from "emailjs-com";

export default {
    methods : {
        sendMail () {
            alert("Sending...");
            emailjs.sendForm('service_g76yx9n', 'template_5h9hx8i', this.$refs.form, 'e5dLPmoZPvHz0ycRM').then(() => {
                alert("Succesfully sent!")
                // clear input field
                this.$refs.form.reset();
                sessionStorage.setItem("user_filled_form_state", true);
                this.$router.push('/terms-policies');
            }, (error) => {
                alert("Failed to sent! Please refresh the page.", error);
            }
            )
        },
    }
}


</script>