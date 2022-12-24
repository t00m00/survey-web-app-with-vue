const helloComponent = {
  data() {
    return {
      x: 5,
      y: 6
    }
  },
  template: `
    <div>
      <p>Hello!</p>
      <pre>{{ $data }}</pre>
    </div>
  `,
  methods: {
    dummyComponentMethod() {
      
    }
  } 
}

export default helloComponent