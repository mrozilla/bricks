// =============================================================================
// gulpfile.babel.js
// =============================================================================

'use strict';

// TODO figure out css.map not working
// TODO check if grid system aligns
// TODO figure out webkit select styling

// =============================================================================
// Dependencies
// =============================================================================

// General dependencies
import gulp 			from 'gulp';
import plumber			from 'gulp-plumber';
import notify			from 'gulp-notify';
import beep 			from 'beepbeep';

// Develop dependencies
import autoprefixer 	from 'gulp-autoprefixer';
import babel			from 'gulp-babel';
import sync 			from 'browser-sync';
import changed 			from 'gulp-changed';
import concat 		    from 'gulp-concat';
import include 			from 'gulp-file-include';
import sass 			from 'gulp-sass';
import sourcemaps 		from 'gulp-sourcemaps';

// Production dependencies
import del 				from 'del';
import htmlmin			from 'gulp-htmlmin';
import imagemin 		from 'gulp-imagemin';
import inline			from 'gulp-inline-css';
import vinylPaths		from 'vinyl-paths';
import nano 			from 'gulp-cssnano';
import rename 			from 'gulp-rename';
import selectors		from 'gulp-selectors';
import sequence			from 'run-sequence';
import uglify			from 'gulp-uglify';
import uncss 			from 'gulp-uncss';

// Deploy dependencies
import gutil			from 'gulp-util';
import ftp				from 'vinyl-ftp';

// =============================================================================
// File structure
// =============================================================================

// Input files
const input 			=  './app/';
const inputHTML     	= ['./app/**/*.html','!./app/subdom/**/*'];
const inputPartials 	=  './app/**/*.tpl';
const inputSass     	= ['./app/**/*.scss','!./app/subdom/**/*'];
const inputJS       	= ['./app/**/*.js','!./app/subdom/**/*'];
const inputFonts		=  './app/fonts/**/*';
const inputImages 		=  './app/images/**/*.+(png|jpg|gif|svg)';
const inputHtaccess		=  './app/.htaccess';
const inputUniverse		=  './app/subdom/**/*';

// Output files
const output        	=  './dist/';
const outputHTML		=  './dist/**/*.html'; // TODO be careful, takes everything at the moment
const outputCSS			=  './dist/stylesheets/**/*.css';
const outputFonts		=  './dist/fonts'
const outputImages		=  './dist/images';
const outputJS 			=  './dist/js'; // TODO fix, there are two output concepts mixed here
const outputUniverse	=  './dist/subdom';
const outputDeploy		=  './dist/**/*';

// =============================================================================
// Options
// =============================================================================

// Sass options
const sassOptions = {
	errLogToConsole: true,
	outputStyle: 'expanded'
};

// Plumber options
const onError = function(err) { // TODO ES6-ise
	notify.onError({
		title: "BUILD FAILED",
		message: err.toString()
	})(err);
	beep();
	this.emit('end');
};

// Deploy options
const user = process.env.USER;    // Taken from the terminal
const password = process.env.PWD; // Taken from the terminal

const conn = ftp.create({
	host: '132322.w22.wedos.net',
	port: 21,
	user: user,
	password: password,
	parallel: 10,
	log: gutil.log
});

// =============================================================================
// Main tasks
// =============================================================================

// Development task
gulp.task('default', ['watch']);

// Production task
gulp.task('prod', ['build']);

// Clean up task
gulp.task('clean', ['clean']);

// Deploy task
gulp.task('deploy', ['deploy']);

// =============================================================================
// Development Tasks
// =============================================================================

// Fire up a server task
gulp.task('sync', () => {
	sync.init({
		server: {
		  baseDir: 'dist'
		}
	});
});

// Build html files from partials
gulp.task('html', () => {
	return gulp
		.src(inputHTML)
		.pipe(plumber({errorHandler: onError}))
		// .pipe(changed(output)) // Removed for now, collides with gulp-include
		.pipe(include({
			basepath: '@root'
		}))
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest(output))
		.pipe(sync.reload({
			stream: true
		}));
});

// Compile sass files with autoprefixer
gulp.task('sass', () => {
	return gulp
		.src(inputSass)
		.pipe(plumber({errorHandler: onError}))
		.pipe(sourcemaps.init())
		.pipe(sass(sassOptions))
		.pipe(autoprefixer())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(output))
		.pipe(sync.reload({
			stream: true
		}));
});

// Compile js files
gulp.task('jss', () => {
	return gulp
		.src(inputJS)
		.pipe(plumber({errorHandler: onError}))
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(concat('main.js'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(outputJS))
		.pipe(sync.reload({
			stream: true
		}));
});

// Move images
gulp.task('img', () => {
	return gulp
		.src(inputImages)
		.pipe(plumber({errorHandler: onError}))
		.pipe(changed(outputImages))
		.pipe(gulp.dest(outputImages))
});

// Watch for changes
gulp.task('watch', ['sync', 'html', 'sass', 'jss', 'img', 'universe'], () => {
	gulp.watch(inputHTML, ['html']);
	gulp.watch(inputPartials, ['html']);
	gulp.watch(inputSass, ['sass']);
	gulp.watch(inputJS, ['jss']);
	gulp.watch(inputImages, ['img']);
});

// =============================================================================
// Production tasks
// =============================================================================

// Delete the dist folder
gulp.task('clean', () => {
	return del
		.sync(output);
});

// Build php files from partials
gulp.task('php', () => {
	return gulp
		.src(outputHTML)
		.pipe(plumber({errorHandler: onError}))
		// .pipe(inline()) // TODO gulp-css-inline throws error for now
		.pipe(vinylPaths(del))
		.pipe(rename((path) => {
			path.extname = '.php'
		}))
		.pipe(gulp.dest(output));
});

// Compile minified css
gulp.task('css', () => {
	return gulp
		.src(inputSass)
		.pipe(plumber({errorHandler: onError}))
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(uncss({
			html: [outputHTML], // TODO ignore php, currently throws an Parse error php in the .html files
			ignore: [new RegExp('.*\.is--.*')]
		}))
		.pipe(nano())
		.pipe(gulp.dest(output));
});

gulp.task('selectors', () => {
	return gulp
		.src([outputHTML, outputCSS])
		.pipe(selectors.run())
		.pipe(gulp.dest((file) => {
			return file.base;
		}));
});

// Compile minified js
gulp.task('js', () => {
	return gulp
		.src(inputJS)
		.pipe(plumber({errorHandler: onError}))
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest(outputJS));
});

// Copy fonts
gulp.task('fonts', () => {
	return gulp
		.src(inputFonts)
		.pipe(plumber({errorHandler: onError}))
		.pipe(gulp.dest(outputFonts));
});

// Optimise images
gulp.task('images', () => {
	return gulp
		.src(inputImages)
		.pipe(plumber({errorHandler: onError}))
		.pipe(imagemin())
		.pipe(gulp.dest(outputImages));
});

// Copy server files
gulp.task('htaccess', () => {
	return gulp
		.src(inputHtaccess)
		.pipe(plumber({errorHandler: onError}))
		.pipe(gulp.dest(output));
});

// Copy universe as is
gulp.task('universe', () => {
	return gulp
		.src(inputUniverse)
		.pipe(plumber({errorHandler: onError}))
		.pipe(gulp.dest(outputUniverse));
});

// Build the distribution files
gulp.task('build', (callback) => {
	sequence(
		'clean', 
		'html',
		'css',
		'selectors',
		['fonts', 'js', 'htaccess', 'universe', 'images', 'php'],
	callback
	)
});

// =============================================================================
// Deploy tasks
// =============================================================================

// Create an ftp connection and upload the files that are newer than those on the server
// Usage: `USER=someuser PWD=somepwd gulp deploy`
gulp.task('deploy', () => {
	return gulp.src(outputDeploy, {base: output, buffer: false})
		.pipe(conn.newer('/www')) // only upload newer files
		.pipe(conn.dest('/www'))
});


