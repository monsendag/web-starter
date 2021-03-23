const postcssPresetEnv = require('postcss-preset-env');
const tailwindcss = require("@tailwindcss/jit");
const cssnano = require("cssnano");

const mode = process.env.NODE_ENV;
const dev = mode === "development";

module.exports = {
	plugins: [
		// Some plugins, like postcss-nested, need to run before Tailwind
        postcssPresetEnv({
            stage: 4,
            features: {
                'nesting-rules': true
            }
        }),
		
		tailwindcss,
		
		!dev && cssnano({
			preset: "default",
		}),
	],
};
