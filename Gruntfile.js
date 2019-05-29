module.exports = function(grunt){
    grunt.loadNpmTasks('assemble-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.initConfig({
        less: {
            style: {

            files:{
            "css/style.css": "less/style.less"
        }
        }
        },
     watch: {
    sass: {
        files: ['less/*.less'],
        tasks: ['less']
    }
}
    });

};
