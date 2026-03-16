import { createApp } from 'vue'
import '/Users/linonliyana/Documents/GitHub/BTB_projet/shell/src/style/variables.css'
import '/Users/linonliyana/Documents/GitHub/BTB_projet/shell/src/style/theme.css'
import '/Users/linonliyana/Documents/GitHub/BTB_projet/shell/src/style/base.css'
import App from './App.vue'

createApp(App).mount('#app')

window.addEventListener('error', function (event) {
  console.error("Erreur JavaScript capturée :", event.message);
  console.log("Fichier :", event.filename);
  console.log("Ligne :", event.lineno);
  console.log("Colonne :", event.colno);
  console.log("Objet erreur complet :", event.error);
});
