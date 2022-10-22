module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue'
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
	rules: {
		"indentation": "tab",
		"linebreaks": "unix",
		"max-line-length": 160,
		"selector-id-pattern": null,
		"selector-class-pattern": null,
	}
}
