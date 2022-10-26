export const globalMixin = {
	methods: {
		scrollIntoView () {
			document.body.scrollIntoView({ behavior: 'smooth' })
		}
	}
}
