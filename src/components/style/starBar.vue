<template>
    <div class="starbar">
        <div class="left-bar"></div>
        <p>⭐️</p>
        <div class="right-bar"></div>
    </div>
</template>
<style scoped>
.starbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin:  0;
  margin-bottom: 20px;
}
.left-bar {
  margin: 0;
  height: 2px;
  width: 50px;
  background:  linear-gradient(90deg,rgba(255, 218, 82, 0),rgb(255, 218, 82));
}
.right-bar {
  margin: 0;
  height: 2px;
  width: 50px;
  background:  linear-gradient(90deg,rgb(255, 218, 82),rgba(255, 218, 82, 0));
}
p {
  margin: 0 10px;
}
</style>