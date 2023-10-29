import { defineStore } from 'pinia';
import songs from './components/JSONExport'

const useGlobalStore = defineStore({
  id: 'global',
  state: () => ({
    user: {
      firstName: 'name',
      lastName: 'surname',
      studentCode: 'CODE1234',
      loggedIn: false,
      loggedAt: []
    },
    all_songs: songs
  }),
  actions: {
    login() {
      this.user.loggedIn = true;
      this.user.loggedAt.push(getFormattedTimestamp());
    },
    logout() {
      this.user.loggedIn = false;
    },
    resetUser() {
      this.user.firstName = 'name';
      this.user.lastName = 'surname';
      this.user.studentCode = 'CODE1234';
      this.user.loggedIn = false;
      this.user.loggedAt = [];
    }
  },
});

function getFormattedTimestamp() {
  const now = new Date();
  const date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
  const time = `${now.getHours()}:${now.getMinutes()}`;
  return `${date} - ${time}`;
}

export { useGlobalStore };