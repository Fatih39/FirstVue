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
    },
    {
      path: "/contact-us",
      name: "contact-us",
      component: () => import("../views/ContactUsView.vue"),
    },
    {
      path: "/terms-policies",
      name: "terms-policies",
      component: () => import("../views/TermsPoliciesView.vue"),
    },
    {
      path: "/terms-policies-master",
      name: "terms-policies-master",
      component: () => import("../views/TermsPoliciesMasterView.vue"),
    },
    {
      path: "/landing-page",
      name: "landing-page",
      component: () => import("../views/LandingPageView.vue"),
    },
    {
      path: "/events",
      name: "events",
      component: () => import("../views/EventView.vue"),
    },
    {
      path: "/references",
      name: "references",
      component: () => import("../views/ReferencesView.vue"),
      meta : { requiresAuth : true }
    },
    // Need to create Not Found page
    // {
    //   path: "/404",
    //   name: "landing-page",
    //   component: () => import("../views/LandingPageView.vue"),
    // },
  ],
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
