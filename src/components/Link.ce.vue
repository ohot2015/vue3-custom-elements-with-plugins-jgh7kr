<script>
export default {
  props: ['href'],
}
</script>

<template>
  <a :href="href"><slot /></a>
</template>

<style scoped>
a {
  font-weight: bold;
  color: blue;
}
</style>
