<template>
  <b-list-group class="color-blue">
    <b-list-group-item>
      Drone: {{ droneDescription.id }}
    </b-list-group-item>
    <b-list-group-item>
      Customer: <img :src="droneDescription.image" alt="">
      <div class="customer__name">
        <h4>{{ droneDescription.name }}</h4>
        <p>{{ droneDescription.address }}</p>
      </div>
    </b-list-group-item>
    <b-list-group-item>
      <p class="pb-2">Battery:</p>
      <div class="battery"
      @mouseover="showTooltip = true"
      @mouseout="showTooltip = false">
      <div
      class="battery-progress"
      :style="{ width: droneDescription.battery + '%' }">
        <div
        v-if="showTooltip"
        class="battery-tooltip">
          {{ droneDescription.battery }} %
        </div>
      </div>
    </div>
    </b-list-group-item>
    <b-list-group-item>
      Max Speed: {{ droneDescription.max_speed }}
    </b-list-group-item>
    <b-list-group-item>
      Avarage Speed: {{ droneDescription.average_speed }}
    </b-list-group-item>
    <b-list-group-item>
      <p class="pb-2">Current Fly:</p>
      <div class="current-fly">
      <div
      class="current-fly-line arrow-right"
      v-if="droneDescription.fly <= 50">
        <div
        class="current-fly-going"
        :style="{left:droneDescription.fly * 2 + '%'}"></div>
      </div>
      <div
      class="current-fly-line arrow-left"
      v-if="droneDescription.fly > 50 && droneDescription.fly <= 100">
        <div
        class="current-fly-coming"
        :style="{right:(droneDescription.fly - 51) * 2 + '%'}"></div>
      </div>
    </div>
    </b-list-group-item>
    <b-list-group-item>
      Status: {{ droneDescription.status }}
    </b-list-group-item>
  </b-list-group>

</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'DroneDescription',
  data() {
    return {
      droneDescription: '',
      showTooltip: false,
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

<style scoped>
.color-blue {
  color: #2D9CFB;
}
</style>
