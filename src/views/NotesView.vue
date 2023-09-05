<template>
	<div>
		<div>
			<h1>Создай заметку</h1>
			<div>
				Текст:
				<mainInput
					placeholder="Тело"
					v-model="inputValue"
					@keyup.enter="createNotse"
				/>
				<mainButton @click="createNotse">Создать</mainButton>
			</div>
		</div>
		<div>
			<div v-for="note in notesup" :key="note.id" class="note">
				<inputChackbox :noteId="note.id" v-model="note.noteCheckbox" />
				<div :class="{ noteActivTrue: note.noteCheckbox }">
					{{ note.title }}
				</div>
				<MainButton @click="deleteNoteTwo(note)">Удалить</MainButton>
			</div>
		</div>
	</div>
</template>

<script>
import InputChackbox from '@/components/UI/InputChackbox.vue'
import MainInput from '@/components/UI/MainInput.vue'
import MainButton from '@/components/UI/MainButton.vue'
export default {
	components: { MainInput, MainButton, InputChackbox },
	data() {
		return {
			inputValue: '',
			notesup: []
		}
	},
	methods: {
		createNotse() {
			if (this.inputValue.length) {
				this.notesup.unshift({
					id: Date.now(),
					title: this.inputValue,
					noteCheckbox: false
				})
				this.inputValue = ''
			} else {
				alert('Впишете текст заметки')
			}
		},
		deleteNoteTwo(lastNoteId) {
			this.notesup = this.notesup.filter(note => note.id !== lastNoteId.id)
		}
	}
}
</script>

<style scoped>
.note {
	display: flex;
	align-items: center;
	background-color: #536f8d;
	margin-top: 20px;
}
.noteActivTrue {
	text-decoration: line-through;
}
</style>
