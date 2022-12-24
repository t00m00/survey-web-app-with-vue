import surveyPage from './components/surveyPage.js'

new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  components: {
    'survey-page': surveyPage,
  },  
  data() {
    return {
      a: 1,
      b: 2
    }
  },
  methods: {
    dummy() {
      
    } 
  }
})