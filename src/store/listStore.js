import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useListStore = defineStore('list', () => {
    // Variables réactives
    // Variables pour stocker le titre
    const title = ref('')
    // Variable pour stocker le type de liste, initialisée à 'classic'
    const type = ref('classic') 
    // RECUPERE les listes du localStorage ou initialise un tableau vide si aucune liste n'est trouvée
    const lists = ref(localStorage.getItem('lists') ? JSON.parse(localStorage.getItem('lists')) : []) 
     // Variable réactive pour STOCKER LA LISTE SELECTIONNEE, initialisée à null
    const selectedList = ref(null) 
    const creatingList = ref(false) // Variable pour gérer l'état de création d'une liste
    //variable qui montre ou cache les résultats de la liste (pour les mobiles)
    const showListResults = ref(false)

    // CREER une liste de listes, chaque liste ayant un id, un titre, un type et un tableau d'items
    function createList() {
        if (!title.value.trim()) return // Vérifie que le titre n'est pas vide ou composé uniquement d'espaces
        const newList = {
            id: Date.now(), // En attendant l'envoie au backend, on utilise l'horodatage comme ID unique
            title: title.value,
            type: type.value,
            items: []
        }
        lists.value.push(newList)
        localStorage.setItem('lists', JSON.stringify(lists.value))
          // reset
        title.value = ''
        type.value = 'classic'
        selectedList.value = newList // Sélectionne automatiquement la nouvelle liste créée 
        creatingList.value = false // Ferme le formulaire de création de liste
        showListResults.value = true // Affiche les résultats de la liste sélectionnée (pour les mobiles)
        console.log('creation a true? :', creatingList.value)       
        console.log('Nouvelle liste créée :', newList)
    }
 
    //fonction pour SELECTIONNE UNE LISTE par le biais de son id parmis le tableau de listes
    function selectList(key) {
         selectedList.value = lists.value.find(list => list.id === key) || null
         showListResults.value = true// Affiche les résultats de la liste sélectionnée (pour les mobiles)
          console.log('showListResults après sélection :', showListResults.value)
    }
    //MODIFIE le titre d'une liste dans le tableau de listes en utilisant son id
    function editListTitle(key, newTitle) {
        event.stopPropagation() // Empêche la propagation de l'événement de clic pour éviter de sélectionner la liste avant de la supprimer
        const list = lists.value.find(list => list.id === key)
        if (list) {
            list.title = newTitle
            localStorage.setItem('lists', JSON.stringify(lists.value))

        }
    }

    //SUPPRIME UNE LISTE du tableau de listes en utilisant son id
    function deleteList(key) {
        event.stopPropagation() // Empêche la propagation de l'événement de clic pour éviter de sélectionner la liste avant de la supprimer
        console.log("hello",key)
        const updatedLists = lists.value.filter(item => item.id !== key)// Filtre les listes pour exclure celle avec l'ID spécifié
        lists.value = updatedLists // Met à jour la liste des listes dans le localStorage
        localStorage.setItem('lists', JSON.stringify(updatedLists))// Met à jour le localStorage avec la nouvelle liste de listes
        if (selectedList.value && selectedList.value.id === key) {// Vérifie si la liste supprimée est actuellement sélectionnée
            selectedList.value = null // Si la liste supprimée était la liste sélectionnée, réinitialise la sélection
            showListResults.value = false // Masque les résultats de la liste (pour les mobiles)
        }
        
    }

    //AJOUTER un nouvel élément à la liste sélectionnée
    function addItemToSelectedList(entry) {
    if (!selectedList.value) return

    const newItem = {
        id: Date.now(), // en attendant l'envoie au backend, on utilise l'horodatage comme ID unique
        entry: entry,
        isCompleted: false,
    }

    selectedList.value.items.push(newItem)

    localStorage.setItem('lists', JSON.stringify(lists.value))
    }

    //MET À JOUR L'ÉTAT de complétion d'un élément de la liste sélectionnée
    function toggleItemCompletion(itemId) {
        if (!selectedList.value) return// Vérifie si une liste est sélectionnée 

        if (selectedList.value.type === 'classic') {
            const item = selectedList.value.items.find(item => item.id === itemId)
            if (item) {
                item.isCompleted = !item.isCompleted
                console.log('État de complétion mis à jour pour l\'élément :', item, !item.isCompleted)
                localStorage.setItem('lists', JSON.stringify(lists.value))
            }
        }

    }

 
    // Retourne les données et les fonctions pour être utilisées dans les composants
    return {
        title,
        type,
        lists,
        creatingList,
        showListResults,
        createList,
        selectList,
        selectedList,
        addItemToSelectedList,
        toggleItemCompletion,
        editListTitle,
        deleteList
    }       
})