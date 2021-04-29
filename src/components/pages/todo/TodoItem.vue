<template>
	<div class="p-5">
		<div v-if="getLength > 0">
			<h3 class="title text-left pb-3">{{title}}</h3>
			<div class="todo-items row">
				<div class="col-md-6 mt-3" v-for="(todo,index) in getTodoItems" :key="index">
					<div class="card text-left" :class="{ 'active': todo.checkedStatus}">
						<div class="card-header">
							<h5 class="modal-title">
								{{todo.taskTitle}}
								<a class="pointer float-right" data-toggle="modal" data-target="#confirmModal" @click="showModal(index)" title="Remove Task"><span>&#10539;</span></a>
								<a class="pointer float-right mr-2" @click="addChecklist(index)" title="Add Checklist"><span>&#43;</span></a>
							</h5>
							<p class="mt-3 mb-0">{{todo.taskDescription}}</p>
						</div>
						<div class="card-body">
							<p v-if="todo.checkList.length > 0">
								<ul class="list-item">
									<li v-for="(checklist, ind) in todo.checkList" :key="ind" :set="counter = ind">
										<input type="checkbox" v-model="checklist.checked" @change="checkedStatus(index)" :id="'task_'+index + ind">
										<label v-if="checklist.checked" :for="'task_'+index + ind"><del>{{todo.taskTitle}} Checklist {{ ++counter }}</del></label>
										<label v-else :for="'task_'+index + ind">{{todo.taskTitle}} Checklist {{ ++counter }}</label>
									</li>
								</ul>
							</p>
							<p v-else>
								Click on plus icon to add new check list.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div v-else>
			<p>Task list is empty. Add new task.</p>
		</div>
		<ModalPopup :id="todoId"></ModalPopup>
	</div>
</template>

<script>
import ModalPopup from '../../../components/common/ModalPopup'
import { mapGetters } from 'vuex'

export default {
  name: 'TodoItem',
  props:['title'],
  components:{
	ModalPopup
  },
  data() {
	return {
		todoId:0
	};
  },
  computed:{
	...mapGetters(['getTodoItems']),
	todos(){
		return this.getTodoItems
	},
	getLength(){
		return this.getTodoItems.length;
	}
  },
  methods:{
	addChecklist(id){
		let data = { checked: false, id:id }
		this.$store.dispatch("addCheckListItem", data)
		.then( (response) => {
			// this.flashMessage.show({
			// 	status: 'success',
			// 	title: 'Success',
			// 	message: response
			// });	
			console.log(response)
			this.$emit('clicked', []);
		}); 
	},
	checkedStatus(index){
		let checklist = this.getTodoItems[index].checkList;
		let count = 0;
		for (let i = 0; i < checklist.length; i++){
			if(checklist[i].checked){
				count++;
			}
		}

		if(count == checklist.length){
			this.getTodoItems[index].checkedStatus = true;
		} else {
			this.getTodoItems[index].checkedStatus = false;
		}

	},
	showModal(id){
		this.todoId = id;
	}
  }
}
</script>

<style scoped>
.active{
	background: #fb6b6b;
    color: #fff;
}
.active a{
    color: #fff;
}
ul.list-item {
    list-style: none;
    padding-left: 0;
}
ul.list-item label {
    padding-left: 10px;
}
.pointer{
	cursor: pointer;
	font-size: 1.5rem;
	text-decoration: none;
}
.card-header:first-child {
    border-bottom: 1px solid #dcd0d0;
}
</style>