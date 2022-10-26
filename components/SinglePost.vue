<template>
	<div class="post mt-xl" :class="{'post--nomargin': $route.name === 'posts-id'}">
		<nuxt-link v-if="$route.name !== 'posts-id'" :to="'posts/' + postData.id">
			<div class="post__user">
				<img src="@/assets/img/user.png" />
				<p class="fs-sm ml-sm">
					{{ user.name }}
				</p>
			</div>
			<h2 class="fs-xl mt-sm">
				{{ postData.title }}
			</h2>
			<img
				:src="`https://via.placeholder.com/1024x400`"
				class="post__image mt-lg rounded"
			/>
		</nuxt-link>

		<div v-else>
			<div class="post__user">
				<img src="@/assets/img/user.png" />
				<p class="fs-sm ml-sm">
					{{ user.name }}
				</p>
			</div>
			<h2 class="fs-xl mt-sm">
				{{ postData.title }}
			</h2>
			<img
				:src="`https://via.placeholder.com/1024x400`"
				class="post__image mt-lg rounded"
			/>
			<p class="fs-md mt-lg">
				{{ postData.body }}
			</p>
		</div>

		<div v-if="$route.name !== 'posts-id'">
			<button
				v-if="!commentsBoolean"
				class="btn btn--primary mt-lg mb-lg"
				@click="fetchComments()"
			>
				<p>
					+ Show comments
				</p>
			</button>

			<button
				v-else
				class="btn btn--primary mt-lg mb-lg"
				@click="fetchComments()"
			>
				<p>
					- Hide comments
				</p>
			</button>
		</div>

		<collapse-transition>
			<div v-show="commentsBoolean" class="post__comments visible">
				<SingleComment
					v-for="comment in comments"
					:key="comment.id"
					:comment="comment"
				/>
			</div>
		</collapse-transition>
	</div>
</template>

<script>
import { CollapseTransition } from 'vue2-transitions'

export default {
	components: {
		CollapseTransition
	},

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
