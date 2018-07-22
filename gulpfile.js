const browserify = require('browserify');
const fs = require('fs');
const vueify = require('vueify');
const gulp = require('gulp');

gulp.task('build', function(){
   var mainJS = browserify('./src/app.js');

   mainJS.transform(vueify)
      //.transform('uglifyify', {global: true})
      .bundle()
      .pipe(fs.createWriteStream('./public/js/app.js'));
});

gulp.watch(['./src/app.js', './src/components/*.vue'], ['build']);

gulp.task('default', ['build']);