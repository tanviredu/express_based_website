import Vue from 'vue'
import App from './App.vue'

// everything you do in here will be globally avilable


import "bootstrap"; // this will import the js of bootstrap
import "bootstrap/dist/css/bootstrap.css" // this will import the css

// importing the font-awesome and the selected icon
// and load it with the library

import {library} from "@fortawesome/fontawesome-svg-core"

import { faPlus,faMinus,faTrash,faCheck } from "@fortawesome/free-solid-svg-icons"

library.add(faPlus,faMinus,faTrash,faCheck);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
