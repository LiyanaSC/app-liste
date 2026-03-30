<template>
    <nav class="list-sidebar">
        <h2 class="sidebar-title">Mes Listes</h2>

        <!-- BOUTON POUR AJOUTER UNE NOUVELLE LISTE -->
        <button v-if="!showForm" class="add-list-button" @click="showForm = true"> 
          <img class="icon-plus" :src="isDark ? plusWhite : plusBlack" alt="ajouter une liste">
          <p class="button-text">Nouvelle Liste</p>
        </button>
          
        <!-- FORMULAIRE DE CRÉATION DE LISTE -->
        <ChooseListTitle v-if="showForm" @create="handleCreate"  @cancel="handleCancel"/>

        <!-- LISTE DES TITRES DE LISTES EXISTANTES -->
        <ListTitle v-for="(item, index) in listTitle" :key="index" :title="item.title" :type="item.type" :isComplete="item.isComplete"
         @edit="handleEdit" @delete="handleDelete" />


    </nav>
</template>
<script setup>
import plusWhite from '../assets/plus-white.svg'
import plusBlack from '../assets/plus-black.svg'
import { ref, computed, onMounted, onUnmounted } from 'vue' // Import des fonctions Vue nécessaires
import ChooseListTitle from '../components/buttons/chooseListTitle.vue' // Import du composant de choix de titre de liste
import ListTitle from '../components/buttons/listTitle.vue' // Import du composant de titre de liste (non utilisé dans ce code, mais peut être utilisé pour afficher les titres des listes existantes)

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
const showForm = ref(false) // Variable réactive pour contrôler l'affichage du formulaire 
const listTitle = ref([]) // Variable réactive pour stocker les titres des listes existantes

// Récupère les listes du localStorage au démarrage
onMounted(() => {
  const existingLists = JSON.parse(localStorage.getItem('lists')) || []
  listTitle.value = existingLists
})

//récupère l'annulation
function handleCancel() {
  showForm.value = false
}
//récupère la création de liste
function handleCreate(newList) {
  // Ici, vous pouvez ajouter la nouvelle liste à votre état global ou local
  listTitle.value.push(newList) // Ajoute la nouvelle liste à la liste des titres
  //je sauvegarde la nouvelle liste dans le localStorage
  const existingLists = JSON.parse(localStorage.getItem('lists')) || [] // Récupère les listes existantes du localStorage ou initialise un tableau vide
  existingLists.push(newList) // Ajoute la nouvelle liste au tableau
  localStorage.setItem('lists', JSON.stringify(existingLists)) // Sauvegarde le tableau mis à jour dans le localStorage
  showForm.value = false // Ferme le formulaire après la création
} 

//--------------------------GESTION DE L'ÉDITION ET DE LA SUPPRESSION DE LISTE-------------------------
function handleDelete(title) {
  // Logique pour supprimer une liste
  listTitle.value = listTitle.value.filter(item => item.title !== title)
  const existingLists = JSON.parse(localStorage.getItem('lists')) || []
  const updatedLists = existingLists.filter(item => item.title !== title)
  localStorage.setItem('lists', JSON.stringify(updatedLists))
}

function handleEdit(newTitle, oldTitle) {
  // Logique pour éditer une liste
  console.log('Éditer la liste:', newTitle, 'Ancien titre:', oldTitle)
  // Vous pouvez implémenter la logique d'édition ici, par exemple en affichant un formulaire d'édition ou en modifiant directement le titre dans la liste
  const existingLists = JSON.parse(localStorage.getItem('lists')) || []
  const updatedLists = existingLists.map(item => { // Parcourt les listes existantes
   //je supprime le titre de la liste à éditer et je le remplace par le nouveau titre
    if (item.title === oldTitle) {//je cherche la liste à éditer en comparant les titres
      return { ...item, title: newTitle }  // Si je trouve la liste à éditer, je retourne une nouvelle liste avec le titre mis à jour
    }
    return item // Sinon, on retourne la liste inchangée
  })  
  localStorage.setItem('lists', JSON.stringify(updatedLists))
} 
</script>
<style scoped>
.list-sidebar {
 height: 100%;
  min-width: 360px;
  width: 40%;
  background-color: var(--deep-violet);
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  transition: width 0.3s ease;
  overflow: hidden;
  overflow-y: scroll;
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
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.61);
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
@media screen and (max-width: 768px) {
.list-sidebar{
  width: 100%;
}
  
}
</style>