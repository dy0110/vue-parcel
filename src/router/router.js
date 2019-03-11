import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../App';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/top',
            component: App
        },
        {
            path: '/',
            redirect: '/top'
        },
        {
            path: '*',
            redirect: '/top'
        }
    ]
})

export default {
    router
}