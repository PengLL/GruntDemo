# GruntDemo
##配置好了常用的几个grunt插件，能够应对普通轻量级的前端开发业务
##该demo一共有配置了五个插件：

- jshint：检查js的语法错误
- watch：实时执行这几个插件的任务
- uglify：压缩js  保存路径：build/js/
- cssmin：压缩或者合并css 保存路径：build/css/
- csscomb：整理css文件，使其显示更为整洁  保存路径：src/dest/css/


##使用步骤：
前提：安装有node和npm

- 拿到demo源文件
- 在根目录启动git，然后执行：npm install
- 此时根目录会多出一个：node_modules的文件夹，里面是所有插件的包和grunt包(实质是package.json中的devDependencies中注册的所有插件)


##然后就可以开始使用它了，如果要更改项目中的文件夹和文件名，请注意对应修改gruntfile.js中的路径
