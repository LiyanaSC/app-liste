<template>
    <nav class="list-sidebar">
        <h2 >  Mes Listes  </h2>
        <StarBar/>

        <!-- BOUTON POUR AJOUTER UNE NOUVELLE LISTE -->
        <button v-if="listStore.creatingList === false" class="add-list-button super-action-button" @click="listStore.creatingList = true"> 
          <img class="icon-plus" :src="isDark ? plusWhite : plusBlack" alt="ajouter une liste">
          <p class="button-text">Nouvelle Liste</p>
        </button>
          
        <!-- FORMULAIRE DE CRÉATION DE LISTE -->
        <ChooseListTitle v-else />

        <!-- LISTE DES TITRES DE LISTES EXISTANTES -->
        <ListTitle v-for="(item, index) in listStore.lists" 
        :key="item._id" 
        :listId="item._id"
        :title="item.title" 
        :type="item.type" 
        :isComplete="item.isComplete"
        @click="listStore.selectList(item._id)"
        />


    </nav>
</template>
<script setup>
import plusWhite from '../assets/plus-white.svg'
import plusBlack from '../assets/plus-black.svg'
import { ref, computed, onMounted, onUnmounted } from 'vue' // Import des fonctions Vue nécessaires
import ChooseListTitle from '../components/buttons/chooseListTitle.vue' // Import du composant de choix de titre de liste
import ListTitle from '../components/buttons/listTitle.vue' // Import du composant de titre de liste (non utilisé dans ce code, mais peut être utilisé pour afficher les titres des listes existantes)
import StarBar from '../components/style/starBar.vue'
import { useListStore } from '../store/listStore.js' // Import du store Pinia pour gérer les listes

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

//--------------------------GESTION DE LA CRÉATION DE LISTE-------------------------
const listStore = useListStore() // Utilisation du store pour accéder aux données et fonctions

const showForm = ref(false) // Variable réactive pour contrôler l'affichage du formulaire 
const existingLists = listStore.lists // Variable réactive pour stocker les titres des listes existantes

// Récupère les listes du localStorage au démarrage
onMounted(() => {
  listStore.initLists()
const username = localStorage.getItem('userNickname') || 'ça ne fonctionne pas en dev' // Récupère le nom d'utilisateur depuis le localStorage, ou utilise une valeur par défaut si elle n'existe pas
console.log('Nom d\'utilisateur récupéré :', username) // Affiche le nom d'utilisateur dans la console pour vérification
})

</script>
<style scoped>
.list-sidebar {
 height: 100%;
  min-width: 360px;
  width: 40%;
  background: linear-gradient(rgb(196, 53, 221), #2E1A4F 30%);
  background-color: var(--deep-violet);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: scroll;
  z-index: 1;
  align-items: center;
  overflow-y: hidden;
  overflow: auto;}

h2 {
  margin-top: 20px;
  margin-bottom: 0;
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
  color:white
}


@media screen and (max-width: 768px) {
  .list-sidebar{
    width: 100%;
    height: 100%;

  }

  
}

</style>