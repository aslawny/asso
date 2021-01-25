import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Contact from "@/views/Contact.vue";
import Admin from "@/views/Admin.vue";
import User from "@/views/User.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/admin",
        name: "Admin",
        component: Admin,
    },
    {
        path: "/user/:name", // <-- notice the colon
        name: "User",
        component: User,
        props: true,
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;