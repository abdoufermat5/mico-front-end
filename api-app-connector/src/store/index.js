import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    all: []
  },
  getters: {
    getAllProducts(state) {
      return state.all
    }
  },
  actions: {
    loadProducts({
      commit
    }) {

      axios.get('https://fakestoreapi.com/products').then(products => {
        commit('SET_PRODUCTS', products.data)
      })
    }
  },
  mutations: {
    SET_PRODUCTS(state, data) {
      state.all = data
    },
  }
});