<template>
  <div class="aboutme">
    <div class="background-image-container"></div>
  </div>
</template>
  
<script>
export default {
  name: 'LandingComponent',
  data() {
    return {
      msg: "Landing",
    }
  }
}
</script>

<style>
.background-image-container {
  background-image: url('../assets/sparkling_background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: flex;
  height: 100vh;
}
</style>