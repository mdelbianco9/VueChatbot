var app = new Vue(

{
  el: '#app',
  todos: [],
  data: {
    message: 'Hello Vue!',
    todo: null,
    editTodo: null,
    todos: [],
  },


  methods: {
  	add(todo) {
  		// Says if nothing is in input disable the Add button
  		if(!this.todoIsValid){
  			return;
  		}
      // Ths says add the todo from v-model to the todos array. 
  		this.todos.push({
  			content: todo,
  			finished: false,
  			isEdited: false,
  		});
  		// This resets the input field
  		this.todo = null;
  	},


  	edit(todo) {
  		this.editTodo = todo.content;
  		todo.isEdited = true;
  	},



  	update(todo) {
  		if(!this.editTodoIsValid){
  			return;
  		}
  		todo.content = this.editTodo;
  		todo.isEdited = false;
  	},



  	remove(todo){
  		this.todos = this.todos.filter((item) => {
  			return item != todo;
  		})
  	}
  },

  

  computed: {
  	todoIsValid() {
  		return!!this.todo;
  	},
  	editTodoIsValid() {
  		return !!this.editTodo;
  	},
  	isBeingEdited(){
  		return this.todos 
  			.filter(todo => todo.isEdited)
  			.length > 0;
  	}
  }
});

