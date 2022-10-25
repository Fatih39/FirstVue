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
            <div class="event-title">
                <div id="exhibitions" class="event-title-content" @mouseover="exhibitionsActive = true; webinarsActive = false; techTalkActive = false">Exhibitions</div>
                <div class="event-title-content margin-left-10vw" id="webinars" @mouseover="exhibitionsActive = false; webinarsActive = true; techTalkActive = false">Webinars</div>
                <div class="event-title-content margin-left-10vw" @mouseover="exhibitionsActive = false; webinarsActive = false; techTalkActive = true">Tech Talk</div>
            </div>
            <div class="event-vector background-no-repeat-size-contain"></div>
            <!-- EXHIBITIONS -->
            <div v-if="exhibitionsActive" class="exhibitions-section fade-in">
                <div class="label">Upcoming Events :</div>
                <div class="upcoming-events">
                    <div class="upcoming-event-image background-no-repeat-size-contain">
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
                <div class="label">Past Events :</div>
                <div class="past-events">
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
            </div>
            <!-- WEBINARS -->
            <div v-if="webinarsActive" class="webinars-section fade-in">
                <div class="label">Upcoming Events :</div>
                <div class="upcoming-events">
                    <div class="upcoming-event-image background-no-repeat-size-contain">
                        <!-- Image here -->
                    </div>
                    <div class="event-desc">
                        <div class="event-details-1">
                            <div class="event-details-title">We are preparing for the next events !</div>
                        </div>
                        <div class="event-details-2">
                            Stay tuned !
                        </div>
                        <div class="event-form">
                            <div class="event-input-field">
                                <input type="text" id="email" placeholder="Your Email" autocomplete="off">
                            </div>
                            <div class="event-submit-field">
                                <input type="submit" id="submit-field" value="Sign Up for Updates">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="label">Past Events :</div>
                <div class="past-events">
                    <div class="past-event-1">
                        <div class="past-event-image-1 background-no-repeat-size-contain">

                        </div>
                        <div class="past-event-section-right">
                            <div class="past-event-details-1">
                                Differentiated Instruction: Create the best learning experience with KiteSense.
                            </div>
                            <div class="past-event-details-2">
                                It was a great chance to share how to create the best learning experience for your student with data-driven differentiated instruction.
                            </div>
                            <div class="button-style-primary-event">
                                Join the Community
                            </div>
                        </div>
                    </div>
                    <div class="past-event-2">
                        <div class="past-event-image-2 background-no-repeat-size-contain">

                        </div>
                        <div class="past-event-section-right">
                            <div class="past-event-details-1">
                                Strategies to Prepare Students for the Digitalisation of the VUCA Era for Teachers : "Automating DI to Prep Students for the VUCA World"
                            </div>
                            <div class="past-event-details-2">
                                KiteSense with Teachin.id from Indonesia shared a summary of the key highlight of using our apps to help the teaching process.
                            </div>
                            <div class="button-style-primary-event">
                                Join the Community
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- TECH TALK -->
            <div v-if="techTalkActive" class="techtalk-section fade-in">
                <div class="label">Upcoming Events :</div>
                <div class="upcoming-events">
                    <div class="upcoming-event-image background-no-repeat-size-contain">
                        <!-- Image here -->
                    </div>
                    <div class="event-desc">
                        <div class="event-details-1">
                            <div class="event-details-title">We are preparing for the next events !</div>
                        </div>
                        <div class="event-details-2">
                            Stay tuned !
                        </div>
                        <div class="event-form">
                            <div class="event-input-field">
                                <input type="text" id="email" placeholder="Your Email" autocomplete="off">
                            </div>
                            <div class="event-submit-field">
                                <input type="submit" id="submit-field" value="Sign Up for Updates">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="label">Past Events :</div>
                <div class="past-events">
                    <div class="past-event-1">
                        <div class="past-event-image-1 background-no-repeat-size-contain">

                        </div>
                        <div class="past-event-details-1">
                            Differentiated Instruction: Create the best learning experience with KiteSense
                        </div>
                        <div class="button-style-primary-event">
                            Join the Community
                        </div>
                    </div>
                    <div class="past-event-2">
                        <div class="past-event-image-2 background-no-repeat-size-contain">

                        </div>
                        <div class="past-event-details-1">
                            Strategies to Prepare Students for the Digitalisation of the VUCA Era for Teachers : "Automating DI to Prep Students for the VUCA World"
                        </div>
                        <div class="button-style-primary-event">
                            Join the Community
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<style src="../assets/css/Event.css"></style>
<script>

import $ from 'jquery';

// $(document).ready(() => {
//     const exhibitionsPage = () => {
//         $('.exhibitions-section').addClass('display-flex');
//         $('.webinars-section').addClass('display-none');
//     }

//     const webinarsPage = () => {
//         $('.exhibitions-section').addClass('display-none');
//         $('.webinars-section').addClass('display-flex');
//     }
// })
export default {
    data() {
        return {
            exhibitionsActive : true,
            webinarsActive : false,
            techTalkActive : false,
        }
    }
    
}

</script>