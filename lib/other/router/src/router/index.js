import { createHistoryRouter } from 'rw-indirect-router';
import Home from '../views/home';
import About from '../views/about';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
];

const router = createHistoryRouter(routes);
// router.beforeEach((to, from) => {
//     console.log('beforeEach', to, from);
// });
// router.beforeResolve((to, from) => {
//     console.log('beforeResolve', to, from);
// });
// router.afterEach((to, from) => {
//     console.log('afterEach', to, from);
// });
export default router;
