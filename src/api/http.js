/*rappel base méthode fetch :
fetch('https://api.example.com/data', {
  method: 'POST', // ou 'GET', 'PUT', etc.
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123' // si nécessaire
  },
  body: JSON.stringify({ key: 'value' }) // pour les méthodes qui envoient des données
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
*/

const API_URL = import.meta.env.VITE_SDHL_VUEJS_APP_SIMPLIE_URL_LIST // Récupère l'URL de base de l'API à partir des variables d'environnement


export async function http(path, options = {}) {
  // Récupère le token d'authentification depuis le localStorage
  const token = localStorage.getItem('token') 
  // Effectue une requête HTTP en utilisant fetch, en construisant l'URL complète et en ajoutant les en-têtes nécessaires
  const res = await fetch(`${API_URL}${path}`, {
     // Ajoute les autres options de la requête (méthode, corps, etc.) en écrasant les valeurs par défaut si nécessaire
    ...options,
    headers: {
      'Content-Type': 'application/json',
      //boolean && objet retourne objet donc ici => Si un token est présent, l'ajoute à l'en-tête Authorization (les points: ...(null) => renvoit rien si token est null)
      ...(token && { Authorization: `Bearer ${token}` }),
      // Ajoute les en-têtes supplémentaires fournis dans les options, en écrasant les en-têtes par défaut si nécessaire
      ...(options.headers || {})
    }
   
  })

  if (!res.ok) {
    const error = await res.json().catch(() => ({}))
    throw new Error(error.message || 'API Error')
  }

  return res.json()
}
