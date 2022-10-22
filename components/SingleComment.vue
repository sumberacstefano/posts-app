<template>
	<div class="post__comments__single mt-sm">
		<p class="fs-xs color-green">{{ comment.email }}</p>
		<p class="fs-lg mt-sm color-white">{{ comment.name }}</p>
		<p class="fs-xs mt-sm color-white">{{ comment.body }}</p>
	</div>
</template>
<script>
export default {
	props: {
		comment: {
			type: Object,
			required: true
		}
	}
}
</script>
