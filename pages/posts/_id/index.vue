<template>
	<main>
		<section v-if="postData" class="post ptb-xl mlr-main">
			<nuxt-link to="/posts" class="btn btn--primary btn--flex">
				<img src="@/assets/img/arrow-left.svg" />
				<span class="ml-sm">Back to posts</span>
			</nuxt-link>

			<SinglePost :postData="postData" />

			<hr />

			<p class="fs-lg">
				Comments
			</p>

			<div class="post__comments visible mt-lg">
				<SingleComment
					v-for="comment in comments"
					:key="comment.id"
					:comment="comment"
				/>
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
	async fetch () {
		await this.$axios
			.get(process.env.baseApi + 'posts/' + this.$route?.params?.id)
			.then(data => {
				this.postData = data.data
			})

		await this.$axios
			.get(process.env.baseApi + 'posts/' + this.$route.params.id + '/comments')
			.then(data => {
				this.comments = data.data
			})
	},
	// Head function is defined in each page. The content inside the function is used for SEO.
	// This way we can have unique title, description, opengraph title, description and image for each page.
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
	}
}
</script>
