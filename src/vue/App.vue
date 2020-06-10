<template>
    <div id="app">
        <router-view class=""></router-view>
    </div>
</template>

<script>
import Vue from "vue";

import { Api } from "../js/imports/finanegerApi.js";

export const store = Vue.observable({});

export default {
    name: "app",
    components: {},
    data: function() {
        return {};
    },
    computed: {},
    methods: {}
};
</script>

<style></style>
