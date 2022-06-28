<script>
export default {
  name: 'About',
}
</script>

<template>
  <h2>About</h2>
  <pre>counter: {{ $store.state.counter }}</pre>
  <button @click="$store.dispatch('increment')">+</button>
</template>

<style scoped>
h2 {
  color: blue;
}
</style>
