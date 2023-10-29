<template>
  <div class="header" :class="{ 'alt-background': isAlternativeBackground }">
    <div class="left">
      <img src="@/assets/logo.svg" />
      <h1>{{ title }}</h1>
    </div>
    <div class="right">
      <div v-if="showAvatar" class="circle"></div>
      <div></div>
      <h3 v-if="showFullName">{{ createFullName }}</h3>
      <div></div>
      <button class="btn" @click="toggleButton">{{ buttonName }}</button>
    </div>
  </div>
</template>

<script>
import router from '@/router';
import { useGlobalStore } from '@/store';

export default {
  name: 'HeaderComponent',
  data() {
    return {
      user: useGlobalStore().user,
      title: 'Vue Project',
      buttonName: 'Login',
      isAlternativeBackground: false,
    };
  },
  computed: {
    showAvatar() {
      return useGlobalStore().user.loggedIn;
    },
    showFullName() {
      return useGlobalStore().user.loggedIn;
    },
    createFullName() {
      return this.user.firstName + " " + this.user.lastName
    }
  },
  methods: {
    toggleButton() {
      if (useGlobalStore().user.loggedIn) {
        if (confirm('Do you want to log out?')) {
          this.buttonName = 'Login';
          useGlobalStore().logout();
          router.push('/');
          this.isAlternativeBackground = false;
        }
      } else {
        if (confirm('Do you want to log in?')) {
          this.buttonName = 'Logout';
          useGlobalStore().login();
          router.push('/home');
          this.isAlternativeBackground = true;
        }
      }
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}

.left {
  display: flex;
  align-items: center;
}

.right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn {
  border: none;
  outline: none;
  padding: 10px 16px;
  background-color: #f1f1f1;
  cursor: pointer;
  font-size: 15px;
  margin-right: 1rem;
}

.circle {
  background-color: #f8f7ef;
  height: 50px;
  width: 50px;
  border-radius: 50%;
}

.header {
  background-color: #333;
}

.alt-background {
  background-color: #8096ab;
}
</style>
  