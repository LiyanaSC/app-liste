<template>
    <div class="list-results">
        <h3>{{ listStore.selectedList?.title || 'Aucune liste sélectionnée' }}</h3>
        <form ></form>

    </div>
</template>

<script setup>
import { computed } from 'vue' // Import de la fonction ref de Vue pour créer des variables réactives
import { useListStore } from '../store/listStore' // Import du store Pinia pour gérer les listes
const listStore = useListStore()



</script>

<style scoped>
.list-results {
  padding-top: 1rem;

  background-color: var(--lither-lavender);
  width: 70%;
  min-height: 100%;
  
}
@media screen and (max-width: 768px) {
.list-results{
  width: 100%;

}
  
}

</style>