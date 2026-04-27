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
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  justify-self: center;
  align-self: center;
  margin-top: 50px;
  margin-bottom: 50px;
  height: 90%;
  border-radius: 20px;
  overflow: hidden;




}
@media screen and (max-width: 768px) {
  .liste-view {
    flex-direction: column;
    width: 95%;
    margin-top: 20px;
    margin-bottom: 20px;
    overflow: scroll;

       
  }
  
}
</style>