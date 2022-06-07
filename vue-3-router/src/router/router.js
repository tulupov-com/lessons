import Main from "@/pages/Main";
import PostPage from "@/pages/PostPage";
import About from "@/pages/About";
import PostId from "@/pages/PostId";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostId
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;