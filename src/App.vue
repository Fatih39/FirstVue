<script setup>
import { RouterView } from "vue-router";
import DropdownMenu from "./components/logic/DropdownMenu.vue"
import SubDropdownMenu from "./components/logic/SubDropdownMenu.vue"
import DynamicLink from "./components/logic/DynamicLink.vue";
// import all necessary scripts
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
  <!-- For header & footer -->
  <header>
    <div class="wrapper">
      <nav>
        <div class="nav-wrapper">
        <div class="logo-wrapper">
        <img
        alt="KiteSense logo"
        class="logo"
        src="@/assets/svg/kitesense_logo.svg"
        />
        </div>
        <div class="nav-menu-wrapper">
          <DynamicLink to="/">
            <button>Home</button>
          </DynamicLink>
        <DropdownMenu>
          <template #button>
            <button class="sol">Solution</button>
          </template>
          <template #dropdown-menu>
            <!-- onmouseover="activateParent('solution')" onmouseout="deactivateParent('solution')" -->
            <!-- <button id="solution">Solution</button> -->
            <div class="sub-menu">
              <SubDropdownMenu>
                <template #sub-button>
                  <div class="sub-menu-title">By Industries</div>
                </template>
                <template #sub-dropdown-menu>
                  <div class="sub-menu" id="sub">Education</div>
                  <div class="sub-menu" id="sub">Content Publisher</div>
                </template>
              </SubDropdownMenu>
            </div>
            <div class="sub-menu">
              <SubDropdownMenu>
                <template #sub-button>
                  <div class="sub-menu-title">By Use Cases</div>
                </template>
                <template #sub-dropdown-menu>
                  <div class="sub-menu" id="sub">Improve Learning Outcomes</div>
                  <div class="sub-menu" id="sub">Smart Learning Program</div>
                </template>
              </SubDropdownMenu>
            </div>
            <!-- <div class="dummy">Dummy</div> -->
          </template>
        </DropdownMenu>
        <DropdownMenu>
          <template #button>
            <button>Company</button>
          </template>
          <template #dropdown-menu>
            <DynamicLink to="/about"><div class="sub-menu" id="sub">About Us</div></DynamicLink>
            <DynamicLink to="/contact-us"><div class="sub-menu" id="sub">Contact Us</div></DynamicLink>
          </template>
        </DropdownMenu>
        <DropdownMenu>
          <template #button>
            <button class="sol">Resources</button>
          </template>
          <template #dropdown-menu>
            <DynamicLink to="/references"><div class="sub-menu" id="sub">References</div></DynamicLink>
            <div class="sub-menu">
              <DynamicLink to="/events"><div class="sub-menu-title">Events</div></DynamicLink>
            </div>
            <div class="sub-menu">
              <DynamicLink to="/terms-policies"><div class="sub-menu-title">Terms & Policies</div></DynamicLink>
            </div>
            <DynamicLink to=""><div class="sub-menu" id="sub">Support</div></DynamicLink>
          </template>
        </DropdownMenu>
        <DynamicLink to="/contact-us"><div class="get-started">Get Started</div></DynamicLink>
        </div>
      </div>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer>
    <div class="footer-wrapper">
      <div class="contact">
        <div class="logo-wrapper">
          <img
          alt="KiteSense logo"
          class="logo"
          src="@/assets/svg/kitesense_logo.svg"
          />
        </div>
        <div class="address">1 Pemimpin Dr, #02-03<br>Singapore 576151</div>
        <div class="socials">
          <RouterLink to="/"><img src="./assets/svg/msg_icon.svg" alt="msg_icon"></RouterLink>
          <RouterLink to="/"><img src="./assets/svg/call_icon.svg" alt="msg_icon"></RouterLink>
          <RouterLink to="/"><img src="./assets/svg/linkedin_icon.svg" alt="msg_icon"></RouterLink>
          <RouterLink to="/"><img src="./assets/svg/facebook_icon.svg" alt="msg_icon"></RouterLink>
        </div>
      </div>
      <div>
        <div class="company">
          <div class="title">Company:</div>
          <div class="footer-content"><RouterLink to="/about">About Us</RouterLink></div>
          <div class="footer-content"><RouterLink to="/contact-us">Contact Us</RouterLink></div>
          <div class="footer-content"><RouterLink to="/">Solutions</RouterLink></div>
        </div>
      </div>
      <div>
        <div class="resources">
            <div class="title">Resources:</div>
            <div class="footer-content"><RouterLink to="/references">References</RouterLink></div>
            <div class="footer-content"><RouterLink to="/events">Events</RouterLink></div>
            <div class="footer-content"><RouterLink to="/terms-policies">Terms & Policies</RouterLink></div>
            <div class="footer-content"><RouterLink to="/">Support</RouterLink></div>
        </div>
      </div>
      <div>
        <div class="legal">
            <div class="title">Meet the Experts:</div>
            <div class="footer-content">Sign Up with your email to join our community</div>
            <!-- <div class="pop-up-success">

            </div> -->
            <div class="footer-content">
              <form action="https://kitesense.us5.list-manage.com/subscribe/post?u=31a9a2a32ed707c2043c28f31&id=462b223dd7&f_id=00228ae9f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" ref="form" target="_blank" @submit="showSuccessMsg">
              <input type="email" placeholder="Your Email" v-model="email" name="EMAIL" id="mce-EMAIL" required autocomplete="off" />
              <!-- <div id="mce-responses" class="clear foot">
                <div class="response" id="mce-error-response" style="display:none"></div>
                <div class="response" id="mce-success-response" style="display:none"></div>
              </div> -->
              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_31a9a2a32ed707c2043c28f31_462b223dd7" tabindex="-1" value=""></div>
              <div class="submission-msg-pop-up" v-if="submittedState">
                <div class="wrappper-pop-up-msg-success" v-if="!invalidEmail">
                  <div class="success-icon background-no-repeat-size-contain"></div>
                  <div class="success-msg">Subscribed!</div>
                </div>
                <div class="wrappper-pop-up-msg-success" v-if="invalidEmail">
                  <div class="invalid-email-msg" v-if="invalidEmail">Invalid Email!</div>
                </div>
              </div>
              <input type="submit" name="subscribe" id="mc-embedded-subscribe" value="Submit" />
              </form>
            </div>
        </div>
      </div>

    </div>
  </footer>
</template>

<script>
// import { onMounted, toHandlers } from "vue";

export default {
  data () {
    return {
      submittedState : false,
      invalidEmail : false,
      email: null
    }
  },
  methods : {
    validation (email) {
      var checker = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return checker.test(email);
    },
    showSuccessMsg () {
      this.submittedState = true;
      if (this.validation(this.email)) {
        this.invalidEmail = false;
        console.log(this.validation(this.email));
        console.log(this.email);
        // setTimeout(() => {
        // this.showPopUp = false;
        // },3000);
      } else {
        this.invalidEmail = true;
        console.log(this.validation(this.email));
        console.log(this.email);
      }
    }
  }
}

</script>

<style src="./assets/css/app.css" scoped>
</style>
