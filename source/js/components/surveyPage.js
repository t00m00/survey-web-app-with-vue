import helloComponent from './helloComponent.js'

const surveyPage = {
  components: {
    'hello-component': helloComponent,
  },
  data() {
    return {
      x: 5,
      y: 6
    }
  },
  template: `
    <div>
      <v-btn>
        Button
      </v-btn>
      <p>survey-page!</p>
      <hello-component />
    </div>
  `,
  methods: {
    dummyComponentMethod() {
      
    }
  } 
}

export default surveyPage