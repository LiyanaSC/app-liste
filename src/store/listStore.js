import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useListStore = defineStore('list', () => {
    // Récupère les listes du localStorage ou initialise un tableau vide si aucune liste n'est trouvée
    const lists = ref(localStorage.getItem('lists') ? JSON.parse(localStorage.getItem('lists')) : []) 
    
    // Variable réactive pour stocker la liste sélectionnée
    const selectedList = ref(null) // Variable pour stocker la liste sélectionnée
    
    //fonction pour selectionner une liste par le biais de son index parmis le tableau de listes
    function selectList(index) {
         selectedList.value = lists.value[index] || null
          console.log('Liste sélectionnée :', selectedList.value)
    }
   
    return {
        lists,
        selectList,
        selectedList
    }       
})