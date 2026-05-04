<template>
  <button class="list-title-button" :style="{ background: colorType }" @click="SelectList"> <!-- Émet un événement de sélection avec le titre de la liste -->
    <div class="list-title-content">
        <img class="icon-list" :src="imageSrc" alt="liste">
        <p class="button-text" v-if="!isEditing"  >{{ newTitle }}</p>
        <input class="input-edit" type="text" v-model="newTitle" v-else @keyup.enter="listStore.editListTitle(listId, newTitle); closeEditMode()" @click="stopPropagation()"/> <!-- Champ de saisie pour l'édition du titre, caché par défaut -->
    </div>


    <!--Icon de suppression et de modification-->
    <div v-if="!isEditing" class="action-icons">
      <img class="icon-edit" :src="pencil" alt="modifier" @click="updatemode"> <!-- Icone de modification, qui active le mode édition -->
      <img class="icon-edit" :src="trash" alt="supprimer" @click="listStore.deleteList(listId)"> <!-- Icone de suppression, qui appelle la fonction de suppression du store avec l'ID de la liste -->  
    </div>
    <!-- mode édition -->
    <div v-else class="action-icons">
        <img class="icon-edit" :src="check" alt="valider" @click="listStore.editListTitle(listId, newTitle); closeEditMode()"> <!-- Icone de validation, qui valide les modifications -->
        <img class="icon-edit" :src="cross" alt="annuler" @click="endUpdatemode"> <!-- Icone d'annulation, qui désactive le mode édition -->
    </div>
  </button>
</template>

<script setup>
import { defineProps, computed, ref } from 'vue'
import typeList from '../../data/typeList';
import { useListStore } from '../../store/listStore'; 

const listStore = useListStore();

//--------------------------Base du template-------------------------
const pencil = new URL('../../assets/pencil-dark.svg', import.meta.url).href
const trash = new URL('../../assets/trash-dark.svg', import.meta.url).href
const check = new URL('../../assets/check-green.svg', import.meta.url).href
const cross = new URL('../../assets/xmark-red.svg', import.meta.url).href

const props = defineProps({
  title: {
    type: String,
    required: true,
      },
  listId: {
    type: [String, Number],
    required: true
      },
  isComplete: {
    type: Boolean,
    default: false
  },
  type: {
    type: String, // 
    required: true,
    validator: (value) => {
      return typeList.some(item => item.type === value) // Vérifie que le type est valide en comparant avec les types définis dans typeList
    }
  }
})
 const imageSrc = computed(() => {
  return typeList.find(item => item.type === props.type)?.icon
})

const colorType = computed(() => {
  return typeList.find(item => item.type === props.type)?.color
})

//---------------------------GESTION DE L'ÉDITION ET DE LA SUPPRESSION DE LISTE-------------------------

const title = computed(() => props.title) // Computed pour le titre de la liste
const newTitle = ref(props.title) // Variable réactive pour stocker le nouveau titre lors de l'édition
const isEditing = ref(false) // Variable réactive pour contrôler le mode édition
const stopPropagation = () => {
  event.stopPropagation() // Empêche la propagation de l'événement de clic pour éviter de sélectionner la liste avant de la supprimer
}
// Emit pour les actions d'édition et de suppression

const updatemode = () => {
  event.stopPropagation() // Empêche la propagation de l'événement de clic pour éviter de sélectionner la liste avant de la supprimer
  isEditing.value = true // Bascule le mode édition
}

const endUpdatemode = () => {
  event.stopPropagation() // Empêche la propagation de l'événement de clic pour éviter de sélectionner la liste avant de la supprimer
  isEditing.value = false // Désactive le mode édition
  newTitle.value = props.title // Réinitialise le titre à l'original en cas d'annulation
}
const closeEditMode = () => {
  event.stopPropagation() // Empêche la propagation de l'événement de clic pour éviter de sélectionner la liste avant de la supprimer
  isEditing.value = false // Désactive le mode édition
}
function SelectList() {
  listStore.selectList(props.idtitle) // Appelle la méthode selectList du store avec l'ID de la liste sélectionnées
}

</script>
<style scoped>
.list-title-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  margin: 1rem;
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: var(--linear-gradient-button);
  padding: 30px 30px 30px 30px;
  border-radius: 10px;
  width: 80%;
  align-self: center;
}
.list-title-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.icon-list {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.button-text {
  font-size: 1.3rem;
  color: var(--dark-blue);
}
.input-edit {
  font-size: 1.3rem;
  color: var(--dark-blue);
  border: none;
  border-bottom: 2px solid var(--dark-blue);
  background-color: transparent;
  padding: 4px;
  text-align: left;
  width: 60%;

}
.icon-edit {
  width: 20px;
  height: 20px;
  margin-left: 10px;
}


</style>
