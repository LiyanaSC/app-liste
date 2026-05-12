// Importe les fonctions nécessaires depuis Vite et les plugins

// Permet de définir la configuration Vite
import { defineConfig } from 'vite' 
// Plugin pour Vue 3 dans Vite
import vue from '@vitejs/plugin-vue' 
// Plugin pour activer le Module Federation afin de faire du micro-frontends
import federation from '@originjs/vite-plugin-federation'


export default defineConfig({
 base: '/appbudget-dist/', // Base path pour les ressources (important pour le module federation)
  plugins: [
    vue(),// Active le support de Vue dans Vite
    federation({
      // Nom du microfrontend appelé par le shell (doit être unique dans l’architecture)
      name: 'app-budget',
      // Le fichier généré qui contient les composants exposés pour le shell
      filename: 'remoteEntry.js',
      // Liste des composants/pages que ce microfrontend rend disponibles au shell
      // Le shell peut importer ces composants via le nom défini ici
      exposes: {
        // Clé = nom utilisé par le shell pour importer, valeur = chemin local vers le composant
       './mount': './src/main.js'

      },
      // Déclare les dépendances partagées (évite que chaque MFE charge sa propre copie de Vue)
       shared: {
        vue: { singleton: true, requiredVersion: '3.5.13' },

        // IMPORTANT
        pinia: {
          singleton: false, // ✅ permet isolation
        },
      }
    })
  ],
  server: {
    // Port sur lequel l’app sera lancée en dev (`npm run dev`)
    port: 5002,
    // Ces headers permettent d’autoriser le shell (sur un autre port) à charger ce microfrontend
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  build: {
    // Désactive le préchargement des modules (peut être nécessaire pour certains cas d'utilisation)
    modulePreload: false,
    // Cible les navigateurs modernes (pour module federation, recommandé)
    target: 'esnext',
    // Désactive la minification pour faciliter le debug (optionnel)
    minify: false,
    cssCodeSplit: false,
     
    outDir: "/Users/linonliyana/Documents/GitHub/BTB_projet/appbudget-dist/"
  }
})
