<template>
	<nav class="navbar">
		<div @click="$router.push('/')" class="logo">
			<span>My</span>
			<span style="color: #6b8eb3">To</span>
			<span style="color: #939946">Do</span>
		</div>
		<div class="block-Btn-Views">
			<MainButton @click="$router.push('/posts')"> Посты </MainButton>
			<MainButton @click="$router.push('/notes')"> Заметки </MainButton>
			<MainButton @click="$router.push('/about')"> О нас </MainButton>
			<MainButton @click="$router.push('/noteTwo')">Задачи</MainButton>
		</div>
	</nav>
</template>

<script>
import MainButton from './UI/MainButton.vue'
export default {
	components: {
		MainButton
	},
	name: 'HeaderNavbar'
}
</script>

<style scoped>
.navbar {
	padding: 10px;
	align-items: center;
	background-color: #456280;
	border-bottom: 2px solid #fff;
}
.block-Btn-Views {
	display: flex;
	gap: 10px;
}
.logo {
	color: #ffffff;
	font-weight: bold;
	font-size: 24px;
	cursor: pointer;
}
.logo:hover span {
	color: #b6b4b4;
	transition: color 0.4s;
}
</style>
