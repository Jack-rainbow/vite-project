// 参考链接： https://github.com/vuejs/vue-router-next


import {
    createRouter,
    createWebHistory
} from 'vue-router'

const routerHistory = createWebHistory()


import Home from '/@/page/home/index.vue';
// todo 目前不支持 () => import( /* webpackChunkName: 'Home' */ ) 引入
console.log(Home);

const router = createRouter({
    history: routerHistory,
    routes: [{
        path: '/',
        name: 'Home',
        component: Home,
    }],
})

export default router