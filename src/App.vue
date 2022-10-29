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
                  <div class="sub-menu" id="sub">Digitalise Publishing Process</div>
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
            <div class="footer-content"><RouterLink to="/">Blog</RouterLink></div>
            <div class="footer-content"><RouterLink to="/events">Events</RouterLink></div>
            <div class="footer-content"><RouterLink to="/references">References</RouterLink></div>
            <div class="footer-content"><RouterLink to="/terms-policies">Terms & Policies</RouterLink></div>
        </div>
      </div>
      <div>
        <div class="legal">
            <div class="title">Meet the Experts:</div>
            <div class="footer-content">Sign Up with your email to join our community</div>
            <!-- <div class="pop-up-success">

            </div> -->
            <div class="footer-content">
              <form action="https://kitesense.us21.list-manage.com/subscribe/post?u=0b07771d977c2dbf9936e0d63&amp;id=f7033870e4&amp;f_id=00c9c3e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
              <input type="email" placeholder="Your Email" name="EMAIL" value="" id="mce-EMAIL" required autocomplete="off" />
              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_0b07771d977c2dbf9936e0d63_f7033870e4" tabindex="-1" value=""></div>
              <input type="submit" name="subscribe" id="mc-embedded-subscribe" value="Submit" />
              <div class="success-msg-pop-up" v-if="submittedState">Subscribed!</div>
              </form>
            </div>
        </div>
      </div>

    </div>
  </footer>
</template>

<script>
import { onMounted } from "vue";

export default {
  submittedState : false,
}

onMounted(() => {
  try {
    addScript('https://code.jquery.com/jquery-3.6.1.min.js');
    addScript('//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js');
    (function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[1]='FNAME';ftypes[1]='text';fnames[0]='EMAIL';ftypes[0]='email';fnames[2]='FMESSAGE';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);
    this.submittedState = true;

  } catch (e) {
    console.log(e);
}
})

</script>

<style src="./assets/css/app.css" scoped>
</style>
