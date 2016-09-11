// 包装函数
module.exports=function(grunt){
	// 任务配置，所有插件的配置信息
	grunt.initConfig({
		//获取package.json的信息
		pkg:grunt.file.readJSON("package.json"),
		// uglify插件配置信息
		uglify: {
	      options: {
	      	stripBanners:true,
	        banner: '/*! <%= pkg.name %>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
	      },
	      build: {
	        src: 'src/js/test.js',
	        dest: 'build/js/<%= pkg.name %>-<%=pkg.version%>.min.js'
	      }
    	},
    	// jshint插件配置信息
    	jshint:{
    		options:{
    			jshintrc:'.jshintrc'
    		},
    		build:['Gruntfile.js','src/js/*.js']
    	},
    	// watch插件配置信息
    	watch:{
    		build:{
    			files:['src/js/*.js','src/css/*.css'],
    			tasks:['jshint','uglify','cssmin','csscomb'],
    			options:{spawn:false}
    		}
    	},
    	// cssmin插件配置信息
    	cssmin:{
    		options: {
			    shorthandCompacting: false,
			    roundingPrecision: -1
			},
			build: {
			    files: {
			      'build/css/output.min.css': ['src/css/*.css']
			    }
 			}
    	},
    	// csscomb插件配置信息
    	csscomb: {
        	dynamic_mappings: {
	            expand: true,
	            cwd: 'src/css/',
	            src: ['*.css', '!*.resorted.css'],
	            dest: 'src/dest/css/',
	            ext: '.resorted.css'
	        }
    	}
	});
	// 加载包含任务的插件
  	grunt.loadNpmTasks('grunt-contrib-uglify');
  	grunt.loadNpmTasks('grunt-contrib-jshint');
  	grunt.loadNpmTasks('grunt-contrib-watch');
  	grunt.loadNpmTasks('grunt-contrib-cssmin');
  	grunt.loadNpmTasks('grunt-csscomb');
  	// 默认被执行的任务列表。
  	grunt.registerTask('default', ['jshint','uglify','cssmin','csscomb','watch']);
};