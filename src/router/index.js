import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path:'/',
        name: 'HomeView',
        component: () => import('../views/HomeView.vue'),

    },
    {
        path:'/stats',
        name: 'Stats',
        component: () => import('../views/Stats.vue'),

    
    },{
        path:'/findGame',
        name: 'FindGame',
        component: () => import('../views/FindGame.vue'),

    },
    {
        path:'/login',
        name: 'Login',
        component: () => import('../views/Login.vue'),

    }



]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.VITE_BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    if (!to.matched.length) {
        next({ name: 'HomeView' }); // Przenieś na stronę główną
    } else {
        next(); // Kontynuuj nawigację do docelowej trasy
    }
});

export default router;