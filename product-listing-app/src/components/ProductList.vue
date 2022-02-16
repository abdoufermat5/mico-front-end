<template>
  <div class="hello">
    <h3>{{product.title}}</h3>
    <p>prices: {{product.price}}</p>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  props: {
    product: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  background-color: rgb(206, 124, 124);
  border: 1px solid greenyellow;
  border-radius: 35px;
}
p {
  font-size: 12px;
  font-style: italic;
}
</style>
