// gulpfile.js
let path = require('path')
let gulp = require('gulp')
let cleanCSS = require('gulp-clean-css')
let cssWrap = require('gulp-css-wrap')
gulp.task('css-wrap', function () {
  return (
    gulp
      .src(path.resolve('./theme/index.css'))
      /* 找需要添加命名空间的css文件，支持正则表达式 */
      .pipe(
        cssWrap({
          selector: '.custom-2bae85' /* 添加的命名空间 */
        })
      )
      .pipe(cleanCSS())
      .pipe(gulp.dest('src/theme/#2bae85'))
  ) /* 存放的目录 */
})
