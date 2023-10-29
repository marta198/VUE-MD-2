<template>
  <nav class="navigation">
    <router-link to="/home" class = 'btn'>Home</router-link>
    <router-link to="/about-me" class = 'btn'>About Me</router-link>
  </nav>
</template>

<script>
import { useGlobalStore } from '@/store';

export default {
  name: 'NavigationComponent',
  data() {
    return {
            isHomeActive: true,
            isAboutMeActive: false
        }
  },
  computed: {
    loggedIn() {
      const store = useGlobalStore();
      return store.user.loggedIn;
    },
  }
};
</script>

  <style scoped>
    .navigation {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .btn {
      border: none;
      outline: none;
      padding: 10px 16px;
      background-color: #f1f1f1;
      cursor: pointer;
      font-size: 18px;
    }
    .router-link-active {
      background-color: #666;
      color: white;
    }
  </style>
