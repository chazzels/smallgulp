// quick project to minifiy js on the fly. 

var destination = 'dist/';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

gulp.task('styles', function buildSass() {
	
	return watch('styles/*.*ss', function watchSass() {
		gulp.src('styles/*.*ss')
			.pipe(sass().on('error', sass.logError))
			.pipe(gulp.dest(destination));
	});
	
});

gulp.task('default', function() {
	// place code for your default task here
});

gulp.task("compress", function compressJs() {
	var opts = {
		mangle: true,
		compress: {
			sequences: true,
			dead_code: true,
			conditionals: true,
			booleans: true,
			unused: true,
			if_return: true,
			join_vars: true,
			drop_console: true
		}
	}
	return gulp.src("js/*.js")
		.pipe(uglify(opts))
		.pipe(gulp.dest("dist"));
});
