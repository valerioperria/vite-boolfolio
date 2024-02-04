import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import AboutUsPage from './pages/AboutUsPage.vue';

const router = createRouter({
    history:createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: AboutUsPage
        },
    ]
});

export { router };