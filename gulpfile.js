const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// Sassのコンパイル処理
function compileSass() {
  return gulp
    .src("sass/**/*.scss") // すべてのSCSSファイルを対象
    .pipe(
      sass({
        outputStyle: "expanded",
      }).on("error", sass.logError) // エラーを表示
    )
    .pipe(gulp.dest("app/assets/stylesheets")); // 出力先
}

// 監視タスク
function watchFiles() {
  gulp.watch("sass/**/*.scss", compileSass);
}

// デフォルトタスク
exports.default = gulp.series(compileSass, watchFiles);
