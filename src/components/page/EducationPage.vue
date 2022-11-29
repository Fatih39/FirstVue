<script setup>
import LandingPageNewsLetter from "@/components/piece/LandingPageNewsLetter.vue";
import DynamicLink from "@/components/piece/DynamicLink.vue";
</script>

<template>
  <div class="education-bg-1 background-no-repeat-size-contain"></div>
  <div v-if="coverActive" id="pop-up-cover" class="fade-in">
    <div v-if="loading" class="loading-wrapper fade-in">
      <div class="lds-ellipsis fade-in">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
  <div class="education-stars-2 background-no-repeat-size-contain"></div>
  <div class="education-stars-1 background-no-repeat-size-contain"></div>
  <div class="education-wrapper fade-in">
    <div class="education-section-1">
      <div class="education-section-1-title">
        4 Hours of Learning on KiteSense Improved Students Learning Outcomes by
        18%.
      </div>
      <div class="education-section-1-desc">
        Improve student learning outcomes and boost confidence with AI-driven
        self-directed learning.
      </div>
    </div>
    <div class="education-section-2">
      <div class="education-section-2-container">
        <div class="education-stats-title pt-3-hf">
          Increase average scores by 18%*
        </div>
        <div class="education-stats-desc">
          Personalised learning helps students focus on areas they need to
          improve in and keep them along the learning path by prescribing
          “What’s Next”.
        </div>
      </div>
      <div class="education-section-2-container">
        <div class="education-stats-title">
          Boost student confidence by 18%*
        </div>
        <div class="education-stats-desc">
          Student performance is monitored in real-time and difficulty of
          questions is automatically adjusted to ensure a clear path to mastery
          of the subject.
        </div>
      </div>
      <div class="education-section-2-container">
        <div class="education-stats-title">Improve enjoyment by 30%*</div>
        <div class="education-stats-desc">
          Multiple levels of intervention provide relevant support and feedback
          when the student needs it on their learning journey.
        </div>
      </div>
    </div>
    <div class="education-section-2-disclaimer">
      *Based on a research study with Temasek Polytechnic, Singapore
    </div>
    <div class="button-style-primary-education">
      <DynamicLink :to="{ name: 'references', hash: '#research-section' }"
        >Download Our Research Here</DynamicLink
      >
    </div>
    <div class="education-vector-1 background-no-repeat-size-contain"></div>

    <div class="education-stars-3 background-no-repeat-size-contain"></div>
    <div class="education-signal background-no-repeat-size-contain"></div>
    <div class="education-section-3">
      <div class="education-section-3-title">
        3 Tiers of Services Powered by Mastery.AI
      </div>
      <div class="education-section-3-container">
        <div class="education-section-3-text-content">
          <div class="education-section-3-text-content-title">
            Smart Worksheet
          </div>
          <div class="education-section-3-text-content-desc">
            KiteSense systematically tags, organises content and delivers
            differentiated curriculum easily. Worksheets are automatically
            generated based on the curriculum.
          </div>
        </div>
        <div
          class="education-section-3-picture-1 background-no-repeat-size-contain"
        ></div>
      </div>
      <div class="education-section-3-container">
        <div
          class="education-section-3-picture-2 background-no-repeat-size-contain"
        ></div>
        <div class="education-section-3-text-content">
          <div class="education-section-3-text-content-title">
            Smart Learning Journey
          </div>
          <div class="education-section-3-text-content-desc">
            Smart Learning Journey allows teachers to automatically stream
            students into ability bands and assign tailored practice suited to
            students ability levels. Learning analytics helps teachers gain
            insights into students abillities and progress in real time.
          </div>
        </div>
      </div>
      <div class="education-section-3-container">
        <div class="education-section-3-text-content">
          <div class="education-section-3-text-content-title">Smart Tutor</div>
          <div class="education-section-3-text-content-desc">
            An online adaptive learning platform that automatically prescribes
            what students have to learn next and recommends the right content at
            the right time. As learning paths are optimised based on each
            students’ profile, students can achieve proficiency of skills and
            knowledge faster while feeling more supported and engaged.
          </div>
        </div>
        <div
          class="education-section-3-picture-3 background-no-repeat-size-contain"
        ></div>
      </div>
    </div>

    <div
      class="education-section-4-vector background-no-repeat-size-contain"
    ></div>
    <div class="education-section-4">
      <div class="education-section-4-title">
        Empowering Students to Create a Path to Mastery
      </div>
      <div class="education-section-4-container-1">
        <div class="education-section-4-desc">
          <div class="education-section-4-text-content">
            <div class="education-section-4-text-content-title">
              Higher Students' Engagement & Enjoyment
            </div>
            <div class="education-section-4-caption">
              Students feel more supported in the learning process with curated
              content customized to their ability levels. While increasing
              engagement, students also better enjoy the learning experience.
            </div>
          </div>
          <DynamicLink to="/contact-us"
            ><div class="button-style-primary-education">
              Request Demo
            </div></DynamicLink
          >
        </div>
        <div
          class="education-section-4-dummy-1 background-no-repeat-size-contain"
        ></div>
      </div>
      <div class="education-section-4-container-2">
        <div
          class="education-section-4-dummy-1 background-no-repeat-size-contain"
        ></div>
        <div class="education-section-4-desc">
          <div class="education-section-4-text-content">
            <div class="education-section-4-text-content-title">
              Improve Learning Outcomes
            </div>
            <div class="education-section-4-caption">
              By analysing students' learning data points, KiteSense can enable
              educators to create a customised learning journey for every
              student. It will empower and engage students to gain mastery in
              every subject.
            </div>
          </div>
          <DynamicLink to="/solution/improve-learning-outcomes"
            ><div class="button-style-primary-education">
              Impact Study
            </div></DynamicLink
          >
        </div>
      </div>
    </div>

    <div
      class="education-section-5-cloud background-no-repeat-size-contain"
    ></div>
    <div class="education-section-5">
      <div class="education-section-5-container-1">
        <div class="education-section-5-desc">
          <div class="education-section-5-desc-title">
            Achieve Greater Results
          </div>
          <div class="education-section-5-desc-content">
            Help students achieve better scores and improve knowledge retention
            by providing an appropriate level of challenge personalised to their
            abilities. Mastery.AI automatically scaffolds learning tasks,
            optimise learning paths, and provide the right materials at the
            right time for each student.
          </div>
        </div>
        <div class="education-section-5-desc">
          <div class="education-section-5-desc-title">
            Teach More with Less Resources
          </div>
          <div class="education-section-5-desc-content">
            Educators are able to provide a personalised learning experience
            through KiteSense with content automatically recommended to students
            based on their competency. Educators are able to see where students
            are in their learning journey, focus on weaker students and stretch
            advanced students during in-person instruction.
          </div>
        </div>
      </div>

      <div class="education-section-5-container-2">
        <div class="education-section-5-desc">
          <div class="education-section-5-desc-title">
            Easily Identify Cohort Performance Trends
          </div>
          <div class="education-section-5-desc-content">
            Management team can monitor metrics to evaluate instructional
            outcomes in real time via a comprehensive dashboard. They can easily
            monitor student progress, identify skill gaps in teaching staff and
            make adjustments to curriculum as needed.
          </div>
        </div>
        <div class="education-section-5-desc">
          <div class="education-section-5-desc-title pt-5">
            Strength Relationship with Stakeholders
          </div>
          <div class="education-section-5-desc-content">
            For younger learners, parents can gain access to their child's
            progress reports to see areas of strengths and improvements needed.
            This shared understanding allows them to support students learning
            at home.
          </div>
        </div>
      </div>
    </div>

    <!-- Education Form -->
    <div class="education-form">
      <div class="education-form-bg"></div>
      <div class="education-form-title">Connect with Our Experts</div>
      <div class="education-form-caption">
        Let us show you how you can help learners create their own path to
        mastery at their own pace.
      </div>
      <form ref="form" @submit.prevent="sendMail">
        <div class="education-input">
          <input
            type="email"
            class="input-form"
            name="email"
            placeholder="Your Email"
            id="mce-EMAIL"
            required
            autocomplete="off"
          />
          <textarea name="message" value="" placeholder="Message"></textarea>
        </div>
        <div class="education-submit">
          <input
            type="submit"
            name="subscribe"
            id="mc-embedded-subscribe"
            value="Submit"
          />
        </div>
      </form>
      <div class="education-agreement">
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
  </div>
</template>

<style src="@/assets/css/Education.css"></style>

<script>
import emailjs from "emailjs-com";
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
      }, 5000);
    },
    sendMail() {
      this.coverActive = true;
      this.loading = true;
      emailjs
        .sendForm(
          "service_byvgb07",
          "template_gl1p7v4",
          this.$refs.form,
          "yB0WPLSEW_5syCQG2"
        )
        .then(
          () => {
            this.loading = false;
            this.showPopUp = true;
            this.showPopup();
            this.$refs.form.reset();
            setTimeout(() => {
              this.$router.push("/solution/education");
            }, 5000);
          },
          (error) => {
            alert("Failed to sent! Please refresh the page.", error);
          }
        );
    },
  },
  components: { LandingPageNewsLetter },
};
</script>
