<template>
	<div>
		<button class="btn">
			<slot></slot>
		</button>
	</div>
</template>

<script>
export default {}
</script>

<style scoped>
.btn {
	padding: 10px 15px;
	border-radius: 10px;
	box-shadow: 2px 2px 5px rgb(49, 49, 49);
	border: 2px solid #fff;
	background-color: rgb(185, 112, 93);
	color: #fff;
	font-weight: bold;
	font-size: 15px;
	cursor: pointer;
}
.btn:hover {
	background-color: #c2c0c0;
	transition: background-color 0.3s ease 0s;
}
</style>
