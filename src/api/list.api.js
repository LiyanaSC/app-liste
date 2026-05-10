import { http } from './http.js'

// GET /lists
export const getLists = () => {
  return http('/lists') // utilise uniquement le paramètre path de la fonction http
}

// GET /lists/:id NON UTILISE POUR LE MOMENT CAR ON A DEJA TOUTES LES INFOS DANS LE TABLEAU DE LISTES
export const getList = (id) => {
  return http(`/lists/${id}`) // utilise uniquement le paramètre path de la fonction http
}

// POST /lists
export const createList = (data) => {
  return http('/lists', { // utilise le paramètre path 
    //et options de la fonction http pour spécifier la méthode et le corps de la requête
    method: 'POST', 
    body: JSON.stringify(data)
  })
}

// PATCH /lists/:id
export const updateList = (id, data) => {
  return http(`/lists/${id}`, { // utilise le paramètre path pour spécifier l'ID de la liste à mettre à jour
    //et options de la fonction http pour spécifier la méthode et le corps de la requête
    method: 'PATCH',
    body: JSON.stringify(data)
  })
}

// DELETE /lists/:id
export const deleteList = (id) => {
  return http(`/lists/${id}`, { // utilise le paramètre path pour spécifier l'ID de la liste à supprimer
    //et options de la fonction http pour spécifier la méthode
    method: 'DELETE'
  })
}