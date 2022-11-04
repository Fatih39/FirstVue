import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
      meta: { transition: 'slide-right' },
    },
    {
      path: "/contact-us",
      name: "contact-us",
      component: () => import("../views/ContactUsView.vue"),
      meta: { transition: 'slide-right' },
    },
    {
      path: "/terms-policies",
      name: "terms-policies",
      component: () => import("../views/TermsPoliciesView.vue"),
      meta: { transition: 'slide-right' },
    },
    {
      path: "/terms-policies-master",
      name: "terms-policies-master",
      component: () => import("../views/TermsPoliciesMasterView.vue"),
      meta: { transition: 'slide-right' },
    },
    {
      path: "/landing-page",
      name: "landing-page",
      component: () => import("../views/LandingPageView.vue"),
      meta: { transition: 'slide-right' },
    },
    {
      path: "/events",
      name: "events",
      component: () => import("../views/EventView.vue"),
      meta: { transition: 'slide-right' },
    },
    {
      path: "/references",
      name: "references",
      component: () => import("../views/ReferencesView.vue"),
      meta: { transition: 'slide-right' },
    },
    {
      path: "/privacy-policy",
      name: "privacy-policy",
      component: () => import("../views/PrivacyPolicyView.vue"),
      meta: { transition: 'slide-right' },
    },
    {
      path: "/solution-education",
      name: "solution-education",
      component: () => import("../views/EducationView.vue"),
      meta: { transition: 'slide-right' },
    },
    {
      path: "/solution-improve-learning-outcomes",
      name: "solution-improve-learning-outcomes",
      component: () => import("../views/ImproveLearningOutcomesView.vue"),
      meta: { transition: 'slide-right' },
    },
    // Need to create Not Found page
    {
      path: "/:pathMatch(.*)*",
      name: "404-not-found",
      component: () => import("../views/404page.vue"),
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (to.hash) {
        return {
          el : to.hash,
          behavior : "smooth",
        }
      } else {
        return {
          top: 0,
          behavior : "smooth",
        }
      }
    }
  }
});

router.beforeEach((to, from, next) => {
  let current_user_state = sessionStorage.getItem("user_filled_form_state");
  // console.log(current_user_state);
  // console.log(to.meta.requiresAuth);
  if (to.meta.requiresAuth) {
    if (current_user_state == "true") {
      next();
    } else {
      next({
        name : "landing-page"
      });
    }
  } else {  
    next();
  }
})


export default router;
