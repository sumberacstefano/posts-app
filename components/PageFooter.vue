<template>
	<footer>
		<div class="back-to-top" @click="scrollIntoView">
			<img src="@/assets/img/arrowup.png" />
		</div>
	</footer>
</template>

<script>
import { globalMixin } from '@/mixins/globalMixin'

export default {
	mixins: [globalMixin]
}
</script>
