const helloComponent = {
  data() {
    return {
      x: 5,
      y: 6
    }
  },
  template: `
    <p>Hello!</p>
    <pre>{{ $data }}</pre>
  `,
  methods: {
    dummyComponentMethod() {
      
    }
  } 
}

export default helloComponent