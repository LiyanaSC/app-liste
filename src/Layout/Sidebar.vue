<template>
    <nav class="list-sidebar">
        <h2 class="sidebar-title">Mes Listes</h2>


    </nav>
</template>

<style scoped>
.list-sidebar {
  min-height: 100vh;
  min-width: 350px;
  max-width: 500px;
  width: 50%;

  background-color: var(--deep-violet);
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  transition: width 0.3s ease;
  overflow: hidden;
  z-index: 1;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--lither-lavender);
  padding: 1rem;
  border-bottom: 1px solid var(--lavender);
}

</style>