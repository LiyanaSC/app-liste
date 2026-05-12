<template>
    <form @submit.prevent="submitUpdate()" class="result-container"> <!-- Conteneur principal de l'élément de la liste, avec un événement de clic pour empêcher la propagation -->
        <input type="checkbox" :id="itemId" :checked="isDone" @change="listStore.toggleItemCompletion(itemId)"> 
        <label v-if="!isEditing" :for="itemId">{{ entry }}</label>
        <input v-else class="input-update" type="text" v-model="updatedEntry" @keyup.enter="submitUpdate()"  @click.stop> <!-- Champ de saisie pour éditer l'entrée, avec un événement de clic pour empêcher la propagation -->
        <div v-if="!isEditing" >
        <img class="icon-edit" :src="pencil" alt="modifier" @click="updatemode(), updatedEntry = entry"> <!-- Icone de modification, qui active le mode édition -->
        <img class="icon-edit" :src="trash" alt="supprimer" @click="listStore.deleteItem(itemId)"> <!-- Icone de suppression, qui appelle la fonction de suppression du store avec l'ID de l'élément -->  
        </div>
        <!-- mode édition -->
        <div v-else >
            <img class="icon-edit" :src="check" alt="valider" @click="listStore.updateItemEntry(itemId, updatedEntry); closeEditMode()"> <!-- Icone de validation, qui valide les modifications -->
            <img class="icon-edit" :src="cross" alt="annuler" @click="endUpdatemode"> <!-- Icone d'annulation, qui désactive le mode édition -->
        </div>
    </form>
                     
</template>

<script setup>
import { ref } from 'vue'
import { useListStore } from '../../store/budgetStore'
import trash from '../../assets/trash-dark.svg'
import pencil from '../../assets/pencil-dark.svg'
import check from '../../assets/check-green.svg'
import cross from '../../assets/xmark-red.svg' 

const listStore = useListStore()

const props = defineProps({
  entry: {
    type: String,
    required: true,
      },
  itemId: {
    type: [String, Number],
    required: true
      },
  isDone: {
    type: Boolean,
    default: false
  }
})


//UPDATE ITEM
const updatedEntry = ref('') // Variable réactive pour stocker le nouveau titre de la liste lors de l'édition
const isEditing = ref(false) // Variable réactive pour contrôler le mode édition
const updatemode = () => {
  event.stopPropagation() // Empêche la propagation de l'événement de clic pour éviter de sélectionner la liste avant de la supprimer
  isEditing.value = true // Bascule le mode édition
  updatedEntry.value = entry.value // Initialise le champ de saisie avec le titre actuel de la liste pour permettre l'édition
}

const endUpdatemode = () => {
  event.stopPropagation() // Empêche la propagation de l'événement de clic pour éviter de sélectionner la liste avant de la supprimer
  isEditing.value = false // Désactive le mode édition
  // Réinitialise le titre à l'original en cas d'annulation
  updatedEntry.value = entry.value
}
const closeEditMode = () => {
  event.stopPropagation() // Empêche la propagation de l'événement de clic pour éviter de sélectionner la liste avant de la supprimer
  isEditing.value = false // Désactive le mode édition
updatedEntry.value = entry.value

}
const submitUpdate = () => {
  listStore.updateItemEntry(props.itemId, updatedEntry.value) // Appelle la fonction de mise à jour du titre de la liste dans le store avec l'ID de la liste et le nouveau titre
  isEditing.value = false // Désactive le mode édition après la validation
}

</script>

<style scoped> 
.result-container {
  display: flex;
  align-items: center;
  width: 100%;

} 
.result-container input[type="checkbox"] {
  appearance: none; 
  -webkit-appearance: none;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  min-width: 15px;
  min-height: 15px;
  border: 2px solid var(--color-secondary);
  cursor: pointer;
  margin-right: 10px;
}
.result-container input[type="checkbox"]:checked {
  background-color: rgb(182, 182, 182);
  border: initial;
}
.result-container label {
  flex: 1;
  font-size: 1rem;
  color: black;
  text-align: left;
}
.result-container input[type="checkbox"]:checked + label {
  color: rgb(182, 182, 182);
}

.input-update{
  padding: 5px;
  flex: 1;
  font-size: 1rem;
  border:none;
  outline: none;
  text-align: left;
}
.icon-edit {
  width: 20px;
  height: 20px;
  margin-left: 10px;
}
</style>