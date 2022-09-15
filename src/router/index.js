import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PageNotFound from "../views/PageNotFound.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/recent",
            name: "recent",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../views/RecentView.vue"),
        },
        {
            path: "/*",
            name: "404",
            component: PageNotFound,
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        //this is to go to #About & #Contact
        if (to.hash) {
            return {
                el: to.hash,
                behavior: "smooth",
            };
        }
        return { top: 0 };
    },
});

export default router;
