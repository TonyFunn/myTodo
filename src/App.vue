<template>
	<HeaderNavbar></HeaderNavbar>
	<div class="mainbackground">
		<router-view></router-view>
	</div>
</template>

<script>
import HeaderNavbar from './components/HeaderNavbar.vue'
export default {
	components: { HeaderNavbar }
}
</script>

<style>
html {
	background-color: #6b8eb3;
}
* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	color: #fff;
}
#app,
button {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background: none;
}

nav {
	display: flex;
	justify-content: space-between;
}
input::placeholder {
	color: #fff;
}
</style>
