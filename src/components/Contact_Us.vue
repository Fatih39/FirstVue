<!-- Contact Us Page -->
<template>
    <div class="wrapper-contact-us">
    <div class="background-contact-us"></div>
    <div class="eclipse-contact-us"></div>
    <div class="section-1-contact-us">
        <div class="title">
            <div class="title-seg-1">Talk to</div>
            <div class="title-seg-2">a Kitesense expert</div>
        </div>
        <div class="caption">
            We work with every customer to tailor a solution to fit perfectly into your future plans.
        </div>
    </div>
    <div class="section-2-contact-us">
        <div class="desc">
            <div class="desc-title">
                Next Gen-AI
            </div>
            <div class="desc-caption">
                Adapt lessons to needs with precision and speed analytics enchance visibility into progression real time. 
            </div>
            <div class="desc-title">
                Cost Effectiveness
            </div>
            <div class="desc-caption">
                Our developers based in Singapore and our local technical support team can assist you immediately to migrate your data. 
            </div>
            <div class="desc-title">
                Lower Cost
            </div>
            <div class="desc-caption">
                Providing high-quality curriculum at faster and lower price point.  
            </div>
            <div class="desc-title">
                Data Trust
            </div>
            <div class="desc-caption">
                We’ve developed a robust administrative process to ensure that every moment of data security and privacy is taken seriously. 
            </div>
            <div class="desc-title">
                Easy to Use
            </div>
            <div class="desc-caption">
                Easy implementation, intuitive design interface, supports existing workflow seamlessly. 
            </div>
        </div>
        <div class="form">
            <div class="form-bg"></div>
            <div class="form-wrapper">
                <div class="form-title">Built-in smart tools to help educators supercharge learning every learner.</div>
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
                    <div class="form-agreement">By registering, you confirm that you agree to the storing and processing of your personal data by KiteSense as described in the <b>Terms & Policies.</b></div>
                    <div class="contact-us-form-submit-field"><input type="submit" value="Send" id="submit-field"></div>
                </form>
            </div>
        </div>
    </div>
    <div class="section-3-contact-us">
        <div class="vector-4"></div>
        <div class="section-3-title">What will be the next step ?</div>
        <div class="container">
            <div class="sub-wrapper">
            <div class="sub-title">We’ll prepare your solutions</div>
            <div class="caption">Our expert will contact you shortly to confirm your request.</div>
            </div>
            <div class="sub-wrapper">
            <div class="sub-title">Together we discuss it</div>
            <div class="caption">Let’s get discuss all possibilities to elevate your outcomes !</div>
            </div>
            <div class="sub-wrapper">
            <div class="sub-title">Let’s start building</div>
            <div class="caption">Optimise implement the solutions that fit every need perfectly.</div>
            </div>
        </div>
    </div>
    </div>
</template>
<style src="../assets/css/Contact_Us.css"></style>
<script>
import emailjs from "emailjs-com";

export default {
  methods : {
    sendMail () {
        emailjs.sendForm('service_g76yx9n', 'template_5h9hx8i', this.$refs.form, 'e5dLPmoZPvHz0ycRM').then(() => {
            alert("Succesfully sent!")
            // clear input field
            this.$refs.form.reset();
            sessionStorage.setItem("user_filled_form_state", true);
        }, (error) => {
            alert("Failed to sent! Please refresh the page.", error);
        }
        )
    },
  }
}
</script>