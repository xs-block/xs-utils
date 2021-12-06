const { src, dest, series, parallel } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')
const {
	clean,
	copyfont,
	minifontCss,
	config: { input, output },
} = require('./gulpfile.base') // 基础方法
// 编译 LESS
const compile = () =>
	src([
		`${input}*.scss`,
		...['base', 'variable'].map((name) => `!${input}${name}.scss`),
	])
		.pipe(sass())
		.pipe(
			autoprefixer({
				overrideBrowserslist: ['last 2 versions'],
			})
		)
		.pipe(cssmin())
		.pipe(dest(output))
exports.build = series(clean, parallel(compile, copyfont, minifontCss))