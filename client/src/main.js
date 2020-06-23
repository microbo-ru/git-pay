import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import * as firebase from "firebase";
import '@babel/polyfill'


Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: process.env.VUE_APP_firebase_apiKey,
  authDomain: process.env.VUE_APP_firebase_authDomain,
  databaseURL: process.env.VUE_APP_firebase_databaseURL,
  projectId: process.env.VUE_APP_firebase_projectId,
  storageBucket: process.env.VUE_APP_firebase_storageBucket,
  messagingSenderId: process.env.VUE_APP_firebase_messagingSenderId,
  appId: process.env.VUE_APP_firebase_appId,
  measurementId: process.env.VUE_APP_firebase_measurementId
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
