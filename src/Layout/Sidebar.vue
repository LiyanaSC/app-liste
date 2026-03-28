<template>
    <nav class="list-sidebar">
        <h2 class="sidebar-title">Mes Listes</h2>

        <!-- BOUTON POUR AJOUTER UNE NOUVELLE LISTE -->
        <button v-if="!showForm" class="add-list-button" @click="showForm = true"> 
          <img class="icon-plus" :src="isDark ? plusWhite : plusBlack" alt="ajouter une liste">
          <p class="button-text">Nouvelle Liste</p>
        </button>
          <!-- FORMULAIRE DE CRÉATION DE LISTE -->
        <ChooseListTitle v-if="showForm" @create="handleCreate" />


    </nav>
</template>
<script setup>
import plusWhite from '../assets/plus-white.svg'
import plusBlack from '../assets/plus-black.svg'
import { ref, computed, onMounted, onUnmounted } from 'vue' // Import des fonctions Vue nécessaires
import ChooseListTitle from '../components/buttons/chooseListTitle.vue' // Import du composant de choix de titre de liste
// ÉTAT POUR AFFICHER LE FORMULAIRE DE CRÉATION DE LISTE
const showForm = ref(false) // Variable réactive pour contrôler l'affichage du formulaire 


// -------------------------GESTION DU THÈME (SOMBRE/CLAIR)-------------------------
const isDark = ref(false) // Variable réactive pour stocker le thème (false = clair, true = sombre)

onMounted(() => { // Exécuté quand le composant est monté

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)') // Observe le thème système

  isDark.value = mediaQuery.matches // Initialise isDark selon le thème actuel

  const handler = (e) => { // Fonction appelée quand le thème change
    isDark.value = e.matches // Met à jour la valeur en fonction du nouveau thème
  }

  mediaQuery.addEventListener('change', handler) // Écoute les changements du thème système

  onUnmounted(() => { // Exécuté quand le composant est détruit
    mediaQuery.removeEventListener('change', handler) // Supprime l'écouteur pour éviter les fuites mémoire
  })

})


</script>
<style scoped>
.list-sidebar {
  min-height: 100vh;
  width: 40%;
  background-color: var(--deep-violet);
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  transition: width 0.3s ease;
  overflow: hidden;
  z-index: 1;
  align-items: center;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--lither-lavender);
  padding: 1rem;
  border-bottom: 1px solid var(--lavender);
}
.add-list-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  margin: 1rem;
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: var(--linear-gradient-button);
  padding: 30px 30px 30px 30px;
  border-radius: 10px;
  width: 80%;
  align-self: center;
}
.icon-plus {
  width: 30px;
  height: 30px;
}
.button-text {
  margin-left: 10px;
  font-size: 1.5rem;
  color:var(--color-text-BW)
}

</style>