const rewire = require("rewire");
const defaults = rewire("react-scripts/scripts/build.js");
const config = defaults.__get__("config");

config.module.rules[1].oneOf[2] = {
	test: /\.svg$/,
	use: [
		{
			loader: require.resolve("@svgr/webpack"),
			options: {
				prettier: false,
				svgo: false,
				svgoConfig: {
					plugins: [{ removeViewBox: false }],
				},
				titleProp: true,
				ref: true,
			},
		},
		{
			loader: require.resolve("file-loader"),
			options: {
				name: "static/media/[name].[hash].[ext]",
			},
		},
	],
};

config.optimization.minimizer[0].options.minimizer.options.keep_classnames = true;
config.optimization.minimizer[0].options.minimizer.options.keep_fnames = true;
