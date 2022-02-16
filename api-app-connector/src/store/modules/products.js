import {ApiService} from "../../api/api.service";

const state = () => ({
    all: [{id:1, name:"banana"}]
})

// getters
const getters = {}

// actions
const actions = {
    loadProducts({
        commit
    }) {
        ApiService.get('products').then(products => {
            commit('SET_PRODUCTS', products.data)
        })
    }
}

// mutations
const mutations = {
    SET_PRODUCTS(state, products) {
        state.all = products
    },

    decrementProductInventory(state, {
        id
    }) {
        const product = state.all.find(product => product.id === id)
        product.inventory--
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}