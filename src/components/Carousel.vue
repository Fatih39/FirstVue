<template>
  <div class="eclipse"></div>
  <div class="vector-1"></div>
  <div class="about-us">
    <div class="title">Forging Pathways Towards Mastery with KiteSense</div>
      <div class="carousel"> 
        <div class="carousel-bg"></div>
        <div class="carousel-bg-2"></div>
          <div class="carousel-title" id="carousel-title">Differentiated Learning at Scale for Students in Australia</div>
          <div class="carousel-container">
            <div class="content" id="carousel-content">KiteSense provided a cloud-based learning recommender to deliver differentiated and self-directed learning at scale, with learning pace and content personalised to every student.</div>
            <div class="logo"><img src="../assets/svg/about_us_logo_1.svg" alt="" id="carousel-img"></div>
          </div>
      </div>
      <div class="carousel-switch-wrapper">
        <button id="control-1" class="active"></button>
        <button id="control-2"></button>
        <button id="control-3"></button>
      </div>
      <div class="button-style-primary"><RouterLink to="/solution-improve-learning-outcomes">Read More</RouterLink></div>
  </div> 
</template>

<style src="../assets/css/MainPage-2.css">
</style>

<style scoped>
@keyframes fade-in {
    from {
        opacity : 0;
    } to {
        opacity: 1;
    }
}

.fade-in {
  animation-name: fade-in;
  animation-duration: 0.25s;
}

.transition-leave {
    transform: translateX(-100%);
    transition: 0.5s;
}

.carousel-switch-wrapper {
  display: flex;
  position:absolute;
  z-index: 1;
  margin-top: 50vw;
}

button {
  opacity: 50%;
  width: 2vw;
  height: 2vw;
  cursor: pointer;
  margin: 1vw;
  border-radius: 100%;
  border: none;
}

.active {
  opacity: 100%;
}

@media (max-width : 760px) {
  button {
    width: 0.7rem;
    height: 0.7rem;
    border: none;
  }
}

</style>

<script setup>
import { onMounted } from "vue"
import logo_1 from "../assets/svg/about_us_logo_1.svg"
import logo_2 from "../assets/svg/about_us_logo_2.svg"
import logo_3 from "../assets/svg/about_us_logo_3.svg"
const carousel_title = [
'Differentiated Learning at Scale for Students in Australia','Nuturing Software Skills for Young Adult','Smart Learning Program for Young Learners'
];
const carousel_content = [
'KiteSense provided a cloud-based learning recommender to deliver differentiated and self-directed learning at scale, with learning pace and content personalised to every student.','Reduce lecturers\' workload smart virtual tutors. To help young adults gain IT skills to enhance their employability in the workforce.','Intelligent publishing enhanced SAP’s capacity to publish smart digital books and provide differentiated learning pathways for learners across different learning abilities.'
];
const carousel_img = [
logo_1, logo_2, logo_3
];
const max_index = carousel_content.length;

onMounted(() => {
// Selector
let title = document.getElementById('carousel-title'); 
let content = document.getElementById('carousel-content');
let img = document.getElementById('carousel-img');
// Toggle
let control_1 = document.getElementById('control-1');
let control_2 = document.getElementById('control-2');
let control_3 = document.getElementById('control-3');
let all_switch = [control_1, control_2, control_3];

// Looper
let current_index = 0;
const resetAnimation = (element) => {
    element.style.animation = "none";
    element.offsetHeight;
    element.style.animation = null;
}

const next = (current_index) => {
  title.innerHTML = carousel_title[current_index];
  title.classList.add('fade-in');
  resetAnimation(title);
  toggleSwitch(current_index);
  content.innerHTML = carousel_content[current_index];
  content.classList.add('fade-in');
  resetAnimation(content);
  img.setAttribute("src", carousel_img[current_index]);
  img.classList.add('fade-in');
  resetAnimation(img);

  // all_toggle[current_index].classList.add('active');
}

let i;
const toggleSwitch = (index) => {
  for (i = 0; i < all_switch.length; i++){
    if (i == index) {
      all_switch[i].classList.add('active');
      restartLoop();
    } else {
      all_switch[i].classList.remove('active');
    }
  }
};
control_1.addEventListener('click', () => {
  toggleSwitch(1);
  current_index = 0;
  next(current_index);
})
control_2.addEventListener('click', () => {
  toggleSwitch(2);
  current_index = 1;
  next(current_index);
})
control_3.addEventListener('click', () => {
  toggleSwitch(3);
  current_index = 2;
  next(current_index);
})

let autoLoop = setInterval(() => {
  current_index++;
  if (current_index == max_index){
    current_index = 0
  }
  next(current_index);
}
, 4000)

const restartLoop = () => {
  clearInterval(autoLoop);
  autoLoop = setInterval(() => {
  current_index++;
  if (current_index == max_index){
    current_index = 0
  }
  next(current_index);
}
, 4000)
}

})

</script>
