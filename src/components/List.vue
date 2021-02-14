<template>
  <ul>
    <li @click="handle(list.id)" v-for="list in lists" :key="list.id">
        <p>Drone</p>
        <p>{{ list.id }}</p>
        <img :src="list.image" alt="">
        <p>Customer {{ list.name }}</p>
        <p>Address{{ list.address }}</p>
        <div
        class="battery"
        @mouseover="showTooltip = true"
        @mouseout="showTooltip = false">
            <div
            class="battery-progress"
            :style="{ width: list.battery + '%' }">
            <div
            v-if="showTooltip"
            class="battery-tooltip">
                {{ list.battery }} %
            </div>
            </div>
        </div>
        <p>{{ list.max_speed }}</p>
        <p>{{ list.average_speed }}</p>
        <p>{{ list.status }}</p>
        <p>{{ list.fly }}</p>
    </li>
  </ul>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'List',
  data() {
    return {
      showTooltip: false,
    };
  },
  props: {
    lists: {
      type: Array,
    },
  },
  methods: {
    handle(id) {
      this.$emit('get-details', id);
    },
  },
});
</script>

<style scoped>
/* ul {
  list-style: none;
}

b-col {
  margin-top: 30px;
  padding: 10px;
} */

.battery {
    background-color: red;
    height: 10px;
    width: 100%;
}

.battery-progress {
    background-color: blue;
    height: 100%;
    position: relative;
}

.battery-tooltip {
    position: absolute;
    right: 0px;
    top: -40px;
    background-color: green;
    padding: 5px 15px;
    border-radius: 10px;
}

</style>
