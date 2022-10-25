<template>
	<div class="post mt-xl">
		<nuxt-link :to="'posts/' + postData.id">
			<div class="post__user">
				<img src="@/assets/img/user.png" />
				<p class="fs-sm ml-sm">{{ user.name }}</p>
			</div>
			<h2 class="fs-xl mt-sm">{{ postData.title }}</h2>
			<img
				:src="`https://via.placeholder.com/1024x400`"
				class="post__image mt-lg rounded"
			/>
		</nuxt-link>
		<fade-transition v-if="!commentsBoolean">
			<button
				class="btn btn--primary mt-lg mb-lg"
				@click="fetchComments()"
			>
				<fade-transition v-if="commentsBoolean">
					<p>- Hide comments</p>
				</fade-transition>

				<fade-transition v-else>
					<p>+ Show comments</p>
				</fade-transition>
			</button>
		</fade-transition>

		<fade-transition v-else>
			<button
				class="btn btn--primary mt-lg mb-lg"
				@click="fetchComments()"
			>
				<p>- Hide comments</p>
			</button>
		</fade-transition>

		<collapse-transition>
			<div class="post__comments visible" v-show="commentsBoolean">
				<SingleComment
					v-for="comment in comments"
					:key="comment.id"
					:comment="comment"
				></SingleComment>
			</div>
		</collapse-transition>
	</div>
</template>

<script>
import { CollapseTransition, FadeTransition } from 'vue2-transitions'

export default {
	props: {
		postData: {
			type: Object,
			required: true
		}
	},
	data: () => ({
		comments: [],
		user: [],
		commentsBoolean: false
	}),

	components: {
		CollapseTransition,
		FadeTransition
	},

	async fetch () {
		await this.$axios
			.get(`${process.env.baseApi}users/${this.postData.userId}`)
			.then(data => {
				this.user = data.data
			})
	},

	methods: {
		async fetchComments () {
			// Application is currently showing all comments that each post has.
			// We could create pagination with api parameter _limit & _page,
			// making the application fetch data(comments) for each page++ until data is [] an empty array.
			await this.$axios
				.get(`${process.env.baseApi}post/${this.postData.id}/comments`)
				.then(data => {
					this.comments = data.data
				})

			this.commentsBoolean = !this.commentsBoolean
		}
	}
}
</script>

<style lang="scss" scoped>
</style>
