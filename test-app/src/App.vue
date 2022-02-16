<template>
  <div id="app">
    <div class="fetching">
      <AppFetchingButton />
    </div>
    <div class="listing">
      <AppListing />
    </div>
    
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import AppFetchingButton from 'productFetching/AppFetchingButton'
import AppListing from 'productListing/AppListing'
export default {
  name: "App",
  components: {
    HelloWorld,
    AppFetchingButton,
    AppListing
  },
};
</script>

<style>
.fetching {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 10%;
  width: 80%;
  height: 150px;
  background: #adada8;
  border: 1px solid #2c3e50;
  border-radius: 30px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  color: #2c3e50;
  margin-top: 30px;
  justify-content: space-between;
  flex-direction: column;
}
</style>
