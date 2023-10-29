<template>
  <div class="row">
    <div class="col">
      <NavigationComponent />
    </div>
    <div class="col">
      <div class="about-me">
        <h2>About Me</h2>
        <button @click="toggleEditMode" v-if="!editMode">Edit</button>
        <button @click="toggleEditMode" v-if="editMode">Cancel</button>

        <FormComponent :editMode="editMode" @save-changes="saveChanges" />

      </div>
    </div>
  </div>
</template>

<script>
import FormComponent from '@/components/FormComponent.vue';

export default {
  name: 'AboutMeComponent',
  components: {
    FormComponent
  },
  data() {
    return {
      editMode: false
    };
  },
  methods: {
    toggleEditMode() {
      this.editMode = !this.editMode;
    },
    saveChanges() {
      this.editMode = false;
    },
  },
};
</script>

<style scoped>
.about-me {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
