<script setup>
import LandingPageNewsLetter from "./LandingPageNewsLetter.vue";
const addScript = (src) => {
  return new Promise((resolve, reject) => {
    const myScript = document.createElement("script");

    myScript.setAttribute("src", src);
    myScript.addEventListener("load", resolve);
    myScript.addEventListener("error", reject);

    document.body.appendChild(myScript);
  });
};

addScript("https://code.jquery.com/jquery-3.6.1.min.js");
addScript("//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js");
</script>
<!-- ilc = improve-learning-outcomes -->
<template>
  <div class="ilc-bg background-no-repeat-size-contain"></div>
  <div class="ilc-stars-1 background-no-repeat-size-contain"></div>
  <div class="ilc-wrapper fade-in">
    <div class="ilc-section-1">
      <div class="ilc-section-1-title">
        Empower Learners to Take Charge of Their Learning
      </div>
      <div class="ilc-section-1-caption">
        Deployed in Leading Educational Institutions
      </div>
      <div class="button-style-primary-ilc">
        <DynamicLink to="/solution/education">Read More</DynamicLink>
      </div>
      <div class="ilc-stars-2 background-no-repeat-size-contain"></div>
      <div class="ilc-section-1-dummy background-no-repeat-size-contain">
        <!-- Image here! -->
      </div>
      <div class="ilc-section-1-extra-caption">
        Demonstrated Positive Impact to Learning
      </div>
    </div>
    <div class="ilc-section-2">
      <div class="ilc-section-2-1">
        <div class="ilc-section-2-logo background-no-repeat-size-contain">
          <!-- Image here! -->
        </div>
        <div class="ilc-section-2-text-content-1">
          <div class="ilc-section-2-text-content-title">
            Smart Learning Program for Singapore Asia Publisher (SAP)
          </div>
          <div class="ilc-section-2-text-content-content">
            <ul>
              <li>
                Intelligent publishing by ingesting and tagging content based on
                topics, subtopics and difficulty levels.
              </li>
              <li>
                Enhance SAP’s capacity to publish smart digital books and
                provide differentiated learning pathways for learners across
                different learning abilities.
              </li>
            </ul>
          </div>
        </div>
        <div class="ilc-section-2-text-content-2">
          <div class="ilc-section-2-text-content-title">
            Graded Literacy Programme for Educational Company
          </div>
          <div class="ilc-section-2-text-content-content">
            <ul>
              <li>
                To accelerate literacy recovery due to Covid-19 learning loss.
              </li>
              <li>
                An asynchronous self-directed digital reading programme using AI
                to recommend books based on learners’ reading ability.
              </li>
              <li>
                Automatically streams learners into differentiated learning
                paths with effective learning recommendations to improve
                literacy level.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="ilc-signal background-no-repeat-size-contain"></div>
      <div class="ilc-section-2-2">
        <div class="ilc-section-2-logo background-no-repeat-size-contain">
          <!-- Image here! -->
        </div>
        <div class="ilc-section-2-text-content-1">
          <div class="ilc-section-2-text-content-title">
            IT Skills Development for Temasek Polytechnic
          </div>
          <div class="ilc-section-2-text-content-content">
            <ul>
              <li>
                Provide content for Python, Unity and other popular programming
                languages.
              </li>
              <li>Meet growing demand for a skilled IT workforce.</li>
              <li>
                Used by young adults at Temasek Polytechnic, a leading Institute
                of Higher Learning in Singapore.
              </li>
            </ul>
          </div>
        </div>
        <div class="ilc-section-2-text-content-2">
          <div class="ilc-section-2-text-content-title">
            Tutoring & Coaching for Leading Tutoring Center in Asia
          </div>
          <div class="ilc-section-2-text-content-content">
            <ul>
              <li>
                A learning recommender for asynchronous self-directed learning
                at scale.
              </li>
              <li>
                Automatically prescribes the "What's Next" with learning speed
                and content personalised to every learner.
              </li>
              <li>
                Effective learning recommendations to help learners stretch or
                catch up, Increasing capacity to learn independently.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="ilc-stars-3 background-no-repeat-size-contain"></div>
    <div class="ilc-rocket background-no-repeat-size-contain"></div>
    <div class="ilc-form">
      <div class="ilc-form-title">Stay Up to Date with KiteSense</div>
      <div class="ilc-form-caption">Don't miss out on the latest updates!</div>
      <form
        action="https://kitesense.us5.list-manage.com/subscribe/post?u=31a9a2a32ed707c2043c28f31&id=462b223dd7&f_id=00228ae9f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        ref="form"
        @submit="showPopup"
        novalidate
      >
        <div class="ilc-input">
          <input
            type="email"
            placeholder="Your Email"
            name="EMAIL"
            v-model="email"
            id="mce-EMAIL"
            required
            autocomplete="off"
          />
          <div style="position: absolute; left: -5000px" aria-hidden="true">
            <input
              type="text"
              name="b_31a9a2a32ed707c2043c28f31_462b223dd7"
              tabindex="-1"
              value=""
            />
          </div>
          <div class="invalid-email-msg" v-show="invalidEmail">
            Please input an valid email address
          </div>
        </div>
        <div class="ilc-submit">
          <input
            type="submit"
            name="subscribe"
            id="mc-embedded-subscribe"
            value="Register Now"
          />
        </div>
      </form>
      <div class="ilc-agreement">
        By registering, you confirm that you agree to the storing and processing
        of your personal data by KiteSense as described in the
        <DynamicLink to="/terms-policies-master" id="agreement-link"
          >Terms & Conditions.</DynamicLink
        >
      </div>
    </div>
    <div v-show="showPopUp" class="pop-up-after-send fade-in">
      <LandingPageNewsLetter />
    </div>
    <div class="ilc-cloud background-no-repeat-size-contain"></div>
  </div>
</template>
<style src="../assets/css/ImproveLearningOutcomes.css"></style>
<script>
export default {
  data: () => ({
    showPopUp: false,
    invalidEmail: false,
    email: "",
  }),
  methods: {
    validation(email) {
      var checker =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return checker.test(email);
    },
    showPopup() {
      if (this.validation(this.email)) {
        this.invalidEmail = false;
        this.showPopUp = true;
        setTimeout(() => {
          this.showPopUp = false;
        }, 5000);
      } else {
        this.invalidEmail = true;
      }
    },
  },
};
</script>
