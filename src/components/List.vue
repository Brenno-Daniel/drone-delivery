<template>
  <ul>
    <li v-for="list in lists" :key="list.id">
        <p>Drone {{ list.id }}</p>
        <p>Customer {{ list.name }}</p>
        <p>Address{{ list.address }}</p>
        <div class="battery">
            <div
            class="battery-progress"
            :style="{ width: list.battery + '%' }">
            <div class="battery-tooltip">
                {{ list.battery }} %
            </div>
            </div>
        </div>
        <p>{{ list.max_speed }}</p>
        <p>{{ list.average_speed }}</p>
        <p>{{ list.status }}</p>
        <p>{{ list.fly }}</p>
        <img :src="list.image" alt="">
    </li>
</ul>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'List',
  props: {
    lists: {
      type: Array,
    },
  },
});
</script>

<style scoped>
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
