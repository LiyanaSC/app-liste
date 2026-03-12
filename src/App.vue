

<template>
  <div class="app-liste">
    <h2>Bienvenue dans l'application Liste</h2>
    <ListeView />
  </div>
</template>
<script setup>
import ListeView from './views/ListeView.vue'
</script>


<style scoped>
.app-liste {
  width: 100%;
}
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
