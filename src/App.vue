<template>

  <h1 class="welcomeText">My EPIC todo app!!1!!1!1!</h1>

  <div class="xui">
    <button id="button" class="button1" v-on:click="onClick" >Add todo</button>
  </div>

</template>

<style scoped></style>

<script setup lang="ts">
import { onClick } from './todo';
</script>