const { createApp } = Vue;

createApp({
  data() {
    return {
      email: [],
    };
  },
  methods: {
    callApi(array) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((res) => {
          console.log(res.data.response);
          array.push(res.data.response);
        });
    },
  },
  computed: {},
  created() {},
  mounted() {
    for (let i = 0; i < 10; i++) {
      this.callApi(this.email);
    }
  },
}).mount("#app");
