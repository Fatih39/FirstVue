<script setup>

</script>
<template>
    <div class="references-wrapper fade-in">
        <!-- Section - 1 -->
        <div class="references-stars-1 background-no-repeat-size-contain"></div>
        <div class="references-section-1">
            <div class="references-section-1-title">
                KiteSense Mastery.AI is Education 3.0
            </div>
            <div class="references-section-1-desc">
                At KiteSense, we believe that every learner deserves an excellent education.
            </div>
        </div>
        <!-- Section - 2 -->
        <div class="references-section-2-vector-1"></div>
        <div class="references-section-2">
            <div class="references-cloud-vector background-no-repeat-size-contain"></div>
            <div class="references-section-2-title">
                Brochures
            </div>
            <div class="references-section-2-content">
                <div class="references-section-2-content-container">
                    <div class="references-section-2-content-image-1 background-no-repeat-size-contain">
                        <!-- Image here -->
                    </div>
                    <div class="references-section-2-content-desc">
                        Augmented Learning with Mastery.AI - An adaptive learning platform for self directed learning
                    </div>
                    <div class="button-style-primary" @click="validated ? downloadFile1() : validate()">Download</div>
                </div>
                <div class="references-section-2-content-container">
                    <div class="references-section-2-content-image-2 background-no-repeat-size-contain">
                        <!-- Image here -->
                    </div>
                    <div class="references-section-2-content-desc pb-5">
                        Smart Tutor - The #1 tool for forging paths to mastery.
                    </div>
                    <div class="button-style-primary" @click="validated ? downloadFile2() : validate()">Download</div>
                </div>
                <div class="references-section-2-content-container">
                    <div class="references-section-2-content-image-3 background-no-repeat-size-contain">
                        <!-- Image here -->
                    </div>
                    <div class="references-section-2-content-desc pb-5">
                        Smart Worksheets - Automated worksheet generation for differentiated curriculum
                    </div>
                    <div class="button-style-primary" @click="validated ? downloadFile3() : validate()">Download</div>
                </div>
            </div>

            <div class="references-section-2-content">
                <div class="references-section-2-content-container">
                    <div class="references-section-2-content-image-4 background-no-repeat-size-contain">
                        <!-- Image here -->
                    </div>
                    <div class="references-section-2-content-desc">
                        Smart Learning Journey - Automatically stream  learners into ability bands
                    </div>
                    <div class="button-style-primary mt-min-5" @click="validated ? downloadFile1() : validate()">Download</div>
                </div>
            </div>

            <div class="references-vector background-no-repeat-size-contain"></div>
            <div class="references-stars-2 background-no-repeat-size-contain"></div>
            <div class="references-section-2-title-2">
                Research
            </div>
            <div class="references-section-2-research-container" id="research-section">
                <div class="references-section-2-research-image background-no-repeat-size-contain">
                    <!-- Image here -->
                </div>
                <div class="references-section-2-research-desc">
                    <div class="research-title">
                        A research study done with Temasek Polytechnic, Singapore
                    </div>
                    <div class="research-caption">
                        Bringing Out the Best in Every Learner - As a leading institution of higher education, this research is one of many undertaken by Temasek Polytechnic to improve and enhance faculty instruction.
                    </div>
                    <div class="button-style-primary" @click="validated ? downloadFile4() : validate()">Download</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style src="../assets/css/References.css" scoped></style>
<script>
// import axios from 'axios'
export default {
    data () {
        return {
            path : null,
            validated : false,
            // publicPath : import.meta.env.BASE_URL,
        }
    },
    mounted () {
        let current_user_state = sessionStorage.getItem("user_filled_form_state");
        if (current_user_state == "true") {
            this.validated = true;
        }
        // console.log(this.validated);
    },  
    methods : {
        // Error on build server
        downloadFile1() {
            window.open("https://drive.google.com/file/d/1IM576rB8d29dGJAGCork9BOrrSC3kQ9Z/view?usp=sharing");
        },
        downloadFile2() {
            window.open("https://drive.google.com/file/d/1SuXCZpzoXO15-nodClYidhEaHI4Xx9KL/view?usp=sharing")
        },
        downloadFile3() {
            window.open("https://drive.google.com/file/d/1SuXCZpzoXO15-nodClYidhEaHI4Xx9KL/view?usp=sharing")
        },
        downloadFile4() {
            window.open("https://drive.google.com/file/d/1IM576rB8d29dGJAGCork9BOrrSC3kQ9Z/view?usp=sharing")
        },
        validate() {
            let current_user_state = sessionStorage.getItem("user_filled_form_state");
            if (current_user_state == "true") {
                this.$router.push('/references');
                // this.path = "about-us";
                this.validated = true;
                // this.hide = false;
            } else {
                this.$router.push('/landing-page');
            }
            // console.log(current_user_state);
            // console.log(this.validated);
        }
    }

}


</script>