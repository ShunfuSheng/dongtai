var gulp = require('gulp');
// 压缩js文件
var uglify = require('gulp-uglify');
// css样式添加浏览器前缀
var autoprefixer = require('gulp-autoprefixer');
// 压缩css文件
var cssmin = require('gulp-clean-css');
// 网页热更新
var connect = require('gulp-connect');
// 代理设置
var proxy = require('http-proxy-middleware');


// 定义处理html文件的任务
gulp.task('html', function () {
	gulp.src('templates/*.html')
		.pipe(gulp.dest('dist/'))
		.pipe(connect.reload());
});

// 定义处理js文件的任务(压缩)
gulp.task('js', function () {
	gulp.src('static/report/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
		.pipe(connect.reload());
});

// 定义css任务
gulp.task('css', function () {
	gulp.src('static/report/css/*.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions', 'Android >= 4.0']
		}))
		.pipe(gulp.dest('dist/css'))
		.pipe(cssmin({
			compatibility: 'ie8',
			keepSpecialComments: '*'
		}))
		.pipe(gulp.dest('dist/css'))
		.pipe(connect.reload());
});

// 定义热刷新任务，设置转发代理
gulp.task('connect', function () {
	connect.server({
		livereload: true,
		host: 'localhost',
		port: 8080,
		fallback: './templates/index.html',
		middleware: function (connect, opt) {
			return [
				proxy('/api', {
					target: 'http://192.168.5.129:9005',
					changeOrigin: true,
					ws: true
				})
			]
		}
	});
});

// 定义监察任务
gulp.task('watch', function () {
	gulp.watch('static/report/js/*.js', ['js']);
	gulp.watch('static/report/css/*.css', ['css']);
	gulp.watch('templates/*.html', ['html']);
});


// 注册任务列表
gulp.task('default', ['html', 'js', 'css', 'watch', 'connect']);

