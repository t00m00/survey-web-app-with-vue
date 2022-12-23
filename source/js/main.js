import helloComponent from './components/helloComponent.js'

const app = Vue.createApp({
  data() {
    return {
      a: 1,
      b: 2
    }
  },
  components: {
    'hello-component': helloComponent,

  },
  methods: {
    dummy() {
      
    }
  }  
})
app.mount('#app')