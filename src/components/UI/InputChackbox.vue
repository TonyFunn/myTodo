<template>
	<div>
		<input
			type="checkbox"
			@change="$emit('update:modelValue', $event.target.checked)"
			:checked="modelValue"
		/>
	</div>
</template>
<script>
export default {
	props: {
		modelValue: {
			type: Boolean
		}
	}
}
</script>
