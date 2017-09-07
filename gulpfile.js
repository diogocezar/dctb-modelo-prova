Gulp = {
	self  : null,
	shell : null,
	init: function(){
		Gulp.self  = require('gulp');
		Gulp.shell = require('shelljs');
		Gulp.golatex();
		Gulp.default();
		Gulp.watch();
	},
	golatex: function(){
		Gulp.self.task('golatex', function(){
			console.log('[LATEX] Compilando arquivos LaTeX');
			Gulp.shell.exec('./compile-all-tex.sh');
		});
	},
	default: function(){
		Gulp.self.task('default', ['golatex']);
	},
	watch: function(){
		Gulp.self.task('watch', function(){
			Gulp.self.watch('*.tex', ['golatex']);
		});
	}
}

Gulp.init();