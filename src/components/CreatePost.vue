<template>
	<form @submit.prevent>
		<h3 class="titil-new-post">Создать пост</h3>
		<div>
			<mainInput v-model="post.title" placeholder="Введите заголовок..." />
		</div>
		<div class="post-body">
			<mainInput v-model="post.body" placeholder="Введите описани..." />
		</div>
		<MainButton @click="createdPost">Создать</MainButton>
	</form>
</template>
<script>
import MainButton from './UI/MainButton.vue'
import MainInput from './UI/MainInput.vue'
export default {
	components: { MainInput, MainButton },
	data() {
		return {
			post: {
				title: '',
				body: ''
			}
		}
	},
	methods: {
		clearForm() {
			this.post = {
				title: '',
				body: ''
			}
		},
		createdPost() {
			const payload = { ...this.post }
			payload.id = Date.now()
			this.$emit('create', payload)
			this.clearForm()
		}
	}
}
</script>
<style scoped>
.post-body {
	margin-top: 10px;
	margin-bottom: 15px;
}
.titil-new-post {
	margin-bottom: 20px;
	text-align: center;
}
</style>
