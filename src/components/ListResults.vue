<template>
    <div :class="isMobile ? 'list-results-mobile' : 'list-results'" v-if="isMobile ? listStore.showListResults  : isMobile === false"   @keydown.esc="listStore.showListResults = false"
>
        <div v-if="isMobile" class="back-arrow-box"><img :src="arrowLeft" alt="Retour" class="back-arrow" @click="listStore.showListResults = false"/></div>
        <h3 class="list-results-title">{{ listStore.selectedList?.title || 'Aucune liste sélectionnée' }}</h3>
        <StarBar class="mobile-star-bar"/>
 <!-- ------------Message d'invite si aucune liste n'est sélectionnée------------ -->
        <div class="content-list">
          <p v-if="!listStore.selectedList">Choississez une liste dans la barre latérale pour afficher ses résultats.
            <br>Ou créez une nouvelle liste pour commencer à ajouter des éléments.
            <br><span class="yellow-heart">💛</span>
          </p>
 <!-- ------------Affichage des éléments de la liste de type classique------------ -->
          <div v-else class="list-items-container">
                <ul v-if="listStore.selectedList.type === 'classic'" class="list-items">
                  <li class="item" v-for="(item, index) in sortedItems" :key="item._id">
                    <Result :entry="item.entry" :itemId="item._id" :isDone="item.done" />
                  </li>   
                </ul>
<!-- ------------Affichage du champ d'ajout d'éléments pour les listes de type classique------------ -->
                  <p v-if="listStore.selectedList.type === 'classic'" :class="isFocus && isMobile ? 'entry-box-focus' : 'entry-box'">
                    <span class="entry-style">
                    <input type="text" id="entry" v-model="entry" class="entry-input" @keyup.enter="addItem" placeholder="Ajouter un nouvel élément..." @focus="isFocus=true" > 
                    <label for="entry" v-if="entry"><img :src="sendImg" alt="Envoyer" class="send-entry" @click="addItem"></label>
                    <label for="entry" v-else><img :src="plusWhite" alt="Ajouter" class="add-entry"></label>
                  </span>
                </p>
                <p class="info">⭐️Appuie sur une Entrée pour ajouter</p>
              </div>

        </div>

    </div>
</template>

<script setup>
import { computed, ref } from 'vue' // Import de la fonction ref de Vue pour créer des variables réactives
import plusWhite from '../assets/plus-white.svg' // Import de l'image + blanche pour le bouton d'ajout
import sendImg from '../assets/send.svg' // Import de l'image send pour le bouton d'envoi
import arrowLeft from '../assets/arrow-left.svg' // Import de l'image de flèche gauche pour le bouton de retour (non utilisé dans ce code, mais peut être utilisé pour les mobiles)
import StarBar from './style/starBar.vue' // Import du composant StarBar pour l'affichage de la barre étoilée
import { useListStore } from '../store/listStore' // Import du store Pinia pour gérer les listes
import { useIsMobile } from '../composables/useIsMobile.js'
import Result from './buttons/result.vue' // Import du composant Result pour l'affichage des éléments de la liste

const { isMobile } = useIsMobile() 
const listStore = useListStore()

const isFocus = ref(false)

const showListResults = ref(false) // Variable réactive pour contrôler l'affichage des résultats de la liste (utilisée pour les mobiles)

const entry = ref('')

const addItem = () => {
  if (entry.value.trim() !== '') {
    listStore.addItemToSelectedList(entry.value) // Appelle la méthode du store pour ajouter un nouvel élément à la liste sélectionnée
    entry.value = '' // Réinitialise le champ de saisie après l'ajout
    isFocus.value = false // Réinitialise l'état de focus après l'ajout
  }
}

//je classe les items selon s'ils sont checkés ou non
const sortedItems = computed(() => {
  if (!listStore.selectedList) return []
  const doneItems = listStore.selectedList.items.filter(item => item.done)
  const notDoneItems = listStore.selectedList.items.filter(item => !item.done)
  return [...notDoneItems, ...doneItems] // Les éléments non cochés sont affichés en premier
})



</script>

<style scoped>
.list-results {
  background-color: var(--lither-lavender);
  width: 70%;
  min-height: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.list-results-mobile {
  position: absolute;
  z-index: 1;
  background-color: var(--lither-lavender);
  width: 100%;
  min-height: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.list-results-title {
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
}
.content-list {
 flex: 1;
 min-height: 0;
 display: flex;
 flex-direction: column;
 justify-content: center;
  align-items: center;
}
.yellow-heart {
  display: inline-block;
  font-size: 2rem;
  margin-top: 20px;
}
.list-items-container {
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 0;
  flex: 1;
}
.list-items {
 min-height: 0;
 flex: 1;
  display: block;
  list-style-type: none;
  padding: 0;
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left:30px;
  padding-right: 30px;
height: 80%;
overflow-y: auto;
padding: 20px;

}
.item{
  display: inline-block;
  display: flex;
  align-items: center;
  text-align: left;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  gap: 10px;
}


.entry-box {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end ;
height: 10%;
min-height: 40px;
  padding-left: 20px;
  padding-right: 20px;
}
.entry-box-focus{
  box-sizing: border-box;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end ;
height: 10%;
min-height: 40px;
overflow: hidden;
background-color: white;

}
.entry-style{
  display: flex;
  align-items: center;
  width: 100%;
  background-color: white;
  padding: 10px;
  border-radius: 15px;
}
.entry-input{
  padding: 10px;
  width: 100%;
  font-size: 1rem;
  border:none;
  outline: none;
  text-align: left;
}
.entry-input::placeholder{
  color: var(--color-secondary);
  opacity: 0.5;
}
.add-entry{
  width: 30px;
  height: 30px;
  margin-right: 10px;
  cursor: pointer;
  background-color: var(--color-secondary);
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(55, 54, 54, 0.724);

}
.send-entry{
  width: 30px;
  height: 30px;
  margin-right: 10px;
  padding: 5px;
  cursor: pointer;
  background-color: var(--color-secondary);
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(55, 54, 54, 0.724);

}
.info{
  margin-bottom: 10px;
  font-size: 0.8rem;
  font-style: italic;
  color: var(--color-secondary);
  width: 100%;
  text-align: left;
  padding-left: 20px;
  opacity: 0.7;
  margin-top: 10px;
  margin-bottom: 20px;

}

  @media screen and (max-width: 768px) {
    .list-results{
      width: 100%;
    }
    .back-arrow{
      width: 30px;
      height: 30px;
      margin: 20px;
      cursor: pointer;
    }
    .back-arrow-box{
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: flex-start;
      width: 100%;
    }
    .mobile-star-bar{

      margin: 0px;  
    }
    .list-items{
      gap:0px;
      border-radius: 15px 15px 0px 0px;
      padding: 0px;
    }
    .item{
      border-radius: 0px;
      border-bottom: 0.5px solid var(--light-blue);
    }
    .entry-box{
      padding: 0px;
    }
  }

</style>