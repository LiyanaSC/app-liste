

<template>
  <div class="app">
    <h1>Bienvenue dans l'application Liste</h1>
    <p>Cette application sert de conteneur pour d'autres applications.</p>
    <p>Utilisez le menu de navigation pour accéder aux différentes sections.</p>
    <router-link to="/applications">Voir les applications</router-link>
    <router-link to="/about">À propos</router-link>
    <ListeView />
  </div>
</template>
<script setup>
import ListeView from './views/ListeView.vue'
</script>


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
