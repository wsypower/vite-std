<!--
 * @Description:
 * @Author: wsy
 * @Date: 2023-05-22 21:18:16
 * @LastEditTime: 2023-05-25 22:01:07
 * @LastEditors: wsy
-->
<script setup>
import svg from '/vite.svg'

console.log(svg.toString())
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img :src="svg" class="logo" alt="Vite logo">
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo">
    </a>
  </div>
  <!-- <HelloWorld msg="Vite + Vue111" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
