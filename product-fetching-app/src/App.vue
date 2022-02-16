<template>
  <div id="app">
    
    <button class="myBtn" @click="fetchProducts">Load products</button>
    
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import store from 'productStore/store';

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  methods: {
    fetchProducts: () => store.dispatch('loadProducts'),
  },
  computed: {
    //getProducts: () => store.getters.getAllProducts
  },
  
};
</script>

<style>
.myBtn {
  cursor: pointer;
  width:200px;
  height:50px;
  font-size:25px;
  font-weight: bold;
  background-color: rgb(206, 124, 124);
  border: 1px solid greenyellow;
  border-radius: 35px;
}
</style>
