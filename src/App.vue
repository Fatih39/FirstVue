<script setup>
import { RouterLink, RouterView } from "vue-router";
import DropdownMenu from "./components/logic/DropdownMenu.vue"
import SubDropdownMenu from "./components/logic/SubDropdownMenu.vue"

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
          <RouterLink to="/">
            <button>Home</button>
          </RouterLink>
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
                  <div class="sub-menu" id="sub">Advanced Manufacturing</div>
                  <div class="sub-menu" id="sub">Information Technology</div>
                  <div class="sub-menu" id="sub">Security</div>
                </template>
              </SubDropdownMenu>
            </div>
            <div class="sub-menu">
              <SubDropdownMenu>
                <template #sub-button>
                  <div class="sub-menu-title">By Use Cases</div>
                </template>
                <template #sub-dropdown-menu>
                  <div class="sub-menu" id="sub">Improve Academic Result</div>
                  <div class="sub-menu" id="sub">Teach More with Less</div>
                  <div class="sub-menu" id="sub">Enhance Learning Platforms</div>
                  <div class="sub-menu" id="sub">Upskill Workface</div>
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
            <div class="sub-menu" id="sub">About Us</div>
            <div class="sub-menu" id="sub">Contact Us</div>
          </template>
        </DropdownMenu>
        <DropdownMenu>
          <template #button>
            <button class="sol">Resources</button>
          </template>
          <template #dropdown-menu>
            <div class="sub-menu" id="sub">Blog</div>
            <div class="sub-menu">
              <SubDropdownMenu>
                <template #sub-button>
                  <div class="sub-menu-title">References</div>
                </template>
                <template #sub-dropdown-menu>
                  <div class="sub-menu" id="sub">User Guide</div>
                  <div class="sub-menu" id="sub">Brochures</div>
                </template>
              </SubDropdownMenu>
            </div>
            <div class="sub-menu">
              <SubDropdownMenu>
                <template #sub-button>
                  <div class="sub-menu-title">Events</div>
                </template>
                <template #sub-dropdown-menu>
                  <div class="sub-menu" id="sub">Exhibitions</div>
                  <div class="sub-menu" id="sub">Webinars</div>
                </template>
              </SubDropdownMenu>
            </div>
            <div class="sub-menu">
              <SubDropdownMenu>
                <template #sub-button>
                  <div class="sub-menu-title">Legal</div>
                </template>
                <template #sub-dropdown-menu>
                  <div class="sub-menu" id="sub">Privacy Policies</div>
                  <div class="sub-menu" id="sub">Terms & Conditions</div>
                </template>
              </SubDropdownMenu>
            </div>
          </template>
        </DropdownMenu>
        <RouterLink to="/about"><div class="get-started">Get Started</div></RouterLink>
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
          <div class="footer-content"><RouterLink to="/">About Us</RouterLink></div>
          <div class="footer-content"><RouterLink to="/">Contact Us</RouterLink></div>
          <div class="footer-content"><RouterLink to="/">Solutions</RouterLink></div>
        </div>
      </div>
      <div>
        <div class="resources">
            <div class="title">Resources:</div>
            <div class="footer-content"><RouterLink to="/">Blog</RouterLink></div>
            <div class="footer-content"><RouterLink to="/">Events</RouterLink></div>
            <div class="footer-content"><RouterLink to="/">References</RouterLink></div>
        </div>
      </div>
      <div>
        <div class="legal">
            <div class="title">Legal:</div>
            <div class="footer-content"><RouterLink to="/">Privacy Policies</RouterLink></div>
            <div class="footer-content"><RouterLink to="/">Terms & Conditions</RouterLink></div>
        </div>
      </div>

    </div>
  </footer>
</template>

<script>

// Need to Mark the First Nav Selection (using jQuery but couldn't detect the dropdown-menu because its hidden)

// const activateParent = (current_menu_id) => {
//   let current_menu = document.getElementById(current_menu_id);
//   current_menu.classList.add('menu-active');
// }
// const deactivateParent = (current_menu_id) => {
//   let current_menu = document.getElementById(current_menu_id);
//   current_menu.classList.add('menu-active');
// }
  import $ from 'jquery'
  $('#sub').mouseenter(() => {
    $('.address').css("background-color", "red");
  })

</script>

<style src="./assets/css/app.css" scoped>
</style>
