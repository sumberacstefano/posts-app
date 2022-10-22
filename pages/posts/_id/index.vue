<template>
	<main>
		<section class="post" v-if="postData">
			<nuxt-link to="/posts">Back to posts</nuxt-link>

			<h1 class="mt-xl">{{ postData.title }}</h1>
			<img src="https://via.placeholder.com/1024x400" class="mt-lg" />
			<p class="fs-md mt-lg">{{ postData.body }}</p>

			<hr />
			<p class="fs-lg">Comments</p>
			<div class="post__comments visible mt-lg">
				<SingleComment
					v-for="comment in comments"
					:key="comment.id"
					:comment="comment"
				></SingleComment>
			</div>
		</section>
	</main>
</template>

<script>
export default {
	data: () => ({
		postData: '',
		comments: ''
	}),
	head () {
		return {
			title: 'Posts app | Single post',
			meta: [
				{
					hid: 'twitter:card',
					name: 'twitter:card',
					content: 'summary_large_image'
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: 'Posts app | Single post'
				},
				{
					hid: 'description',
					name: 'description',
					content:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id purus lorem. Suspendisse vel cursus odio, eget aliquet mauris. Aliquam interdum, erat in porta accumsan, leo quam gravida nibh, in consequat ex metus vitae nulla.'
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id purus lorem. Suspendisse vel cursus odio, eget aliquet mauris. Aliquam interdum, erat in porta accumsan, leo quam gravida nibh, in consequat ex metus vitae nulla.'
				},
				{
					hid: 'og:image',
					property: 'og:image',
					content: process.env.baseURL + '/img/opengraph-image.png'
				},
				{
					hid: 'og:url',
					property: 'og:url',
					content: process.env.baseURL
				}
			]
		}
	},
	async mounted () {
		await this.$axios
			.get(process.env.baseApi + 'posts/' + this.$route?.params?.id)
			.then(data => {
				this.postData = data.data
			})

		await this.$axios
			.get(
				process.env.baseApi +
					'posts/' +
					this.$route.params.id +
					'/comments'
			)
			.then(data => {
				this.comments = data.data
			})
	}
}
</script>
