var gulp = require('gulp');
var gulpsww = require('../../');
var package = require('./package.json');


gulp.task('offline', function() {
  return gulp.src('**/*', { cwd : './' } )
    .pipe(gulpsww({'version': package.version, 'hookSW': 'swExtra.js'}))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['offline']);