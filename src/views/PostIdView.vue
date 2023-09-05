<template>
	<div>
		<h1>Это пост с id = {{ $route.params.id }}</h1>
		<h3>{{ post.title }}</h3>
		<p>{{ post.body }}</p>
	</div>
</template>
<script>
import axios from 'axios'
export default {
	data() {
		return {
			post: {}
		}
	},
	methods: {
		async fatchPosts() {
			try {
				const response = await axios.get(
					`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
				)
				this.post = response.data
			} catch (e) {
				alert('Ошибка')
			}
		}
	},
	mounted() {
		this.fatchPosts()
	}
}
</script>
<style scoped></style>
