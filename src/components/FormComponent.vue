<template>
  <div class="form-component">
    <div>
      <label>First Name:</label>
      <input v-model="user.firstName" :disabled="!editMode" />
    </div>
    <div>
      <label>Last Name:</label>
      <input v-model="user.lastName" :disabled="!editMode" />
    </div>
    <div>
      <label>Student Code:</label>
      <input v-model="user.studentCode" :disabled="!editMode" />
    </div>
    <div v-if="editMode">
      <button @click="saveChanges">Save Changes</button>
    </div>
    <div>
      <p>Logged in at:</p>
      <div v-for="timestamp in user.loggedAt" :key="timestamp">{{ timestamp }}</div>
    </div>
  </div>
</template>

<script>
import { useGlobalStore } from '@/store';

export default {
  name: 'FormComponent',
  props: {
    editMode: Boolean,
  },
  setup() {
    const user = useGlobalStore().user;
    return {
      user
    };
  },
};
</script>

<style scoped>
.form-component {
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  font-weight: bold;
  margin-right: 5px;
}

input {
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
}

button {
  padding: 5px 10px;
  margin-top: 10px;
}
</style>
