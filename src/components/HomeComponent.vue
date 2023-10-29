<template>
  <div class="row">
    <div class="col">
      <NavigationComponent />
    </div>
    <div class="col">
      <div class="songs">
        <h1>{{ msg }}</h1>
        <SongListComponent />
      </div>
    </div>
  </div>
</template>
  
<script>
import NavigationComponent from './NavigationComponent.vue';

export default {
  name: 'HomeComponent',
  data() {
    return {
      msg: "Home"
    };
  },
  components: { NavigationComponent }
}
</script>
  
<style scoped>
.row {
  display: flex;
  flex-direction: row;
  width: 100%
}

.col {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100vw;
}

.songs {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100vw;
}
</style>
  