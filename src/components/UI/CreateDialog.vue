<template>
	<div class="dialog" v-if="show" @click="hiderDialog">
		<div @click.stop class="dialog__content">
			<slot></slot>
		</div>
	</div>
</template>
<script>
export default {
	name: 'createDialog',
	props: {
		show: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		hiderDialog() {
			this.$emit('update:show', false)
		}
	}
}
</script>
<style scoped>
.dialog {
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	display: flex;
}
.dialog__content {
	margin: auto;
	padding: 20px;
	background-color: #6b8eb3;
	border-radius: 10px;
	border: 2px solid #fff;
}
</style>
