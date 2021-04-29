<template>
	<div class="alert alert-success" role="alert">
		{{ message }}
	</div>
</template>

<script>
export default {
  name: 'Alert',
  props:['message']
}
</script>

<style scoped>
.alert-success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
    z-index: 9999;
    opacity: 0.9;
}
</style>