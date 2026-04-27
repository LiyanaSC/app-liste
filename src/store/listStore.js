import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useListStore = defineStore('list', () => {
    // Récupère les listes du localStorage ou initialise un tableau vide si aucune liste n'est trouvée
    const lists = ref(localStorage.getItem('lists') ? JSON.parse(localStorage.getItem('lists')) : []) 
    
    
    //fonction pour selectionner une liste par le biais de son index parmis le tableau de listes
    function selectList(index) {
         selectedList.value = lists.value[index] || null
          console.log('Liste sélectionnée :', selectedList.value)
    }

    // Variable réactive pour stocker la liste sélectionnée
    const selectedList = ref(null) // Variable pour stocker la liste sélectionnée
    
    //ajoute un nouvel élément à la liste sélectionnée
    function addItemToSelectedList(item) {
        if (selectedList.value) {
            selectedList.value.items.push(item)
            // Met à jour le localStorage avec les nouvelles données de la liste
            localStorage.setItem('lists', JSON.stringify(lists.value))
        }
    }   
   
    // Retourne les données et les fonctions pour être utilisées dans les composants
    return {
        lists,
        selectList,
        selectedList,
        addItemToSelectedList
    }       
})