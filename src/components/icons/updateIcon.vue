<template>
    <div class="update-icon-container">
        <img class="update-icon" :src="updateIcon" alt="icon de mise à jour">
    </div>
</template>
<script setup>
import updateIcon from '../../assets/icon-update.svg'

</script>

<style scoped>
.update-icon {
  width: 15px;
  height: 15px;
}
.update-icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(116, 26, 152, 0.225);
  height: 20px;
  width: 20px;
    border-radius: 2px;
}
</style>