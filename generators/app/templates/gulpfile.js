var gulp = require('gulp')
var connect = require('gulp-connect')
var sourcemaps = require('gulp-sourcemaps')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var browserify = require('browserify')
var watchify = require('watchify')
var babel = require('babelify')
var child_exec = require('child_process').exec


function docs() {
  child_exec('yuidoc ./src')
}

function compile(watch) {
  var bundler = watchify(
    browserify('./src/game.js', { debug: true })
    .transform(babel, {presets: ['es2015']})
  )

  function rebundle() {
    return bundler.bundle()
      .on('error', function(err) {
        console.error(err.message)
        this.emit('end')
      })
      .pipe(source('game.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./public'))
  }

  if (watch) {
    bundler.on('update', function() {
      console.log('-> bundling...')
      docs()
      rebundle()
      connect.reload()
    })
  }
  rebundle()

}

function watch() {
  return compile(true)
}

function server() {
  connect.server({
    root: './public',
    livereload: true
  })
}

gulp.src([
  './node_modules/phaser/dist/phaser.min.js',
  './node_modules/phaser/dist/phaser.map',
])
.pipe(gulp.dest('./public/'))
gulp.task('connect', function() { return server() })
gulp.task('build', function() { return compile() })
gulp.task('watch', function() { return watch() })
gulp.task('default', ['connect', 'watch'])
