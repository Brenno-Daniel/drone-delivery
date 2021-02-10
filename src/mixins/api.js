import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      api: 'http://services.solucx.com.br/mock/drones',
      lists: '',
    };
  },
  created() {
    this.getApi();
  },
  methods: {
    getApi() {
      fetch(this.api)
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          this.lists = response;
        });
    },
  },
});
