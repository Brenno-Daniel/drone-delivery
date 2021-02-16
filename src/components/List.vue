<template>
<div class="container">
  <div class="header__list">
    <div>Drone</div>
    <div>Customer</div>
    <div>Battery</div>
    <div>Max Speed</div>
    <div>Avarage Speed</div>
    <div>Current Fly</div>
    <div>Status</div>
  </div>
  <div class="list"
  @click="handle(list.id)" v-for="list in lists" :key="list.id">
    <div>{{ list.id }}</div>
    <div class="customer__image">
      <img :src="list.image" alt="">
      <div class="customer__name">
        <h4>{{ list.name }}</h4>
        <p>{{ list.address }}</p>
      </div>
    </div>
    <div class="battery"
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
    <div>{{ list.max_speed }} m/h</div>
    <div>{{ list.average_speed }} m/h</div>
    <div class="current-fly">
      <div
      class="current-fly-line arrow-right"
      v-if="list.fly <= 50">
        <div
        class="current-fly-going"
        :style="{left:list.fly * 2 + '%'}"></div>
      </div>
      <div
      class="current-fly-line arrow-left"
      v-if="list.fly > 50 && list.fly <= 100">
        <div
        class="current-fly-coming"
        :style="{right:(list.fly - 51) * 2 + '%'}"></div>
      </div>
    </div>
    <div>
      <div
      class="status-btn"
      :class="{'statusBtnActive': list.status === 'failed'}">
        {{ list.status }}
      </div>
    </div>
  </div>
</div>
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

<style>
.header__list {
  display: grid;
  grid-template-columns: 0.5fr 1.5fr 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  align-items: center;
  color: #2D9CFB;
  padding: 20px 0px;
}
.list {
  display: grid;
  grid-template-columns: 0.5fr 1.5fr 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  align-items: center;
  color: #2D9CFB;
  padding: 10px 0px;
  border-top: 1px solid #19588f;
}
.customer__image {
  display: flex;
  align-items: center;
  gap: 20px;
}
.customer__name h4{
  font-size: 18px;
  font-weight: bold;
  padding: 0px;
  margin: 0px;
  color: #2D9CFB;
}
.customer__name p {
  font-size: 12px;
  padding: 0px;
  margin: 0px;
  color: #2D9CFB;
}
.battery {
    background-color: #a4e8fd;
    height: 5px;
    width: 100%;
    max-width: 80px;
    border-radius: 3px;
}

.battery-progress {
    background-color: #2D9CFB;
    height: 100%;
    position: relative;
    border-radius: 3px;
}

.battery-tooltip {
    position: absolute;
    right: 0px;
    top: -40px;
    background-color: #a5e5f8;
    padding: 5px 15px;
    border-radius: 10px;
}
.current-fly-line {
  max-width: 80px;
  width: 100%;
  height: 1px;
  background-color: #2D9CFB;
  position: relative;
}
.current-fly-going {
  height: 5px;
  width: 5px;
  border: 1px solid #2D9CFB;
  position: absolute;
  top: -2px;
  background-color: #FFF;
}
.arrow-right::after {
  content: '►';
  display: block;
  position: absolute;
  right: -10px;
  top: -13px;
}
.current-fly-coming {
  height: 5px;
  width: 5px;
  border: 1px solid #2D9CFB;
  position: absolute;
  top: -2px;
  background-color: #FFF;
}
.arrow-left::after {
  content: '◄';
  display: block;
  position: absolute;
  left: -10px;
  top: -13px;
}
.flex-row {
  flex: 1;
}
.flex-row-2 {
  flex: 2;
}
.status-btn {
  color: #FFF;
  border-radius: 3px;
  display: inline-block;
  padding: 5px 10px;
  width: 100%;
  max-width: 80px;
  text-align: center;
  background-color: #a5e5f8;
}
.statusBtnActive {
  background-color: #2D9CFB;
}
</style>
