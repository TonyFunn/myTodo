<template>
	<div class="container">
		<h1 class="container-title">Создайте цели или задачи</h1>
		<div class="flex create-note">
			<MainInput
				v-model="noteName"
				@keypress.enter="createNote"
				placeholder="Введите текст..."
			/>
			<MainButton @click="createNote">Создать</MainButton>
		</div>
		<h3 v-if="upNoteFiltered.length === 0">
			Задачь и целей пока нет. Создайте!!!
		</h3>
		<div class="blok-up" v-if="upNoteFiltered.length">
			<h3>Не завершенные:</h3>
			<div>
				<div
					class="flex blok-items"
					v-for="noteUp in upNoteFiltered"
					:key="noteUp.id"
				>
					<InputChackbox v-model="noteUp.chacked" />
					<div class="note-text">{{ noteUp.title }}</div>
					<MainButton @click="deleteNoteUp(noteUp)">Удалить</MainButton>
				</div>
			</div>
		</div>
		<div class="blok-down" v-if="downNoteFiltered.length">
			<h3>Завершенные:</h3>
			<div
				class="flex blok-items"
				v-for="noteDown in downNoteFiltered"
				:key="noteDown.id"
			>
				<InputChackbox v-model="noteDown.chacked" />
				<div class="note-text" :class="{ active: noteDown.chacked }">
					{{ noteDown.title }}
				</div>
				<MainButton @click="deleteNoteDown(noteDown)">Удалить</MainButton>
			</div>
		</div>
	</div>
</template>
<script>
import MainButton from '@/components/UI/MainButton.vue'
import MainInput from '@/components/UI/MainInput.vue'
import InputChackbox from '@/components/UI/InputChackbox.vue'
export default {
	components: {
		MainButton,
		MainInput,
		InputChackbox
	},
	data() {
		return {
			noteName: '',
			notesList: []
		}
	},
	computed: {
		upNoteFiltered() {
			return this.notesList.filter(note => !note.chacked)
		},
		downNoteFiltered() {
			return this.notesList.filter(note => note.chacked)
		}
	},
	methods: {
		createNote() {
			if (this.noteName.length) {
				this.notesList.unshift({
					id: Date.now(),
					title: this.noteName,
					chacked: false
				})
				this.noteName = ''
			}
		},
		deleteNoteUp(noteUp) {
			this.notesList = this.notesList.filter(nU => nU.id !== noteUp.id)
		},
		deleteNoteDown(noteDown) {
			this.notesList = this.notesList.filter(nU => nU.id !== noteDown.id)
		}
	}
}
</script>
<style scoped>
.container {
	padding: 20px;
}
.container h3 {
	text-align: center;
}
.container-title {
	margin-bottom: 20px;
	text-align: center;
}
.blok-items {
	padding: 10px 15px;
	border-radius: 10px;
	align-items: center;
	justify-content: space-between;
	background-color: #939946;
}
.blok-items:not(:last-child) {
	margin-bottom: 15px;
}
.blok-up {
	padding: 10px 15px;
	border-radius: 10px;
	background-color: #536f8d;
}
.blok-up h3 {
	margin-bottom: 10px;
}
.blok-down {
	padding: 10px 15px;
	margin-top: 25px;
	border-radius: 10px;
	background-color: #536f8d;
}
.blok-down h3 {
	margin-bottom: 10px;
}
.flex {
	display: flex;
}
.create-note {
	gap: 15px;
	margin-bottom: 25px;
	align-items: center;
	justify-content: center;
}
.note-text {
	font-size: 20px;
	font-weight: bold;
}
.active {
	text-decoration: line-through;
}
</style>
