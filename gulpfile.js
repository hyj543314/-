// 引入本地安装的gulp
var gulp = require('gulp');
var sass = require('gulp-sass');

// 创建一个gulp任务：编译sass
gulp.task('compileSass',function(){
	// 查找sass文件
	gulp.src('./src/sass/*.scss')	//得到文件流（文件在内存中的状态）scss

	// 通过管道传输
	// 编译
	.pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))						//编译后的文件流 css


	// 输出到硬盘
	.pipe(gulp.dest('./src/css/'))
});

// 创建一个任务监听
gulp.task('jtSass',function(){
	gulp.watch('./src/sass/*.scss',['compileSass']);
})

