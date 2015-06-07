module.exports=function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['component/src/*.js'],
                dest: 'dist/numericInput.js'
            }
        },
        uglify: {
            options: {
                mangle:true
            },
            dist: {
                files: {
                    'dist/numericInput.min.js': ['dist/numericInput.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

grunt.registerTask('release',['concat','uglify']);

}