const gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer');
  pug = require('gulp-pug');
  browserSync = require('browser-sync'); 

gulp.task('sass',() =>
  gulp.src('./src/scss/styles.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    })) 
    .pipe(autoprefixer({
      versions: ['last 2 browsers']
    }))
    .pipe(gulp.dest('./dist/css'))
);

gulp.task('sass-watch',['sass'], browserSync.reload);

gulp.task('pug', () => 
  gulp.src('./src/views/pages/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./dist/'))
);

gulp.task('pug-watch',['pug'], browserSync.reload);

gulp.task('default', () => {
  browserSync({ 
    server: {
      baseDir: './dist/'
    }
  });
  gulp.watch('./src/scss/styles.scss', ['sass-watch', 'sass'])
  gulp.watch('./src/views/pages/*.pug', ['pug-watch', 'pug'])
})