<template>
  <div id="app">
    <header>
      <HeaderComponent />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import { useGlobalStore } from '@/store';

export default {
  name: 'App',
  components: {
    HeaderComponent,
  },
  data() {
    return {
      showNavigation: useGlobalStore().user.loggedIn
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.row {
  display: flex;
}

.column {
  flex: 50%;
}

.HeaderComponent {
  background-color: #333;
  color: white;
  padding: 10px;
}
</style>
