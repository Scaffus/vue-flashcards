import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import firebase from 'firebase/compat/app'

const firebaseConfig = {
    apiKey: "AIzaSyAOI_mm3Rv05ats9Qh-OBwdfF8SAWat414",
    authDomain: "vue-flash-cards.firebaseapp.com",
    projectId: "vue-flash-cards",
    storageBucket: "vue-flash-cards.appspot.com",
    messagingSenderId: "566112332944",
    appId: "1:566112332944:web:1c6d343211279dca6b7c15",
    measurementId: "G-WLS9CV81ST"
};

firebase.initializeApp(firebaseConfig)

createApp(App)
    .use(BootstrapVue3)
    .mount('#app')
