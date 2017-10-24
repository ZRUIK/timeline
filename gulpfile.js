var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    // 启动Browsersync服务。这将启动一个服务器，代理服务器（proxy）或静态服务器（server）
    browserSync.init({
        // 设置监听的文件，以gulpfile.js所在的根目录为起点，如果不在根目录要加上路径，单个文件就用字符串，多个文件就用数组
        files: ['src/html/*.html', 'src/css/*.css', 'src/js/*.js', 'src/data/*.json'],
        // 启动静态服务器，默认监听3000端口，设置启动时打开的index.html的路径
        server: {
            baseDir: './src',
            index: '/html/javascript_timeline.html'
        },
        // 在不同浏览器上镜像点击、滚动和表单，即所有浏览器都会同步
        ghostMode: {
            clicks: true,
            scroll: true
        },
        // 更改控制台日志前缀
        // logPrefix: 'learning browser-sync in gulp',
        // 设置监听时打开的浏览器，下面的设置会同时打开chrome, firefox和IE
        // browser: ['chrome', 'firefox', 'iexplore'],
        // 设置服务器监听的端口号
        port: 3000
    });
});

gulp.task('default',['browser-sync']);
