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
  overflow: hidden;
  justify-self: center;
  align-self: center;
  margin-top: 50px;
  margin-bottom: 50px;

}
</style>