module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify'); //combines and compress JavaScript files
	grunt.loadNpmTasks('grunt-contrib-watch'); //monitors files and preform task on them
	grunt.loadNpmTasks('grunt-contrib-compass'); 
	grunt.loadNpmTasks("grunt-autoprefixer"); //fo
	
	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					'_/js/script.js': ['_/components/js/*.js']
				}//files
			}//my_target
		},//uglify
		compass: {
			dev: {
				options: {
					config: 'config.rb'
				}//options
			}//dev
		},//compass
		autoprefixer:{
			options: {
				browsers: ['last 2 versions']
			}, //options task-specific options
			multiple_files: {
				expand: true,
				flatten: true,
				src: '_/components/css/*.css',
				dest: '_/css'
			}, //multiple_files target-specific file lists and/or options to go here
		}, //autoprefixer
		watch: {
			options: {livereload: true },
			scripts: {
				files: ['_/components/js/*.js'],
				tasks: ['uglify']
			},//scripts	
			sass: {
				files: ['_/components/sass/*.scss', '_components/sass/mixins/*.scss'],
				tasks: ['compass:dev', 'autoprefixer']
			}, //sass
			html: {
				files: ['*.html']
			}//html
		}//watch
	}) //init-Config
	grunt.registerTask('default', 'watch'); //once grunt runs automatically executes command
} //exports