module.exports = {
	plugins: [
		require("postcss-import"),
		require("postcss-preset-env")({
			stage: 0,
			features: {
				"nesting-rules": true,
				"color-function": true,
				"custom-media-queries": true,
			},
		}),
		require("postcss-mixins"),
		require("autoprefixer"),
		require("cssnano")(),
	],
};
