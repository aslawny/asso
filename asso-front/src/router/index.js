import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Contact from "@/views/Contact.vue";
import ContactEdit from "@/views/ContactEdit.vue";
import Admin from "@/views/Admin.vue";
import Login from "@/views/Login.vue";
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
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: ContactEdit,
    }, {
        path: "/:catchAll(.*)",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;