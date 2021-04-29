<template>
	<div class="container">
		<div class="p-5">
			<h3 class="title text-left pb-3">Add Task</h3>
			<form @submit.prevent="addTask()">
				<div class="form-group row">
					<label for="taskTitle" class="col-md-2 col-lg-2 text-left">Task Title</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" v-model.trim="todo.taskTitle" @focus="error = false" placeholder="Enter title">
						<p class="text-danger text-left mt-1" v-if="error">This field is required*</p>
					</div>
				</div>
				<div class="form-group row">
					<label for="taskDescription" class="col-md-2 col-lg-2 text-left">Task Description</label>
					<div class="col-sm-10">
						<textarea class="form-control" rows="3" v-model.lazy="todo.taskDescription" placeholder="Enter description"></textarea>
					</div>
				</div>
				<div class="form-group row">
					<label class="col-md-2 col-lg-2"></label>
					<div class="col-sm-10 text-left">
						<input type="submit" value="Save">
					</div>
				</div>
			</form>
		</div>
		<hr />
		<TodoItem title="Task List" @clicked="resetCheckList()"></TodoItem>
	</div>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'
import { mapActions } from 'vuex'
import TodoItem from './TodoItem'

export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  data() {
	return {
		todo:{
			taskTitle:'',
			taskDescription:'',
			checkList:[],
			checkedStatus:false
		},
		error:false
		// maxlength:500
	};
  },
  computed:{
	// ...mapGetters(['getTodoItems'])
  },
  methods: {
	...mapActions(['addTodosItem']),

	addTask(){
		if(!this.todo.taskTitle){
			this.error = true;
			return false;
		}

		let data = { ...this.todo };
		this.$store.dispatch("addTodosItem", data)
		.then( (response) => {
			this.flashMessage.show({
				status: 'success',
				title: 'Success',
				message: response
			});	
			this.todo.taskTitle = '';
			this.todo.taskDescription = '';
			this.todo.checkList = [];
		}); 
	},
	resetCheckList(){
		this.todo.checkList = [];
	}
  }
}
</script>

<style>
h3.title{
	color: #797878;
	font-weight: bold;
}
</style>