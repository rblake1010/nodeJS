var gulp 				= require('gulp');
var uglify 			= require('gulp-uglify');
var sass 				= require('gulp-sass');
var browserSync = require('browser-sync');
var prefix    	= require('gulp-autoprefixer');
var jade        = require('gulp-pug');


// Scripts Task 
// Uglifies
gulp.task('scripts', function(){
	gulp.src('assets/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('minjs'));
});

gulp.task('browser-sync', ['sass'], function() {
    browserSync({
        server: {
            baseDir: ''
        },
        notify: true
    });
});


gulp.task('sass', function () {
    return gulp.src('assets/css/main.scss')
        .pipe(sass({
            includePaths: ['css'],
            onError: browserSync.notify
        }))
        //.pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('assets/css/'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('assets/css/'));
});

 gulp.task('jade', function(){
    return gulp.src(['assets/jade/*.jade' ,'!assets/jade/partials/*.jade'])
    .pipe(jade({
        pretty : '\t'
    }))
    .pipe(gulp.dest(''))
    .pipe(browserSync.reload({stream:true}));
 });


// Watch Task 
// Watches JS
gulp.task('watch', function(){
	gulp.watch('assets/css/**', ['sass']);
	//gulp.watch('assets/js/*.js', ['scripts']);
	//gulp.watch(['*.html'], ['browser-sync']);
	gulp.watch(['assets/jade/**'], ['jade']);
});

gulp.task('default', ['browser-sync', 'watch']);