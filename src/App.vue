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
              src="@/assets/svg/misc/companyLogo/kitesense.svg"
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
            src="@/assets/svg/misc/companyLogo/kitesense.svg"
          />
        </div>
        <div class="address">1 Pemimpin Dr, #02-03<br />Singapore 576151</div>
        <div class="socials">
          <a href="mailto:hello@kitesense.sg" class="socials-icon"
            ><img src="@/assets/svg/misc/msg_icon.svg" alt="msg_icon"
          /></a>
          <a href="tel:+6589401525" class="socials-icon"
            ><img src="@/assets/svg/misc/call_icon.svg" alt="call_icon"
          /></a>
          <DynamicLink
            to="https://www.linkedin.com/company/kitesense"
            class="socials-icon"
            ><img
              src="@/assets/svg/misc/companyLogo/linkedin.svg"
              alt="linkedin_icon"
          /></DynamicLink>
          <DynamicLink
            to="https://www.facebook.com/kitesensepage"
            class="socials-icon"
            ><img
              src="@/assets/svg/misc/companyLogo/facebook.svg"
              alt="facebook_icon"
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
<style scoped>
@keyframes getStarted {
  from {
    padding: 1vw;
  }
  to {
    padding: 0.5vw;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation-name: fade-in;
  animation-duration: 0.25s;
}

* {
  --natural: #ffffff;
  --primary: #024f94;
  --menu-active: #005999;
  --accent: #132f66;
  --base: #000000;
  --test: #ff0000;
  --success: #22bb33;
  --danger: #ff0000;
}
header {
  line-height: 1.5;
  max-height: 100vh;
  /* transition: 0.25s; */
}

@font-face {
  font-family: Proxima Nova Alt Bld;
  src: url(@/assets/fonts/ProximaNovaA-Bold.woff) format("woff");
}

@font-face {
  font-family: Proxima Nova Alt Rg;
  src: url(@/assets/fonts/ProximaNovaA-Regular.ttf);
}

@font-face {
  font-family: Sharp Sans;
  src: url(@/assets/fonts/SharpSansNo1-Book.ttf) format("truetype");
  src: url(@/assets/fonts/SharpSansDispNo1-Semibold.ttf) format("truetype");
  src: url(@/assets/fonts/SharpSansDispNo1-SemiboldIt.ttf) format("truetype");
}

/* Custom Class */
.background-no-repeat-size-contain {
  background-repeat: no-repeat;
  background-size: contain;
}

/* Link styles */
a {
  text-decoration: none;
  color: none;
}

.wrapper {
  font-family: Proxima Nova Alt Rg;
  width: 100vw;
  height: auto;
  padding-bottom: 10vw;
}

/* Logo styles */
.logo-wrapper {
  width: 50%;
  display: flex;
  justify-content: left;
  margin-left: 12vw;
}

.logo-wrapper img {
  width: 20vw;
  height: 10vw;
}

.logo-link {
  width: 20vw;
  height: 10vw;
  cursor: pointer;
  position: absolute;
  z-index: 2;
}

/* Nav bar Styles */
.nav-menu-wrapper {
  width: 100%;
  margin-right: 7vw;
  display: flex;
  justify-content: right;
  align-items: center;
}

.nav-menu-wrapper button {
  cursor: pointer;
  font-family: Proxima Nova Alt Bld;
}

.nav-menu-wrapper .get-started {
  padding: 0.75vw;
  border: 0.25vw solid var(--primary);
  border-radius: 0.68vw;
  color: var(--primary);
  font-weight: 700;
  font-size: 1.7vw;
  font-family: Proxima Nova Alt Bld;
  letter-spacing: 0.01em;
  background-color: var(--natural);
  margin-left: 1vw;
  width: 10vw;
}

.nav-menu-wrapper .get-started:active {
  transform: scale(0.8);
  transition-duration: 0.25s;
}

.nav-wrapper {
  width: 100vw;
  display: flex;
  flex-direction: row;
}

nav {
  width: 105vw;
  font-size: 1.5vw;
  font-weight: 900;
  text-align: center;
  margin-top: 2rem;
  margin-left: -7vw;
  display: flex;
  justify-content: right;
  position: relative;
  z-index: 9999;
}

/* Button styles for nav-bar */
.nav-menu-wrapper button {
  margin-right: 1vw;
  width: auto;
  height: 3vw;
  background: none;
  border: none;
  color: var(--natural);
  font-weight: 700;
  font-size: 1.5vw;
  letter-spacing: 0.025vw;
}

.nav-menu-wrapper button:focus {
  outline: none;
}

.nav-menu-wrapper button:hover {
  background-color: var(--accent);
}

/* Style per sub-menu */
.nav-menu-wrapper .sub-menu {
  background-color: var(--natural);
}

.nav-menu-wrapper #sub {
  padding-left: 1vw;
  padding-top: 1vw;
  padding-bottom: 1vw;
}

.nav-menu-wrapper .sub-menu:hover,
a:hover {
  background-color: var(--accent);
  font-weight: 400;
  color: var(--natural);
}

.sub-menu .sub-menu-title {
  padding-left: 1vw;
  padding-top: 1vw;
  padding-bottom: 1vw;
  cursor: pointer;
}

.sub-menu .sub-menu-title:hover {
  background-color: var(--accent);
  color: var(--natural);
}

.menu-active {
  background-color: var(--accent);
  border-radius: 0.5vw;
}

nav a {
  text-decoration: none;
}

/* Styles for footer */
footer {
  max-height: 20vw;
}

.footer-wrapper {
  display: flex;
  width: 100vw;
  max-width: 100vw;
  background-color: var(--base);
  padding-top: 2vw;
  padding-bottom: 2vw;
  color: var(--natural);
  font-family: Proxima Nova Alt Rg;
}

.footer-wrapper .logo-wrapper {
  margin-left: 0;
  margin-top: -2vw;
}

.footer-wrapper .logo-wrapper img {
  width: 25;
  height: 10vw;
}

.footer-wrapper a {
  text-decoration: none;
  color: var(--natural);
}

.footer-wrapper .contact {
  width: 40vw;
  padding-left: 3vw;
}

.footer-wrapper .address {
  margin-top: 1vw;
  font-size: 1.4vw;
  font-weight: 400;
  line-height: 1.7vw;
}

.footer-wrapper .socials {
  margin-top: 1vw;
}

.footer-wrapper .socials img {
  margin-top: 1vw;
  padding-right: 1vw;
  width: 3vw;
  height: 3vw;
}

.footer-wrapper .socials .socials-icon:hover {
  background: none;
}

.footer-wrapper .footer-menu:hover {
  border-bottom: 0.125vw solid var(--natural);
  background-color: var(--base);
}

.footer-wrapper .company,
.resources,
.legal {
  padding-top: 3vw;
  margin-left: 5vw;
}

.footer-wrapper .footer-content {
  padding-bottom: 1vw;
  font-size: 1.361vw;
  font-weight: 400;
  line-height: 1.7vw;
}
.footer-wrapper .title {
  padding-bottom: 2vw;
  font-weight: 700;
  font-size: 1.361vw;
  line-height: 1.7vw;
}

.legal {
  width: 20vw;
}

.legal #mce-EMAIL {
  width: 15vw;
  height: 2vw;
  border-radius: 0.34vw;
  padding-left: 0.5vw;
}

.legal #mce-EMAIL::-webkit-input-placeholder {
  vertical-align: -webkit-baseline-middle;
  font-size: 1vw;
}

.legal #mce-EMAIL:focus {
  outline: none;
}

.legal #mc-embedded-subscribe {
  margin-top: 2vw;
  border-radius: 0.68vw;
  border: solid 0.2vw var(--primary);
  font-weight: 400;
  font-size: 1vw;
  letter-spacing: 0.014em;
  color: var(--primary);
  width: 7vw;
  margin-left: 0.2vw;
}

.legal .submission-msg-pop-up {
  position: absolute;
  display: flex;
  align-items: center;
  width: 7vw;
  color: 0.5vw;
}

.legal .wrappper-pop-up-msg-success {
  display: flex;
  color: var(--success);
}

.legal .invalid-email-msg {
  position: absolute;
  margin-top: 0.25vw;
  width: 10vw;
  font-size: 1.2vw;
  color: var(--danger);
}

.success-icon {
  background-image: url(@/assets/svg/misc/success_icon.svg);
  width: 1vw;
  height: 1vw;
  color: var(--success);
  margin: 0.5vw;
}

.fixed-navbar {
  position: fixed;
  margin-top: 0vw;
  width: 110vw;
  margin-left: -10vw;
  transition-duration: 0.25s;
  background-color: var(--menu-active);
}

.fixed-navbar-header {
  padding-bottom: 20vw;
  transition: 0.25s;
}

@media (max-width: 1000px) {
  .nav-menu-wrapper button {
    font-size: 2vw;
  }
  #mce-EMAIL {
    font-size: 1vw;
  }
}
</style>
