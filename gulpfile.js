const { gulp, series, parallel, dest, src, watch } = require("gulp");
const postcss = require("gulp-postcss");
const sourcemaps = require("gulp-sourcemaps");
const plumber = require("gulp-plumber");
const gutil = require("gulp-util");

/* -------------------------------------------------------------------------------------------------
Development Tasks
-------------------------------------------------------------------------------------------------- */
function startWatching() {
	watch("./src/**/*.css", stylesDev);
}

function stylesDev() {
	return src("./src/cherry.css")
		.pipe(plumber({ errorHandler: onError }))
		.pipe(sourcemaps.init())
		.pipe(postcss())
		.pipe(dest("./dist"));
}
exports.dev = series(stylesDev, startWatching);

/* -------------------------------------------------------------------------------------------------
Build Tasks
-------------------------------------------------------------------------------------------------- */
function stylesBuild() {
	return src("./src/cherry.css")
		.pipe(plumber({ errorHandler: onError }))
		.pipe(postcss())
		.pipe(dest("./dist"));
}

exports.build = series(stylesBuild);

/* -------------------------------------------------------------------------------------------------
Utility Tasks
-------------------------------------------------------------------------------------------------- */
const errorMsg = "\x1b[41mError\x1b[0m";

const onError = (err) => {
	gutil.beep();
	gutil.log(errorMsg + " " + err.toString());
	this.emit("end");
};
