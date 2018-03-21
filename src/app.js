
const url = "http://dummy.restapiexample.com/api/v1/employees";

var app = new Vue({
  el: '#app',
  data: {
    message: "",
    list: [],
    results: [],
  },
  mounted() {

          axios.get(url).then(response => {this.results = response.data})

        },
  methods: {
    addTask: function() {
      var task = this.message;
      this.list.push(task);
      this.message = "";

      // BTC Stuff
       var btc = this.results;
       this.list.push(btc);
      console.log(btc);



    }
  },
})

/* We are building a function to take the TEXT from the Input 
and display it in an LI element.*/

