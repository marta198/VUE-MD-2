<template>
  <div class="song-list">
    <SongFilterComponent @filter-selected="onFilterSelected" />
    <table>
      <thead>
        <tr>
          <th @click="sortSongs('song')">Name</th>
          <th @click="sortSongs('artist')">Artist</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="song in filteredSongs" :key="song.id">
          <td>{{ song.song }}</td>
          <td>{{ song.artist }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import SongFilterComponent from '@/components/SongFilterComponent.vue';
import { useGlobalStore } from '@/store';

export default {
  name: 'SongListComponent',
  components: {
    SongFilterComponent,
  },
  data() {
    return {
      songs: [],
      filteredSongs: [],
      currentSort: 'none',
    };
  },
  methods: {
    onFilterSelected(filter) {
      this.currentSort = filter;
      this.sortSongs();
    },
    sortSongs() {
      if (this.currentSort === 'name') {
        this.filteredSongs.sort((a, b) => {
          return a.songT < b.songT ? -1 : 1;
        });
      } else if (this.currentSort === 'artist') {
        this.filteredSongs.sort((a, b) => {
          return a.artist < b.artist ? -1 : 1;
        });
      } else if (this.currentSort === 'none') {
        this.filteredSongs = [...useGlobalStore().all_songs];
      }
    }
  },
  computed: {
    all_songs() {
      return useGlobalStore().all_songs;
    },
  },
  watch: {
    all_songs: {
      handler(newSongs) {
        this.songs = newSongs;
        this.filteredSongs = [...newSongs];
        this.sortSongs();
      },
      immediate: true
    },
  },
};
</script>

<style scoped>
.song-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}
</style>