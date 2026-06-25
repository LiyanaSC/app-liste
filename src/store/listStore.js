import { defineStore } from 'pinia'
import { ref } from 'vue'
import * as listApi from '../api/list.api.js' // Importation de l'API pour les listes (à implémenter)


export const useListStore = defineStore('list', () => {
    // Variables réactives
    // Variables pour stocker le titre
    const isDarkMode = ref(false) // Variable pour gérer le mode sombre
    const title = ref('')
    // Variable pour stocker le type de liste, initialisée à 'classic'
    const type = ref('classic') 
    // RECUPERE les listes du localStorage ou initialise un tableau vide si aucune liste n'est trouvée
    const lists = ref([]) 
     // Variable réactive pour STOCKER LA LISTE SELECTIONNEE, initialisée à null
    const selectedList = ref(null) 
    const creatingList = ref(false) // Variable pour gérer l'état de création d'une liste
    //variable qui montre ou cache les résultats de la liste (pour les mobiles)
    const showListResults = ref(false)
    const showDeleteConfirmationList = ref(false) // Variable pour gérer l'affichage de la confirmation de suppression
    const showDeleteConfirmationItem = ref(false) // Variable pour gérer l'affichage de la confirmation de suppression d'un item
    const toDeleteName = ref('') // Variable pour stocker l'élément à supprimer
    const toDeleteId = ref('') // Variable pour stocker l'ID de l'élément à supprimer
//------------- récupérer les listes depuis le backend -----------------------------
    async function initLists() {
        //je créer une variable pour y ajouter un token de test A SUPPRIMER LORS DE L'IMPLEMENTATION DE L'AUTHENTIFICATION
        try {
            const res = await listApi.getLists()
            lists.value = res.data || [] // Met à jour les listes avec les données récupérées du backend, ou un tableau vide si aucune donnée n'est trouvée
            console.log(lists.value)
        } catch (err) {
            console.warn('API down → fallback local', err)
        }
    }


 
//------------- SELECTIONNER UNE LISTE par le biais de son id parmis le tableau de listes
    async function selectList(key) {
         selectedList.value = lists.value.find(list => list._id === key) || null
         showListResults.value = true// Affiche les résultats de la liste sélectionnée (pour les mobiles)
          console.log('showListResults après sélection :', showListResults.value)
    }

//------------- CREER une liste --------------------------------------------------
    async function createList() {
        if (!title.value.trim()) return // Vérifie que le titre n'est pas vide ou composé uniquement d'espaces
        const newList = {
            title: title.value,
            type: type.value,
            items: []
        }
        try {
            const res = await listApi.createList(newList)  
                // Met à jour la nouvelle liste avec l'ID retourné par le backend
                lists.value.push(res.data)
                console.log('Liste créée avec succès :', lists.value)
                 selectedList.value = res.data // Sélectionne automatiquement la nouvelle liste créée 
        } catch (err) {
            console.warn('API down → fallback local', err)
        }
          // reset
        title.value = ''
        type.value = 'classic'
        creatingList.value = false // Ferme le formulaire de création de liste
        showListResults.value = true // Affiche les résultats de la liste sélectionnée (pour les mobiles)
    }
//------------MODIFIER le titre d'une liste dans le tableau de listes en utilisant son id
    async function editListTitle(key, newTitle) {
        event.stopPropagation() // Empêche la propagation de l'événement de clic pour éviter de sélectionner la liste avant de la supprimer
        const list = lists.value.find(list => list._id === key)
        if (list) {
            list.title = newTitle
             try {
            const res = await listApi.updateList(list._id, { title: newTitle })
            console.log('Titre de la liste mis à jour avec succès :', res.data)  
            } catch (err) {
                console.warn('API down → fallback local', err)
            }
        }
    }

    //SUPPRIME UNE LISTE du tableau de listes en utilisant son id
    async function deleteList(key) {
        event.stopPropagation() // Empêche la propagation de l'événement de clic pour éviter de sélectionner la liste avant de la supprimer
        const updatedLists = lists.value.filter(item => item._id !== key)// Filtre les listes pour exclure celle avec l'ID spécifié
        lists.value = updatedLists // Met à jour la liste des listes dans le localStorage
         try {
            const res = await listApi.deleteList(key)
            console.log('Liste supprimée avec succès :', res.message)  
            showDeleteConfirmationList.value = false // Masque la confirmation de suppression
            toDeleteId.value = '' // Réinitialise l'ID de l'élément à supprimer
            toDeleteName.value = '' // Réinitialise le nom de l'élément à supprimer
            } catch (err) {
                console.warn('API down → fallback local', err)
            }

        if (selectedList.value && selectedList.value.id === key) {// Vérifie si la liste supprimée est actuellement sélectionnée
            selectedList.value = null // Si la liste supprimée était la liste sélectionnée, réinitialise la sélection
            showListResults.value = false // Masque les résultats de la liste (pour les mobiles)
        }
    }

    //AJOUTER un nouvel élément à la liste sélectionnée
    async function addItemToSelectedList(entry) {
    if (!selectedList.value) return
    if (!entry?.trim()) return

    const newItem = {
        entry: entry,
        isCompleted: false,
    }
    selectedList.value.items.push(newItem)
    try {
        const res = await listApi.updateList(selectedList.value._id, { items: selectedList.value.items })
        selectedList.value = res.data // Met à jour la liste sélectionnée avec les données retournées par le backend
        console.log('Liste mise à jour avec succès :', res.data)
    // Ajoute le nouvel élément à la liste des éléments de la liste sélectionnée
        } catch (err) {
            console.warn('API down → fallback local', err)
        }
    }

    //MET À JOUR L'ÉTAT de complétion d'un élément de la liste sélectionnée
    async function toggleItemCompletion(itemId) {
        if (!selectedList.value) return// Vérifie si une liste est sélectionnée 

        if (selectedList.value.type === 'classic') {
            const item = selectedList.value.items.find(item => item._id === itemId)
            if (item) {
                item.done = !item.done
                console.log('État de complétion mis à jour pour l\'élément :', item, !item.isCompleted)
                try {
                    const res = await listApi.updateList(selectedList.value._id, { items: selectedList.value.items })
                    console.log('Liste mise à jour avec succès :', res.data)  
                } catch (err) {
                    console.warn('API down → fallback local', err)
                }
            }
        }

    }

    //MET À JOUR L'ENTRÉE d'un élément de la liste sélectionnée
    async function updateItemEntry(itemId, newEntry) {
        //jarrête la propagation de l'événement de clic pour éviter de sélectionner la liste avant de valider les modifications
        if (!selectedList.value) return // Vérifie si une liste est sélectionnée

            const item = selectedList.value.items.find(item => item._id === itemId)
            if (item) {
                item.entry = newEntry
                try {
                    const res = await listApi.updateList(selectedList.value._id, { items: selectedList.value.items })
                    console.log('Liste mise à jour avec succès :', res.data)  
                } catch (err) {
                    console.warn('API down → fallback local', err)
                }
            }   

    }

    //SUPPRIME un élément de la liste sélectionnée
    async function deleteItem(itemId) {
        if (!selectedList.value) return // Vérifie si une liste est sélectionnée

        const updatedItems = selectedList.value.items.filter(item => item._id !== itemId) // Filtre les éléments pour exclure celui avec l'ID spécifié
        selectedList.value.items = updatedItems // Met à jour la liste des éléments dans la liste sélectionnée

        try {
            const res = await listApi.updateList(selectedList.value._id, { items: selectedList.value.items })
            showDeleteConfirmationItem.value = false // Masque la confirmation de suppression
            toDeleteId.value = '' // Réinitialise l'ID de l'élément à supprimer
            toDeleteName.value = '' // Réinitialise le nom de l'élément à supprimer  
        } catch (err) {
            console.warn('API down → fallback local', err)
        }
    }

 
    // Retourne les données et les fonctions pour être utilisées dans les composants
    return {
        title,
        isDarkMode,
        type,
        lists,
        creatingList,
        showListResults,
        showDeleteConfirmationList,
        showDeleteConfirmationItem,
        toDeleteName,
        toDeleteId,
        initLists,
        createList,
        selectList,
        selectedList,
        addItemToSelectedList,
        toggleItemCompletion,
        editListTitle,
        deleteList,
        updateItemEntry,
        deleteItem
    }       
})