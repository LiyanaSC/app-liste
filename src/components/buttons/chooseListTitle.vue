<template>
    <div  class="choose-list-title-form" :style="{background: typeList[0].color || 'white' }">
        <div class="form-header">
            <UpdateIcon />
            <h3 class="form-title">Créer une nouvelle liste ✨</h3>
        </div>
        <p class="form-subtitle">Donnez un nom à votre liste pour mieux vous organiser ✨</p>

        <form @submit.prevent="listStore.createList()">

            <!-- Input pour le titre -->
            <div class="input-group">
                <label class="subtitle" for="title">Nom de la liste</label>
                <input
                    class="title-input"
                    v-model="listStore.title"
                    type="text"
                    placeholder="Ma super liste"
                />
            </div>

            <!-- Choix du type visible unique s'il y a plusieurs types 
            <div v-if="typeList.length > 1" class="input-group">
                <p class="subtitle" for="type">Type de liste</p>

                <div class="type-select">
                    <div
                        class="type-option"
                        v-for="item in typeList"
                        :key="item.type"
                        :class="{ selected: selectedType === item.type }"
                        @click="selectedType = item.type"
                    >
                        <p class="type-name">{{ item.label }}</p>
                        <img class="type-image" :src="item.image" alt="" />
                    </div>
                </div>
                
                 <p class="type-description">
                    {{ typeList.find(item => item.type === selectedType)?.description }}
                </p>
             </div> 
             -->
           
             <div class="action-buttons">
                <button class="secondary-button" type="button" @click="closeForm()">
                    Annuler
                </button>
                <!-- Submit -->
                <button class="super-action-button submit-button" type="submit">
                Créer
                </button>
             </div>

        </form>  
    </div>
   
</template>

<script setup>

import { computed, ref } from 'vue'
import typeList from '../../data/typeList.js'
import UpdateIcon from '../icons/updateIcon.vue'
import { useListStore } from '../../store/listStore.js' // Import du store Pinia pour gérer les listes

const listStore = useListStore() // Utilisation du store pour les listes avec Pinia

//Fermeture du formulaire de création de liste

const closeForm = () => {
  listStore.title = ''
  listStore.type = 'classic'
  listStore.creatingList = false // Ferme le formulaire de création de liste
}

</script>

<style>
.choose-list-title-form {
  display: flex;
  flex-direction: column;
  min-width: 320px;
  width: 80%;
  padding: 30px 30px 30px 30px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.form-header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  justify-content: flex-start;
}
.form-title {
  font-size: 1.1rem;
  color: var(--dark-blue);
}
.form-subtitle {
  font-size: 1rem;
  margin-bottom: 20px;
  text-align: left;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(116, 26, 152, 0.225);
  color: white;
}
.subtitle{
    font-weight: bold;
    color: var(--dark-blue);
}
.input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  align-items: flex-start;
}
.title-input {
  padding: 10px;
  border: 1px solid #ccc;
  width: 100%;
  border-radius: 5px;
  margin-top: 10px;
  text-align: left;
  font-size: 1rem;
  width: 100%;
}
.type-select{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin-top: 20px;
}
.type-image {
  width: 80px;
  height: 80px;
      border-radius: 5px;
    cursor: pointer;
    overflow: hidden;

}

.type-description {
    margin-top: 10px;
    font-size: 0.9rem;
    text-align: left;
    font-style: italic;
}
.type-name {
    font-size: 0.8rem;
    text-align: center;
    margin-bottom: 5px;
}
.action-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
}
.submit-button {
  width: 100px;
}
.cancel-button {
  width: 100px;
}
</style>
