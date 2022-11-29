import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Main sections
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [{ path: "", component: HomeView, alias: ["/company"] }],
    },
    {
      path: "/landing-page",
      name: "landing-page",
      component: () => import("@/views/LandingPageView.vue"),
      meta: { transition: "slide-right" },
    },
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    // Company Sections
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/company/AboutView.vue"),
      meta: { transition: "slide-right" },
    },
    {
      path: "/contact-us",
      name: "contact-us",
      component: () => import("@/views/company/ContactUsView.vue"),
      meta: { transition: "slide-right" },
    },

    // Resources Section
    {
      path: "/terms-policies",
      name: "terms",
      component: () => import("@/views/resources/terms/TermsView.vue"),
      meta: { transition: "slide-right" },
    },
    {
      path: "/terms-policies-master",
      name: "terms-master",
      component: () => import("@/views/resources/terms/TermsMasterView.vue"),
      meta: { transition: "slide-right" },
    },
    {
      path: "/events",
      name: "events",
      component: () => import("@/views/resources/EventView.vue"),
      meta: { transition: "slide-right" },
    },
    {
      path: "/references",
      name: "references",
      component: () => import("@/views/resources/ReferencesView.vue"),
      meta: { transition: "slide-right" },
    },
    {
      path: "/privacy-policy",
      name: "privacy-policy",
      component: () => import("@/views/resources/PrivacyPolicyView.vue"),
      meta: { transition: "slide-right" },
    },

    // Solutions sections
    {
      path: "/solution/education",
      name: "education",
      component: () => import("@/views/solutions/EducationView.vue"),
      meta: { transition: "slide-right" },
      children: [
        { path: "", component: HomeView, alias: ["/learning-journey"] },
      ],
    },
    {
      path: "/solution/improve-learning-outcomes",
      name: "improve-learning-outcomes",
      component: () => import("@/views/solutions/ILOView.vue"),
      meta: { transition: "slide-right" },
    },

    // Not found
    {
      path: "/:pathMatch(.*)*",
      name: "404-not-found",
      component: () => import("@/views/404Page.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (to.hash) {
        return {
          el: to.hash,
          behavior: "smooth",
        };
      } else {
        return {
          top: 0,
          behavior: "smooth",
        };
      }
    }
  },
});

router.beforeEach((to, from, next) => {
  let current_user_state = sessionStorage.getItem("user_filled_form_state");
  if (to.meta.requiresAuth) {
    if (current_user_state == "true") {
      next();
    } else {
      next({
        name: "landing-page",
      });
    }
  } else {
    next();
  }
});

export default router;
