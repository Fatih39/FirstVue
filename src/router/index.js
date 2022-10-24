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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ContactUsView.vue"),
    },
    {
      path: "/terms-policies",
      name: "terms-policies",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/TermsPoliciesView.vue"),
      meta : { requiresAuth : true }
    },
    {
      path: "/terms-policies-master",
      name: "terms-policies-master",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/TermsPoliciesMasterView.vue"),
    },
    {
      path: "/landing-page",
      name: "landing-page",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/LandingPageView.vue"),
    },
    {
      path: "/events",
      name: "events",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/EventView.vue"),
    },
    // Need to create Not Found page
    // {
    //   path: "/404",
    //   name: "landing-page",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
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
