
import Vue from 'vue';

import Main from './login/index';

let Constructor = Vue.extend(Main);


export default function (config) {
  let instance = new Constructor({
    data: {
      show: true
    }
  });


  instance.loginSuccess = function (user) {
    config.onSuccess(user)
  }

  instance.$mount();
  
  config.el.appendChild(instance.$el)

}