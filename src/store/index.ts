import Vue from "vue";
import Vuex from "vuex";
import UploaderModule from '@/store/modules/UploaderModule';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    uploader: UploaderModule
  }
});
