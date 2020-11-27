import Vue from 'vue';
import iView from 'iview';
import Router from 'vue-router';

import routes from './routers';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes,
});

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

export default router;
