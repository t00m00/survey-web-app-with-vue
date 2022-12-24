import surveyPage from './components/surveyPage.js'

new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  components: {
    'survey-page': surveyPage,
  },  
  data() {
    return {
    }
  },
})