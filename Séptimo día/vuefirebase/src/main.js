import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import VueTextareaAutosize from 'vue-textarea-autosize';
Vue.use(VueTextareaAutosize);

import firebase from 'firebase/app';
import 'firebase/firestore';

  const firebaseConfig = {
    apiKey: "AIzaSyDCk_VWV2mqlUZSVKTB9FjKDFhfTcvMlTo",
    authDomain: "vue-bbdd.firebaseapp.com",
    databaseURL: "https://vue-bbdd.firebaseio.com",
    projectId: "vue-bbdd",
    storageBucket: "vue-bbdd.appspot.com",
    messagingSenderId: "594785091511",
    appId: "1:594785091511:web:32f8846138ac545f3a7232"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const db= firebase.firestore(); //toda la conexión firebase

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
