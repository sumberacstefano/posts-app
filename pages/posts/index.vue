<template>
	<main>
		<section class="search">
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
		<section class="posts">
			<div v-if="posts.length === 0">
				Sorry no results for this search.
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

	mounted () {
		this.searchQuery()
	},

	methods: {
		async searchQuery () {
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
.posts {
	max-width: 1024px;
	margin: 100px auto;
	min-height: 100vh;

	&__single {
		position: relative;
		overflow: hidden;

		img {
			width: 100%;
			object-fit: cover;
			border-radius: 4px;
			max-height: 250px;
			min-height: 250px;
		}
	}
}

.search {
  position: relative;

  &__input {
    position: relative;
    display: flex;
    align-items: center;
  }
}
</style>
