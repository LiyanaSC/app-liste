<template>
    <div class="list-results">
        <h2>Résultats de la recherche</h2>
        <p>Aucun résultat trouvé. <span> </span></p>

    </div>
</template>

<script setup>
</script>

<style scoped>
.list-results {
  padding-top: 1rem;

  background-color: var(--lither-lavender);
  width: 70%;
  min-height: 100%;
  
}
@media screen and (max-width: 768px) {
.list-results{
  width: 100%;

}
  
}

</style>