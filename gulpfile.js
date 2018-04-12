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

gulp.task('default',function(){
    // console.log(gulp)
    gulp.src('./src/lib/bootstrap-sass-3.3.7/assets/stylesheets/*.scss')
    .pipe(sass({outputStyle:'compact'}).on('error', sass.logError))
    .pipe(gulp.dest('./src/css/'))
});




// 自动刷新服务器
let browserSync = require('browser-sync');

// 静态服务器
gulp.task('server',()=>{
    browserSync({
        // 服务器路径
        // server:'./src/',

        // 代理服务器
        proxy:'http://localhost:1806',

        // 端口
        port:1900,

        // 监听文件修改，自动刷新
        files:['./src/**/*.html','./src/css/*.css','./src/api/*.php']
    });

    // 监听sass文件修改，并自动编译
    gulp.watch('./src/sass/*.scss',['compileSass'])
})







