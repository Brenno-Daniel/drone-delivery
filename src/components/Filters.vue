<template>
  <div class="filters container">
    <div class="row">
      <div class="col-sm-3 p-4">
        <p class="text-left">Drone ID</p>
        <b-form-input
        class="input-style"
        v-model="idDrone" ></b-form-input>
      </div>
      <div class="col-sm-3 p-4">
        <p class="text-left">Name</p>
        <b-form-input
        class="input-style"
        v-model="name"></b-form-input>
      </div>
      <div class="col-sm-3 p-4">
        <p class="text-left">current Fly</p>
        <b-form-select
        v-model="currentFly"
        :options="currentOptions"
        class="input-style"></b-form-select>
      </div>
      <div class="col-sm-3 p-4">
        <p class="text-left">Status</p>
        <b-form-select
        class="input-style"
        v-model="status" :options="statusOptions"></b-form-select>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Filters',
  data() {
    return {
      selected: null,
      idDrone: '',
      name: '',
      currentFly: '',
      status: '',
      currentOptions: [
        { value: 1, text: 'Going' },
        { value: 2, text: 'Coming' },
        { value: 3, text: 'Stopped' },
      ],
      statusOptions: [
        { value: 1, text: 'Success' },
        { value: 2, text: 'Dalayed' },
        { value: 3, text: 'Flying' },
        { value: 4, text: 'Fail' },
        { value: 5, text: 'Offline' },
        { value: 6, text: 'Charging' },
      ],
    };
  },
});
</script>

<style scoped>
p {
  color: #2D9CFB;
  font-weight: bold;
}

.input-style {
  border: 1px solid #C3E3FD;
  background-color: #F1F9FF;
  color: #2D9CFB!important;
  height: 50px;
  border-radius: 10px;
}

.filters {
  margin-bottom: 60px;
}

</style>
