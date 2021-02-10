<template>
  <div>
    <Filters />
    <List :lists="lists" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Filters from '@/components/Filters.vue';
import List from '@/components/List.vue';
import api from '@/mixins/api';

@Component({
  components: {
    Filters,
    List,
  },
  mixins: [api],
})
export default class Home extends Vue {}
</script>
