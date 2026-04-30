// src/main.js

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import ListeView from './mfe/ListeView.vue'

// Styles (⚠️ à améliorer plus tard)
import '/Users/linonliyana/Documents/GitHub/BTB_projet/shell/src/style/variables.css'
import '/Users/linonliyana/Documents/GitHub/BTB_projet/shell/src/style/theme.css'
import '/Users/linonliyana/Documents/GitHub/BTB_projet/shell/src/style/base.css'

function createMyApp(Component, el) {
  const app = createApp(Component)

  const pinia = createPinia()
  app.use(pinia)

  app.mount(el) // ✅ el doit être un élément DOM (ref)
  console.log("App montée sur", el)
}

// 🔥 MODE MFE → appelé par le shell
export function mount(el) {
  if (!el) {
    console.error('❌ container manquant')
    return
  }

  // 🔥 IMPORTANT : nettoyer avant montage
  el.innerHTML = ''

  // 🔥 créer un container interne (évite d’écraser le shell)
  const container = document.createElement('div')
  container.style.width = '100%'
  container.style.minHeight = '0'
  container.style.flex = '1'

  el.appendChild(container)

  createMyApp(ListeView, container)
}

//  MODE DEV (standalone)
if (import.meta.env.DEV === true) {
  createMyApp(App, '#app')
}
//  VERIF mfe 
/*if (import.meta.env.DEV === false) {
  createMyApp(ListeView, '#applist')
}*/
// Global error handler
window.addEventListener('error', function (event) {
  console.error("Erreur JavaScript capturée :", event.message)
  console.log("Fichier :", event.filename)
  console.log("Ligne :", event.lineno)
  console.log("Colonne :", event.colno)
  console.log("Objet erreur complet :", event.error)
})