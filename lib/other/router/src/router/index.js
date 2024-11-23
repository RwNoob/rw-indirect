import { createHistoryRouter } from 'rw-indirect-router';
import Home from '../views/home';
import About from '../views/about';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
];

const router = createHistoryRouter(routes);
router.beforeEach((to, from) => {
    console.log(to, from);
});
export default router;
