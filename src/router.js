import { createWebHistory, createRouter } from 'vue-router';

//import delle pagine che sono incluse nel nostro router
import AppHome from './pages/AppHome.vue';
import AboutPage from './pages/AboutPage.vue';
import PortfolioPage from './pages/PortfolioPage.vue';
import ProjectPage from './pages/ProjectPage.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        //specifichiamo le rotte
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/who-we-are',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: PortfolioPage
        },
        {
            path: '/project/:slug',
            name: 'project',
            component: ProjectPage
        }
    ]
});

export { router };