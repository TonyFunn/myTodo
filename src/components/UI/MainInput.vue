<template>
	<input type="'text'" class="input" :value="modelValue" @input="updateInput" />
</template>
<script>
export default {
	name: 'mainInput',
	props: {
		modelValue: {
			type: [String, Number]
		}
	},
	methods: {
		updateInput(event) {
			this.$emit('update:modelValue', event.target.value)
		}
	}
}
</script>
<style scoped>
.input {
	padding: 10px 15px;
	border-radius: 10px;
	box-shadow: 2px 2px 5px rgb(49, 49, 49);
	border: 2px solid #fff;
	background-color: rgb(185, 112, 93);
	font-weight: bold;
	font-size: 15px;
}
.input::placeholder {
	color: #fff;
}
</style>
