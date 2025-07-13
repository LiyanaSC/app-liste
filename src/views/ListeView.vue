<template>
  <div class="p-6">
    <h2>📝 Mes Listes</h2>
    <ul>
      <li v-for="item in ['Acheter du pain', 'Envoyer un mail']" :key="item">
        • {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
// Aucun script pour l’instant
</script>