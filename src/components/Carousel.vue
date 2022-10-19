<template>
    <div class="eclipse"></div>
    <div class="vector-1"></div>
    <div class="about-us">
      <div class="title">Forge A Path to Mastery with KiteSense</div>
        <div class="carousel"> 
          <div class="carousel-bg"></div>
            <div class="carousel-title" id="carousel-title">Doing the Math with Personalised, Empathetic Learning for Australian Students</div>
            <div class="carousel-container">
              <div class="content" id="carousel-content">KiteSense provide a cloud-based learning platform that would give teachers deep, scalable insight into students’ progress and motivations.</div>
              <div class="logo"><img src="../assets/svg/about_us_logo_1.svg" alt="" id="carousel-img"></div>
            </div>
      </div>
        <div class="button-style-primary"><RouterLink to="/">Read More</RouterLink></div>
    </div> 
  </template>
  
  <style src="../assets/css/MainPage-2.css">
  /* @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  } */
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
            animation-duration: 0.5s;
        }


    </style>
  
  <script setup>
  import { onMounted } from "vue"
  import logo_1 from "../assets/svg/about_us_logo_1.svg"
  import logo_2 from "../assets/svg/about_us_logo_2.svg"
  import logo_3 from "../assets/svg/about_us_logo_3.svg"
  
  const carousel_title = [
      'Doing the Math with Personalised, Empathetic Learning for Australian Students','Computing IT Skills Development for Young Adults','Supporting and Empowering Learners in Achieving Better Outcomes.','Enhanced SAP’s Capacity to Publish Digital Books'
    ];
  const carousel_content = [
    'KiteSense provide a cloud-based learning platform that would give teachers deep, scalable insight into students’ progress and motivations.','Reduce lecturer workload with “smart learning tutors” to help more than 600 students (aged 17-18 ages) gain skills in IT workforce which will enhance their employability.','Digitise publishing process by ingesting questions, and tagging down to topics, subtopics and difficulty levels.','Digitise publishing process by ingesting questions, and tagging down to topics, subtopics and difficulty levels.'
  ];
  const carousel_img = [
    logo_1, logo_2, logo_2, logo_3
  ];
  const max_index = carousel_content.length;
  onMounted(() => {
    console.log("Not ready");
    
    
    console.log('Ready')
    
    // Selector
    let title = document.getElementById('carousel-title'); 
    let content = document.getElementById('carousel-content');
    let img = document.getElementById('carousel-img');
    
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
      content.innerHTML = carousel_content[current_index];
      content.classList.add('fade-in');
      resetAnimation(content);
      img.setAttribute("src", carousel_img[current_index]);
      img.classList.add('fade-in');
      resetAnimation(img);
    }
    console.log('below_next')
    setInterval(() => {
      current_index++;
      if (current_index == max_index){
        current_index = 0
      }
      next(current_index);
    }
    , 1000)
    console.log('below while');
  
  
  })
  
    
  // window.addEventListener('unload', () => {});
  
  
  </script>
  
  
  