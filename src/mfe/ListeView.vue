<template>
  <div class="liste-view">
    <Sidebar />
    <ListResults />
    <div class="background-deletion" v-if="listStore.showDeleteConfirmationList || listStore.showDeleteConfirmationItem" @click="goback($event)">
      <div class="pop-up-delete" v-if="listStore.showDeleteConfirmationList" @click.stop>
        <p>Supprimer <br> <span class="to-delete-name">{{ listStore.toDeleteName }}</span> ?</p>
        <div class="buttons">
          <button class="danger-button" @click=" listStore.deleteList(listStore.toDeleteId)">Oui</button>
          <button class="cancel" @click="listStore.showDeleteConfirmationList = false">Non</button>
        </div>
      </div>

      <div class="pop-up-delete" v-if="listStore.showDeleteConfirmationItem" @click.stop>
        <p>Supprimer <br> <span class="to-delete-name">{{ listStore.toDeleteName }}</span> ?</p>
        <div class="buttons">
          <button class="danger-button" @click=" listStore.deleteItem(listStore.toDeleteId)">Oui</button>
          <button class="cancel" @click="listStore.showDeleteConfirmationItem = false">Non</button>
        </div>
      </div>
    </div>
 

  </div>
</template>

<script setup>
import Sidebar from '../Layout/Sidebar.vue';
import ListResults from '../components/ListResults.vue';
import { useListStore } from '../store/listStore';

const listStore = useListStore();

const goback = (event) => {
  event.stopPropagation()
  listStore.showDeleteConfirmationList = false
  listStore.showDeleteConfirmationItem = false
}
</script>

<style scoped>
.liste-view {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-self: center;
  align-self: center;
  height: 100%;
  overflow: hidden;
}
.background-deletion {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Couleur de fond semi-transparente pour le pop-up de suppression */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999; /* Assure que le pop-up est au-dessus du reste du contenu */
}
.pop-up-delete {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
.to-delete-name{
  font-weight: bold;
}
.buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  gap: 20px;
}
.cancel {
  background-color: var(--color-validation);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
}
@media screen and (max-width: 768px) {
  .liste-view {
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 0;
    margin-top:0;
    margin-bottom: 0;
    overflow: scroll;
    background-color: var(--deep-violet);

       
  }
  
}
</style>