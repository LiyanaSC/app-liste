

<template>
  <div class="app-liste">
    <h1>Applications distante:</h1>
    <ListeView />
  </div>
</template>
<script setup>
//import Sidebar from './Layout/Sidebar.vue';
//import ListResults from './components/ListResults.vue';
import ListeView from './mfe/ListeView.vue';

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches // Vérifie si l'utilisateur préfère le mode sombre
// Si l'utilisateur préfère le mode sombre, on applique le thème sombre, sinon on applique le thème clair
document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light')
</script>


<style scoped>
.app-liste {
  width: 100%;
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100vh;

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
