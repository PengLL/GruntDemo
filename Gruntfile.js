
/*
 使用说明：
 1.build的files里相对路径是相对项目的根目录用户可根据实际情况进行更改
 2.需要增加对JS/css文件时，只需在build的files中添加对应的源文件和目标文件的路径即可
 3.如果需要对每个插件做更精确的控制，请自行查询具体做法，此处不做阐述了
 PS：使用哪几个插件，就在哪几个插件的build的files中添加文件路径(example:csscomb插件)
*/
// 包装函数
module.exports=function(grunt){
	// 任务配置，所有插件的配置信息
	grunt.initConfig({
		//获取package.json的信息
		pkg:grunt.file.readJSON("package.json"),
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
		// uglify插件配置信息
		uglify: {
	      options: {
	      	stripBanners:true,
	        banner: '/*! <%= pkg.name %>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
	      },
	      build: {
	      	files:{
	      		'build/js/yourName.min.js':['src/js/test.js']
	      	} 
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
        	bulid: {
	            files:{
	            	"src/dest/css/output.restored.css":["src/css/test.css"],
	            	"src/dest/css/output2.restored.css":["src/css/test2.css"]
	            }
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