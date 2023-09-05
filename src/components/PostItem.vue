<template>
	<div class="post" @click="$router.push(`/posts/${post.id}`)">
		<div class="post-text">
			{{ post.id }}
			<h3>Название: {{ post.title }}</h3>
			<p>Описание: {{ post.body }}</p>
		</div>
		<div class="btns" @click.stop>
			<mainButton class="btn-oupen" @click="$router.push(`/posts/${post.id}`)">
				Открыть
			</mainButton>
			<mainButton class="btn-del" @click="$emit('remove', post)">
				Удалить
			</mainButton>
		</div>
	</div>
</template>
<script>
import MainButton from './UI/MainButton.vue'
export default {
	components: {
		MainButton
	},
	name: 'postItem',
	props: {
		post: {
			type: Object,
			required: true
		}
	}
}
</script>
<style scoped>
.post {
	padding: 10px 15px;
	margin-bottom: 30px;
	border-radius: 10px;
	display: flex;
	justify-content: space-between;
	background-color: #456280;
	border: 2px solid #fff;
}
.post:hover {
	box-shadow: 2px 2px 7px #456280;
	transition: all 0.4s;
	background-color: #939946;
}
.post-text h3 {
	padding-bottom: 10px;
}
.btns {
	margin-left: 10px;
}

.btn-del {
	margin-top: 20px;
}
</style>
