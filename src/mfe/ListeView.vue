<template>
  <div class="liste-view">
    <Sidebar />
    <ListResults />

  </div>
</template>

<script setup>
import Sidebar from '../Layout/Sidebar.vue';
import ListResults from '../components/ListResults.vue';
</script>

<style scoped>
.liste-view {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-self: center;
  align-self: center;
  height: 100%;
  overflow: hidden;
}
@media screen and (max-width: 768px) {
  .liste-view {
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 0;
    margin-top:0;
    margin-bottom: 0;
    overflow: scroll;
    background-color: var(--deep-violet);

       
  }
  
}
</style>