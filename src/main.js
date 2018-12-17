/*
入口JS 
*/
import Vue from 'vue'
import App from './App.vue'
import FastClick from 'fastclick'
import router from './router'

new Vue({
    el: '#app',
    render: h => h(App),
    router
})

FastClick.attach(document.body);