import { importShared } from './__federation_fn_import-dmqIiFee.js';
import App from './__federation_expose_ListeView-umwxsYqN.js';

const {createApp} = await importShared('vue');

createApp(App).mount('#app');

window.addEventListener('error', function (event) {
  console.error("Erreur JavaScript capturée :", event.message);
  console.log("Fichier :", event.filename);
  console.log("Ligne :", event.lineno);
  console.log("Colonne :", event.colno);
  console.log("Objet erreur complet :", event.error);
});
