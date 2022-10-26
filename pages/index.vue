<template>
	<main />
</template>

<script>
export default {
	// Redirect to /posts because index page does not exist for this task
	middleware: [
		function ({ redirect }) {
			redirect('/posts')
		}
	]
}
</script>
