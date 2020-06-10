import Vue from "vue";
import VueRouter from "vue-router";
import App from "../vue/App.vue";

import "../sass/main.scss";

import SiteIndex from "../vue/sites/Index.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{ path: "/", component: SiteIndex }],
    mode: "history"
});

new Vue({
    render: h => h(App),
    router
}).$mount("#app");
