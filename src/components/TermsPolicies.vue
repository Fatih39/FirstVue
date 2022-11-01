<!-- Terms & Policies Page -->
<template>
    <div class="tp-wrapper">
        <div class="tp-stars background-no-repeat-size-contain"></div>
        <div class="tp-section-1">
            <div class="tp-title">Welcome !</div>
            <div class="tp-desc">
                This page contains KiteSense's subscription terms and related policies.
                <br>
                <br>
                If you have any questions or concerns please contact us here :
            </div>
            <div class="button-style-primary-tp"><DynamicLink to="/">Contact Us Now</DynamicLink></div>
            
            <div class="tp-vector-1 background-no-repeat-size-contain"></div>
            <div class="tp-signal background-no-repeat-size-contain"></div>
            <div class="tp-dummy background-no-repeat-size-contain"></div>
            <div class="sub-terms-title">
                Subscription Terms (Customer)
            </div>
            <div class="button-style-primary-tp width-22-vw"><DynamicLink to="/terms-policies-master">Master Terms & Conditions</DynamicLink></div>

            <div class="privacy-security-title">
                Privacy and Security Resources
            </div>
            <div class="button-style-primary-tp width-18-vw"><DynamicLink to="https://drive.google.com/file/d/1a5M4pcGWPd7Q0IVPJpijBpox_Iyo8HfD/view?usp=sharing">Acceptable Use Policy</DynamicLink></div>
            <div class="button-style-primary-tp width-28-vw margin-top-2hf-vw"><DynamicLink to="https://drive.google.com/file/d/1Q7ZRVhe2nElLmlqJlsiQ6erm-Txx093v/view?usp=sharing">Data Privacy and Protection Policy</DynamicLink></div>
            
        </div>
    
    <!-- Contact Form -->
    <div class="section-2">
        <div class="text-content">
            <div class="title">Connect with Our Experts</div>
            <div class="caption">If you have any questions, feel free to email us at info@kitesense.sg
                <br>
                <br>
                If you are interested in learning more about our Enterprise engagements, get in touch with us through this form.</div>
        </div>
        <div class="form">
            <form ref="form" @submit.prevent = "sendMail">
                <div class="name"><input type="text" name="from_name" placeholder="Name" autocomplete="off" id="name-field" :value="inputFieldReset" required></div>
                <div><input type="email" name="from_email" placeholder="Your Email" autocomplete="off" id="email-field" :value="inputFieldReset" required></div>
                <div><textarea placeholder="Message" name="message" :value="inputFieldReset" required></textarea></div>
                <div class="tp-submit"><input type="submit" value="Connect Us" id="submit-field"></div>
            </form>
        </div>
    </div>

    </div>
</template>

<style src="../assets/css/TermsPolicies.css"></style>
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