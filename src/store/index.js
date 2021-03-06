import Vue from 'vue';
import Vuex from 'vuex';
import users from './modules/users';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { users },
});


export default store;
