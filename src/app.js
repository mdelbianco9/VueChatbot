var app = new Vue({
  el: '#app',
  data: {
    message: "",
    list: []
  },
  methods: {
    addTask: function() {
      var task = this.message;
      this.list.push(task);
      this.message = ""
      var xhr = new XMLHttpRequest();

      xhr.onload = function() {

      }
      xhr.open('GET', 'https://jsonplaceholder.typicode.com/', true);
      xhr.send(null);

    }
  }
})

/* We are building a function to take the TEXT from the Input 
and display it in an LI element.*/

