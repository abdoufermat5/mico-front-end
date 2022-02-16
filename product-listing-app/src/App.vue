<template>
  <div id="app">
    <h1>MY STORE:</h1>
    <div v-if="getProducts.length == 0">
      <div class="lds-hourglass"></div>
    </div>
    <div v-else>
      <div v-for="product in getProducts" :key="product.id">
        <product-list :product="product"/>
      </div>
    </div>
  </div>
</template>

<script>
import store from 'productStore/store';
import ProductList from './components/ProductList.vue';
console.log(store)
export default {
  components: { ProductList },
  name: "App",
  data() {
    return {
      myStore: store
    }
  },
  methods: {
    
  },
  computed: {
    getProducts: () => store.getters.getAllProducts
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.lds-hourglass {
  display: inline-block;
  position: relative;
  background-color: #2c3e50;
  width: 80px;
  height: 80px;
}
.lds-hourglass:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 8px;
  box-sizing: border-box;
  border: 32px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-hourglass 1.2s infinite;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}

</style>
