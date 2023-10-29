<template>
  <p>Filter by: </p>
  <div class="song-filter">
    <button @click="setFilter('none')" :class="{ active: activeFilter === 'none' }">
      None
    </button>
    <button @click="setFilter('name')" :class="{ active: activeFilter === 'name' }">
      Name
    </button>
    <button @click="setFilter('artist')" :class="{ active: activeFilter === 'artist' }">
      Artist
    </button>
  </div>
</template>

<script>
export default {
  name: 'SongFilterComponent',
  data() {
    return {
      activeFilter: 'none'
    };
  },
  methods: {
    setFilter(filter) {
      this.activeFilter = filter;
      this.$emit('filter-selected', filter);
    },
  },
};
</script>

<style scoped>
.song-filter {
  display: flex;
  gap: 10px;
}

.button {
  background-color: #f1f1f1;
  padding: 10px 16px;
  cursor: pointer;
  font-size: 15px;
}

.active {
  background-color: #28c495;
  color: #fff;
}
</style>
