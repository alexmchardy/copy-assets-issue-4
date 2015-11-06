var gulp = require('gulp');
var postcss = require('gulp-postcss');
var copyAssets = require('postcss-copy-assets');
var concat = require('gulp-concat');

gulp.task("css", function () {
    var src = ["bower_components/bootswatch/united/bootstrap.css"];
    return gulp.src(src)
        .pipe(postcss([
                copyAssets({ base: "public/build" })
            ],
            { to: "public/build/css/all.css" })
        )
        .pipe(concat("all.css"))
        .pipe(gulp.dest("public/build/css"));
});

gulp.task("default", ["css"]);
