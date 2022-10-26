<template>
	<main>
		<section class="search mlr-main">
			<form @submit.prevent="searchQuery">
				<div class="search__input">
					<input
						type="search"
						class="input input--search"
						placeholder="Search by post titles..."
						maxlength="50"
						v-model="userInput"
					/>

					<span class="icon-search"></span>

					<button
						type="submit"
						class="btn btn--secondary"
					>
						Search
					</button>
				</div>
			</form>
		</section>
		<section class="posts mlr-main">
			<div v-if="posts.length === 0">
				Sorry, no results for <strong>"{{ userInput }}"</strong>. Try something else...
			</div>
			<div v-else>
				<SinglePost v-for="post in posts" :key="post.id" :postData="post" />
			</div>
		</section>
	</main>
</template>

<script>
export default {
	data: () => ({
		posts: [],
		userInput: ''
	}),
	// Head function is defined in each page. The content inside the function is used for SEO.
	// This way we can have unique title, description, opengraph title, description and image for each page.
	head: {
		title: 'Posts app | Homepage',
		meta: [
			{
				hid: 'twitter:card',
				name: 'twitter:card',
				content: 'summary_large_image'
			},
			{
				hid: 'og:title',
				property: 'og:title',
				content: 'Posts app | Homepage'
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
	},

	created () {
		this.searchQuery()
	},

	methods: {
		async searchQuery () {
			// Limited to 20 posts, we could create pagination with api parameter _limit & _page,
			// making the application fetch data(posts) for each page++ until data is [] an empty array.
			await this.$axios
				.get(process.env.baseApi + 'posts?', {
					params: {
						_limit: 20
					}
				})
				.then(data => {
					this.userInput === '' ? this.posts = data.data : this.posts = this.posts.filter(el => (el.title.toLowerCase().includes(this.userInput.toLowerCase())))
				})
		}
	}
}
</script>

<style lang="scss" scoped>
</style>
