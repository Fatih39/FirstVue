<script setup>
import { RouterView } from "vue-router";
import DropdownMenu from "@/components/piece/DropdownMenu.vue";
import SubDropdownMenu from "@/components/piece/SubDropdownMenu.vue";
import DynamicLink from "@/components/piece/DynamicLink.vue";
// import all necessary scripts
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
<template>
  <!-- For header & footer -->
  <header id="header">
    <div class="wrapper">
      <nav id="navbar">
        <div class="nav-wrapper">
          <div class="logo-wrapper">
            <DynamicLink to="/" class="logo-link">
              <div class="logo-link"></div>
            </DynamicLink>
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
                <button class="sol">Solutions</button>
              </template>
              <template #dropdown-menu>
                <div class="sub-menu">
                  <SubDropdownMenu>
                    <template #sub-button>
                      <div class="sub-menu-title">By Industries</div>
                    </template>
                    <template #sub-dropdown-menu>
                      <DynamicLink to="/solution/education"
                        ><div class="sub-menu" id="sub">
                          Education
                        </div></DynamicLink
                      >
                    </template>
                  </SubDropdownMenu>
                </div>
                <div class="sub-menu">
                  <SubDropdownMenu>
                    <template #sub-button>
                      <div class="sub-menu-title">By Use Cases</div>
                    </template>
                    <template #sub-dropdown-menu>
                      <DynamicLink to="/solution/improve-learning-outcomes"
                        ><div class="sub-menu" id="sub">
                          Improve Learning Outcomes
                        </div></DynamicLink
                      >
                    </template>
                  </SubDropdownMenu>
                </div>
              </template>
            </DropdownMenu>
            <DropdownMenu>
              <template #button>
                <button>Company</button>
              </template>
              <template #dropdown-menu>
                <DynamicLink to="/about"
                  ><div class="sub-menu" id="sub">About Us</div></DynamicLink
                >
                <DynamicLink to="/contact-us"
                  ><div class="sub-menu" id="sub">Contact Us</div></DynamicLink
                >
              </template>
            </DropdownMenu>
            <DropdownMenu>
              <template #button>
                <button class="sol">Resources</button>
              </template>
              <template #dropdown-menu>
                <DynamicLink to="/references"
                  ><div class="sub-menu" id="sub">References</div></DynamicLink
                >
                <div class="sub-menu">
                  <DynamicLink to="/events"
                    ><div class="sub-menu-title">Events</div></DynamicLink
                  >
                </div>
                <div class="sub-menu">
                  <DynamicLink to="/terms-policies-master"
                    ><div class="sub-menu-title">
                      Terms & Conditions
                    </div></DynamicLink
                  >
                </div>
                <DynamicLink to="/privacy-policy"
                  ><div class="sub-menu" id="sub">
                    Privacy Policy
                  </div></DynamicLink
                >
              </template>
            </DropdownMenu>
            <DynamicLink to="/contact-us"
              ><div class="get-started" id="get-started">
                Get Started
              </div></DynamicLink
            >
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
          <DynamicLink to="/" class="logo-link">
            <div class="logo-link"></div>
          </DynamicLink>
          <img
            alt="KiteSense logo"
            class="logo"
            src="@/assets/svg/kitesense_logo.svg"
          />
        </div>
        <div class="address">1 Pemimpin Dr, #02-03<br />Singapore 576151</div>
        <div class="socials">
          <a href="mailto:hello@kitesense.sg" class="socials-icon"
            ><img src="@/assets/svg/msg_icon.svg" alt="msg_icon"
          /></a>
          <a href="tel:+6589401525" class="socials-icon"
            ><img src="@/assets/svg/call_icon.svg" alt="call_icon"
          /></a>
          <DynamicLink
            to="https://www.linkedin.com/company/kitesense"
            class="socials-icon"
            ><img src="@/assets/svg/linkedin_icon.svg" alt="linkedin_icon"
          /></DynamicLink>
          <DynamicLink
            to="https://www.facebook.com/kitesensepage"
            class="socials-icon"
            ><img src="@/assets/svg/facebook_icon.svg" alt="facebook_icon"
          /></DynamicLink>
        </div>
      </div>
      <div>
        <div class="company">
          <div class="title">Company:</div>
          <div class="footer-content">
            <RouterLink to="/about" class="footer-menu">About Us</RouterLink>
          </div>
          <div class="footer-content">
            <RouterLink to="/contact-us" class="footer-menu"
              >Contact Us</RouterLink
            >
          </div>
          <div class="footer-content">
            <RouterLink to="/solution/education" class="footer-menu"
              >Solutions</RouterLink
            >
          </div>
        </div>
      </div>
      <div>
        <div class="resources">
          <div class="title">Resources:</div>
          <div class="footer-content">
            <RouterLink to="/references" class="footer-menu"
              >References</RouterLink
            >
          </div>
          <div class="footer-content">
            <RouterLink to="/events" class="footer-menu">Events</RouterLink>
          </div>
          <div class="footer-content">
            <RouterLink to="/terms-policies-master" class="footer-menu"
              >Terms & Conditions</RouterLink
            >
          </div>
          <div class="footer-content">
            <RouterLink to="/privacy-policy" class="footer-menu"
              >Privacy Policy</RouterLink
            >
          </div>
        </div>
      </div>
      <div>
        <div class="legal">
          <div class="title">Meet the Experts:</div>
          <div class="footer-content">
            Sign up with your email to join our community
          </div>
          <div class="footer-content">
            <form
              action="https://kitesense.us5.list-manage.com/subscribe/post?u=31a9a2a32ed707c2043c28f31&id=462b223dd7&f_id=00228ae9f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              class="validate"
              ref="form"
              target="_blank"
              @submit="showSuccessMsg"
            >
              <input
                type="email"
                placeholder=""
                v-model="email"
                name="EMAIL"
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
              <div class="submission-msg-pop-up" v-if="submittedState">
                <div class="wrappper-pop-up-msg-success" v-if="!invalidEmail">
                  <div
                    class="success-icon background-no-repeat-size-contain"
                  ></div>
                  <div class="success-msg">Subscribed!</div>
                </div>
                <div class="wrappper-pop-up-msg-success" v-if="invalidEmail">
                  <div class="invalid-email-msg" v-if="invalidEmail">
                    Invalid Email!
                  </div>
                </div>
              </div>
              <input
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
window.document.body.onscroll = () => {
  const mediaQuery = window.matchMedia("(max-width: 760px)");
  if (mediaQuery.matches) {
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      document.getElementById("header").classList.add("fixed-navbar-header");
      document.getElementById("navbar").classList.add("fade-in");
      document.getElementById("navbar").classList.add("fixed-navbar");
    } else {
      document.getElementById("header").classList.remove("fixed-navbar-header");
      document.getElementById("navbar").classList.remove("fixed-navbar");
    }
  }
};
export default {
  data: () => ({
    submittedState: false,
    invalidEmail: false,
    email: "",
  }),
  methods: {
    validation(email) {
      var checker =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return checker.test(email);
    },
    showSuccessMsg() {
      this.submittedState = true;
      if (this.validation(this.email)) {
        this.invalidEmail = false;
        console.log(this.validation(this.email));
        console.log(this.email);
      } else {
        this.invalidEmail = true;
        console.log(this.validation(this.email));
        console.log(this.email);
      }
    },
  },
};
</script>
<style src="@/assets/css/app.css" scoped></style>
