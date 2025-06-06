const { createApp } = Vue;
const { createVuetify } = Vuetify;

const vuetify = createVuetify();

createApp({
  components: {
    "survey-page": surveyPage,
  },
  data() {
    return {};
  },
}).use(vuetify).mount("#app");
