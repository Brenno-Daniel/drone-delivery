<template>
  <b-list-group>
    <b-list-group-item>
      {{ droneDescription.id }}
    </b-list-group-item>
    <b-list-group-item>
      <img :src="droneDescription.image" alt="">
    </b-list-group-item>
    <b-list-group-item>
      {{ droneDescription.name }}
    </b-list-group-item>
    <b-list-group-item>
      {{ droneDescription.address }}
    </b-list-group-item>
    <b-list-group-item>
      {{ droneDescription.battery }}
    </b-list-group-item>
    <b-list-group-item>
      {{ droneDescription.max_speed }}
    </b-list-group-item>
    <b-list-group-item>
      {{ droneDescription.average_speed }}
    </b-list-group-item>
    <b-list-group-item>
      {{ droneDescription.status }}
    </b-list-group-item>
    <b-list-group-item>
      {{ droneDescription.fly }}
    </b-list-group-item>
  </b-list-group>

</template>

<script>
import Vue from 'vue';
// import api from '@/mixins/api';

export default Vue.extend({
  name: 'DroneDescription',
  data() {
    return {
      droneDescription: '',
    };
  },
  created() {
    this.getDroneDetails();
  },
  methods: {
    getDroneDetails() {
      const { query } = this.$route;
      const { id } = query;
      fetch(`http://services.solucx.com.br/mock/drones/${id}`)
        .then((response) => response.json())
        .then((response) => {
          this.droneDescription = response;
        }).catch((error) => console.log(error));
    },
  },
});
</script>

<style>

</style>
