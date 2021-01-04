module.exports = {
	plugins: [
		require("postcss-import"),
		require("postcss-preset-env")({
			stage: 0,
			features: {
				"nesting-rules": true,
				"color-mod-function": true,
				"custom-media": true,
			},
		}),
		require("postcss-mixins"),
		require("autoprefixer"),
		require("cssnano")(),
	],
};
