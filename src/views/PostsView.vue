<template>
	<div class="loade-Post">
		<h2 style="text-align: center">Список постов</h2>
		<CreateDialog v-model:show="dialogShow">
			<CreatePost @create="createPost" />
		</CreateDialog>
		<div class="search-input">
			<mainInput placeholder="Поиск..." v-model.trim="searchPost" />
			<div class="input-btns">
				<MainButton @click="buttonVisabilitiCreate">Создать пост</MainButton>
				<MainButton @click="fatchPosts">Получить посты</MainButton>
			</div>
		</div>
		<div>
			<transition-group name="postList" v-if="!isPostLoading">
				<postItem
					v-for="post in searchPostInput"
					:key="post.id"
					:post="post"
					@remove="removePost"
				></postItem>
			</transition-group>
			<h3 v-else>Loading...</h3>
			<!-- <div class="page__wrapper">
				<div
					v-for="pageNumber in totalPages"
					:key="pageNumber"
					class="page"
					:class="{
						'current-page': page === pageNumber
					}"
					@click="lastPage(pageNumber)"
				>
					{{ pageNumber }}
				</div>
			</div> -->
			<div ref="observer"></div>
		</div>
	</div>
</template>

<script>
import CreateDialog from '@/components/UI/CreateDialog.vue'
import MainButton from '@/components/UI/MainButton.vue'
import CreatePost from '@/components/CreatePost.vue'
import MainInput from '@/components/UI/MainInput.vue'
import PostItem from '@/components/PostItem.vue'
import axios from 'axios'

export default {
	components: {
		MainInput,
		MainButton,
		PostItem,
		CreateDialog,
		CreatePost
	},
	data() {
		return {
			posts: [],
			selectedSort: '',
			searchPost: '',
			dialogShow: false,
			isPostLoading: false,
			page: 1,
			limit: 10,
			totalPages: 0
		}
	},
	methods: {
		async fatchPosts() {
			try {
				this.isPostLoading = true
				const response = await axios.get(
					'https://jsonplaceholder.typicode.com/posts?',
					{
						params: {
							_page: this.page,
							_limit: this.limit
						}
					}
				)
				this.totalPages = Math.ceil(
					response.headers['x-total-count'] / this.limit
				)
				this.posts = response.data
			} catch (e) {
				alert(e, 'Ошибка!!!')
			} finally {
				this.isPostLoading = false
			}
		},
		async loadingMorePost() {
			try {
				this.page += 1
				const response = await axios.get(
					'https://jsonplaceholder.typicode.com/posts?',
					{
						params: {
							_page: this.page,
							_limit: this.limit
						}
					}
				)
				this.totalPages = Math.ceil(
					response.headers['x-total-count'] / this.limit
				)
				this.posts = [...this.posts, ...response.data]
			} catch (e) {
				alert('Ошибка!!!')
			}
		},
		removePost(post) {
			this.posts = this.posts.filter(p => p.id !== post.id)
		},
		createPost(post) {
			this.posts.unshift(post)
			this.dialogShow = false
		},
		buttonVisabilitiCreate() {
			this.dialogShow = true
		}
		// lastPage(page) {
		// 	this.page = page
		// 	this.fatchPosts()
		// }
	},
	computed: {
		searchPostInput() {
			return this.posts.filter(post => {
				return post.title.toLowerCase().includes(this.searchPost.toLowerCase())
			})
		}
	},
	mounted() {
		this.fatchPosts()
		const options = {
			rootMargin: '0px',
			threshold: 1.0
		}
		const callback = entries => {
			if (entries[0].isIntersecting && this.page < this.totalPages) {
				this.loadingMorePost()
			}
		}
		const observer = new IntersectionObserver(callback, options)
		observer.observe(this.$refs.observer)
	}
}
</script>
<style>
.loade-Post {
	padding: 30px 20px;
	justify-content: space-between;
}
.search-input {
	margin: 30px 0;
}
.input-btns {
	padding-top: 15px;
	display: flex;
	justify-content: space-evenly;
}
.postList-item {
	display: inline-block;
	margin-right: 10px;
}
.postList-enter-active,
.postList-leave-active {
	transition: all 0.4s;
}
.postList-enter-form,
.postList-leave-to {
	opacity: 0;
	transform: translateX(130px);
}
.postList-move {
	transition: transform 0.4s ease;
}
.page__wrapper {
	display: flex;
	margin-top: 15px;
}
.page {
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
.page:hover {
	background-color: #c2c0c0;
	transition: background-color 0.3s ease 0s;
}
.current-page {
	background-color: #939946;
}
</style>
