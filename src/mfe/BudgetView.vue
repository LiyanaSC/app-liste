<template>
  <div class="budget-view">
    <p>Je suis en cours de développement, je serai bientôt disponible.</p>

  </div>
</template>

<script setup>

</script>

<style scoped>
.budget-view {
  position: relative;
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
  .budget-view {
    flex-direction: column;
    width: 95%;
    margin-top: 20px;
    margin-bottom: 20px;
    overflow: scroll;

       
  }
  
}
</style>