import surveyPage from './components/surveyPage.js'

const app = Vue.createApp({
  components: {
    'survey-page': surveyPage,
  },  
  data() {
    return {
    }
  },
});

const vuetify = Vuetify.createVuetify();
app.use(vuetify);

app.mount('#app');