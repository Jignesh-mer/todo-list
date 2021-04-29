import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const todos = {
	state: {
		todoItems: []
	},
	mutations: {
		addTask : (state,todo) => {
			state.todoItems.push(todo);
		},
		removeTask : (state,id) => {
			console.log('id is', state.todoItems)
			state.todoItems.splice(id, 1);
		},
		addCheckList : (state, checklist) => {
			state.todoItems[checklist.id].checkList.push(checklist);
			state.todoItems[checklist.id].checkedStatus = false
		}
	},
	actions: {
		addTodosItem({commit}, todo){
			return new Promise((resolve) => {
				commit('addTask', todo);
				resolve('Task added successfully!');
			});
		},
		removeTodosItem({commit}, id){
			return new Promise((resolve) => {
				commit('removeTask', id);
				resolve('Task removed successfully!');
			});
		},
		addCheckListItem({commit}, checklist){
			return new Promise((resolve) => {
				commit('addCheckList', checklist);
				resolve('Checklist added successfully!');
			});
		}
	},
	getters:{
		getTodoItems: state => {
			return state.todoItems;
		}
	}
};

export default todos;

