const gulp = require('gulp');
const less = require('gulp-less');
const del = require('del');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

const paths = {
	styles: {
		src: 'src/styles/**/*.less',
		dest: 'dist/css/',
	},
	scripts: {
		src: 'src/scripts/**/*.js',
		dest: 'dist/js/',
	},
};

const clean = () => {
	return del(['dist']);
};

const styles = () => {
	return gulp
		.src(paths.styles.src)
		.pipe(less())
		.pipe(
			rename({
				basename: 'main',
			})
		)
		.pipe(gulp.dest(paths.styles.dest));
};

const scripts = () => {
	return gulp
		.src(paths.scripts.src, {
			sourcemaps: 'true',
		})
		.pipe(babel())
		.pipe(concat('main.js'))
		.pipe(gulp.dest(paths.scripts.dest));
};

const watch = () => {
	gulp.watch(paths.styles.src, styles);
	gulp.watch(paths.scripts.src, scripts);
};

const build = gulp.series(clean, gulp.parallel(styles, scripts), watch);

exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
exports.build = build;
exports.default = build;
