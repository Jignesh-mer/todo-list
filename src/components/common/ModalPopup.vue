<template>
	<div class="modal fade" id="confirmModal" tabindex="-1" role="dialog" aria-labelledby="econfirmModalLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="econfirmModalLabel">Confirm Delete</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					Are you sure you want to delete this task?
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal" @click="removeTodoList()">Yes</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  name: 'ModalPopup',
  props:['id'],
  data() {
	return {
		// todos:[]
	};
  },
  computed:{
	
  },
	methods:{
		removeTodoList(){
			this.$store.dispatch("removeTodosItem", this.id)
			.then( (response) => {
				// $('#confirmModal').modal('hide');
				this.flashMessage.show({
					status: 'success',
					title: 'Success',
					message: response,
					iconClass: 'alert',
				});	
			}); 
		}
	}
}
</script>

<style>
</style>