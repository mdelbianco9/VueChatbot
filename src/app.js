
const url = "http://www.omdbapi.com/?i=tt3896198&apikey=af4ba98b";

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
       var btc = this.results.Title;
       this.list.push(btc);
      console.log(btc);



    }
  },
})

/* We are building a function to take the TEXT from the Input 
and display it in an LI element.*/

